const iconv = require('iconv-lite');
const linewrap = require('linewrap');
const Canvas = require('canvas-browserify');
const Dither = require('canvas-dither');
const Flatten = require('canvas-flatten');


/**
 * Create a byte stream based on commands for ESC/POS printers
 */
class EscPosEncoder {
    /**
     * Create a new object
     *
    */
    constructor() {
        this._reset();
    }

    /**
     * Reset the state of the object
     *
    */
    _reset() {
        this._buffer = [];
        this._codepage = 'ascii';

        this._state = {
            'bold': false,
            'underline': false,
        };
    }

    /**
     * Encode a string with the current code page
     *
     * @param  {string}   value  String to encode
     * @return {object}          Encoded string as a ArrayBuffer
     *
    */
    _encode(value) {
        return iconv.encode(value, this._codepage);
    }

    /**
     * Add commands to the buffer
     *
     * @param  {array}   value  And array of numbers, arrays, buffers or Uint8Arrays to add to the buffer
     *
    */
    _queue(value) {
        value.forEach((item) => this._buffer.push(item));
    }

    /**
     * Initialize the printer
     *
     * @return {object}          Return the object, for easy chaining commands
     *
     */
    initialize() {
        this._queue([
            0x1b, 0x40,
        ]);

        return this;
    }

    /**
     * Change the code page
     *
     * @param  {string}   value  The codepage that we set the printer to
     * @return {object}          Return the object, for easy chaining commands
     *
     */
    codepage(value) {
        const codepages = {
            'cp437': 0x00,
            'cp737': 0x40,
            'cp850': 0x02,
            'cp775': 0x5f,
            'cp852': 0x12,
            'cp855': 0x3c,
            'cp857': 0x3d,
            'cp858': 0x13,
            'cp860': 0x03,
            'cp861': 0x38,
            'cp862': 0x3e,
            'cp863': 0x04,
            'cp864': 0x1c,
            'cp865': 0x05,
            'cp866': 0x11,
            'cp869': 0x42,
            'cp1252': 0x10,
            'iso88596': 0x16,
            'windows1250': 0x48,
            'windows1251': 0x49,
            'windows1252': 0x47,
            'windows1253': 0x5a,
            'windows1254': 0x5b,
            'windows1255': 0x20,
            'windows1256': 0x5c,
            'windows1257': 0x19,
            'windows1258': 0x5e,
        };

        let codepage;

        if (!iconv.encodingExists(value)) {
            throw new Error('Unknown codepage');
        }

        if (value in iconv.encodings) {
            if (typeof iconv.encodings[value] === 'string') {
                codepage = iconv.encodings[value];
            } else {
                codepage = value;
            }
        } else {
            throw new Error('Unknown codepage');
        }

        if (typeof codepages[codepage] !== 'undefined') {
            this._codepage = codepage;

            this._queue([
                0x1b, 0x74, codepages[codepage],
            ]);
        } else {
            throw new Error('Codepage not supported by printer');
        }

        return this;
    }

    /**
     * Print text
     *
     * @param  {string}   value  Text that needs to be printed
     * @param  {number}   wrap   Wrap text after this many positions
     * @return {object}          Return the object, for easy chaining commands
     *
     */
    text(value, wrap) {
        if (wrap) {
            let w = linewrap(wrap, {lineBreak: '\r\n'});
            value = w(value);
        }

        let bytes = this._encode(value);

        this._queue([
            bytes,
        ]);

        return this;
    }

    /**
     * Print a newline
     *
     * @return {object}          Return the object, for easy chaining commands
     *
     */
    newline() {
        this._queue([
            0x0a, 0x0d,
        ]);

        return this;
    }

    /**
     * Print text, followed by a newline
     *
     * @param  {string}   value  Text that needs to be printed
     * @param  {number}   wrap   Wrap text after this many positions
     * @return {object}          Return the object, for easy chaining commands
     *
     */
    line(value, wrap) {
        this.text(value, wrap);
        this.newline();

        return this;
    }

    /**
     * Underline text
     *
     * @param  {boolean|number}   value  true to turn on underline, false to turn off, or 2 for double underline
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
    underline(value) {
        if (typeof value === 'undefined') {
            value = ! this._state.underline;
        }

        this._state.underline = value;

        this._queue([
            0x1b, 0x2d, Number(value),
        ]);

        return this;
    }

    /**
     * Bold text
     *
     * @param  {boolean}          value  true to turn on bold, false to turn off, or 2 for double underline
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
    bold(value) {
        if (typeof value === 'undefined') {
            value = ! this._state.bold;
        }

        this._state.bold = value;

        this._queue([
            0x1b, 0x45, Number(value),
        ]);

        return this;
    }

   /**
     * Change text size
     *
     * @param  {string}          value   small or normal
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
    size(value) {
        if (value === 'small') {
            value = 0x01;
        } else {
            value = 0x0;
        }

        this._queue([
            0x1b, 0x4d, value,
        ]);

        return this;
    }

    /**
     * Barcode
     *
     * @param  {string}           value  the value of the barcode
     * @param  {string}           symbology  the type of the barcode
     * @param  {number}           height  height of the barcode
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
    barcode(value, symbology, height) {
        const symbologies = {
            'upca': 0x00,
            'upce': 0x01,
            'ean13': 0x02,
            'ean8': 0x03,
            'coda39': 0x04,
            'itf': 0x05,
            'codabar': 0x06,
        };

        if (symbology in symbologies) {
            let bytes = iconv.encode(value, 'ascii');

            this._queue([
                0x1d, 0x68, height,
                0x1d, 0x77, symbology === 'code39' ? 0x02 : 0x03,
                0x1d, 0x6b, symbologies[symbology],
                bytes,
                0x00,
            ]);
        } else {
            throw new Error('Symbology not supported by printer');
        }

        return this;
    }

    /**
     * QR code
     *
     * @param  {string}           value  the value of the qr code
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
    qrcode(value) {
        let bytes = iconv.encode(value, 'iso88591');

        // 0x1d, 0x21, [ 0x00, 0x11, 0x22, 0x33 ]

        // 0x1b, 0x4a, 0x28

        let length = bytes.length + 3;

        this._queue([
            0x1d, 0x28, 0x6b, 0x04, 0x00, 0x31, 0x41, 0x32, 0x00,
            0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x43, 0x06,
            0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x45, 0x31,
            0x1d, 0x28, 0x6b,
                length % 0xff, length / 0xff,
                0x31, 0x50, 0x30,
                bytes,
            0x1d, 0x28, 0x6b, 0x03, 0x00, 0x31, 0x51, 0x30,
        ]);

        return this;
    }

    /**
     * Image
     *
     * @param  {object}         element  an element, like a canvas or image that needs to be printed
     * @param  {number}         width  width of the image on the printer
     * @param  {number}         height  height of the image on the printer
     * @param  {string}         algorithm  the dithering algorithm for making the image black and white
     * @param  {number}         threshold  threshold for the dithering algorithm
     * @return {object}                  Return the object, for easy chaining commands
     *
     */
    image(element, width, height, algorithm, threshold) {
        if (width % 8 !== 0) {
            throw new Error('Width must be a multiple of 8');
        }

        if (height % 8 !== 0) {
            throw new Error('Height must be a multiple of 8');
        }

        if (typeof algorithm === 'undefined') {
            algorithm = 'threshold';
        }

        if (typeof threshold === 'undefined') {
            threshold = 128;
        }

        let canvas = new Canvas(width, height);
        let context = canvas.getContext('2d');
        context.drawImage(element, 0, 0, width, height);
        let image = context.getImageData(0, 0, width, height);

        image = Flatten.flatten(image, [0xff, 0xff, 0xff]);

        switch (algorithm) {
            case 'threshold': image = Dither.threshold(image, threshold); break;
            case 'bayer': image = Dither.bayer(image, threshold); break;
            case 'floydsteinberg': image = Dither.floydsteinberg(image); break;
            case 'atkinson': image = Dither.atkinson(image); break;
        }

        let getPixel = (x, y) => image.data[((width * y) + x) * 4] > 0 ? 1 : 0;

        let bytes = new Uint8Array((width * height) >> 3);

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x = x + 8) {
                let i = (y * (width >> 3)) + (x >> 3);
                bytes[i] =
                    getPixel(x + 0, y) << 7 |
                    getPixel(x + 1, y) << 6 |
                    getPixel(x + 2, y) << 5 |
                    getPixel(x + 3, y) << 4 |
                    getPixel(x + 4, y) << 3 |
                    getPixel(x + 5, y) << 2 |
                    getPixel(x + 6, y) << 1 |
                    getPixel(x + 7, y);
            }
        }

        this._queue([
            0x1d, 0x76, 0x30, 0x00,
            (width >> 3) & 0xff, (((width >> 3) >> 8) & 0xff),
            height & 0xff, ((height >> 8) & 0xff),
            bytes,
        ]);

        return this;
    }

    /**
     * Encode all previous commands
     *
     * @return {Uint8Array}         Return the encoded bytes
     *
     */
    encode() {
        let length = 0;

        this._buffer.forEach((item) => {
            if (typeof item === 'number') {
                length++;
            } else {
                length += item.length;
            }
        });

        let result = new Uint8Array(length);

        let index = 0;

        this._buffer.forEach((item) => {
            if (typeof item === 'number') {
                result[index] = item;
                index++;
            } else {
                result.set(item, index);
                index += item.length;
            }
        });

        this._reset();

        return result;
    }
}

module.exports = EscPosEncoder;
