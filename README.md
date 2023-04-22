# esc-pos-encoder

Create a set of commands that can be send to any receipt printer that supports ESC/POS.

Before you use this library, you should also consider [ThermalPrinterEncoder](https://github.com/NielsLeenheer/ThermalPrinterEncoder), which is based on [EscPosEncoder](https://github.com/NielsLeenheer/EscPosEncoder), but also adds support for the StarPRNT language by using [StarPrntEncoder](https://github.com/NielsLeenheer/StarPrntEncoder). The API of ThermalPrinter is identical to this one and you should just be able to swap it out without any further changes.

## Usage

This package is compatible with browsers and Node. It provides bundled versions for direct use in the browser and can also be used as an input for your own bundler. And of course there are ES6 modules and CommonJS versions for use in Node.

### Direct use in the browser

The `dist` folder contains a UMD bundle that can be loaded using RequireJS or simply using a `<script>` tag. Alternatively there is a bundled ES6 module that can be imported.

For example: 

In the browser you can import `EscPosEncoder` from the `esc-pos-encoder.esm.js` file located in the `dist` folder.

    import EscPosEncoder from 'esc-pos-encoder.esm.js';

    let encoder = new EscPosEncoder();

    let result = encoder
        .initialize()
        .text('The quick brown fox jumps over the lazy dog')
        .newline()
        .qrcode('https://nielsleenheer.com')
        .encode();


Alternatively you can load the `esc-pos-encoder.umd.js` file located in the `dist` folder and instantiate a `EscPosEncoder` object. 

    <script src='dist/esc-pos-encoder.umd.js'></script>

    <script>

        let encoder = new EscPosEncoder();

    </script>

Or if you prefer a loader like RequireJS, you could use this:

    requirejs([ 'dist/esc-pos-encoder.umd' ], EscPosEncoder => {
        let encoder = new EscPosEncoder();
    });

### Using with Node (or in the browser, if you use your own bundler)

If you want to use this libary, first install the package using npm:

    npm install esc-pos-encoder --save

If you prefer ES6 modules, then import `EscPosEncoder` from `esc-pos-encoder` and use it like so:

    import EscPosEncoder from 'esc-pos-encoder';

    let encoder = new EscPosEncoder();

    let result = encoder
        .initialize()
        .text('The quick brown fox jumps over the lazy dog')
        .newline()
        .qrcode('https://nielsleenheer.com')
        .encode();

Alternatively you could use the CommonJS way of doing things and require the package:

    let EscPosEncoder = require('esc-pos-encoder');

    let encoder = new EscPosEncoder();


## Options

When you create the `EscPosEncoder` object you can specify a number of options to help with the library with generating receipts. 

### Width

To set the width of the paper you can use the `width` property. This is option, as text automatically wraps to a new line if the edge of the paper is reached, but if you want to use word wrap, you need to specify this.

    let encoder = new EscPosEncoder({
        width:    42
    });

If you use 57mm wide paper, it allows you to print up to 32 or 35 characters horizontally, depending on the resolution of the printer.

If you use 80mm wide paper, it allows you to print up to 42 or 48 characters horizontally, depending on the resolution of the printer.


## Word wrap

If you want text to automatically word wrap at the edge of the paper you can turn on `wordWrap`. If you use this option you also must specify a paper width using the `width` property.

    let encoder = new EscPosEncoder({
        width:      48,
        wordWrap:   true
    });



## Commands

You can reuse the instantiated `EscPosEncoder` class to generate multiple commands or sets of commands for the same printer. It will remember settings like code page, so you don't have to specify that on subsequent use. That does rely on that previous commands were actually send to the printer. 

All commands can be chained, except for `encode()` which will return the result as an Uint8Array which contains all the bytes that need to be send to the printer.

The following commands are available:

### Initialize

Properly initialize the printer, which means text mode is enabled and settings like code page are set to default.

    let result = encoder
        .initialize()
        .encode()

### Codepage

Set the code page of the printer. Receipt printers don't support UTF-8 or any other unicode encoding, instead the rely on legacy code pages. 

If you specify the code page, it will send a command to the printer to enable that particular code page and from then on it will automatically encode all text string to that code page. 

If you don't specify a code page, it will assume you want to print only ASCII characters and strip out any others.

    let result = encoder
        .codepage('windows1251')
        .text('Iñtërnâtiônàlizætiøn')
        .codepage('cp737')
        .text('ξεσκεπάζω την ψυχοφθόρα βδελυγμία')
        .encode()

The following code pages are supported: cp437, cp720, cp737, cp775, cp850, cp851, cp852, cp853, cp855, cp857, cp858, cp860, cp861, cp862, cp863, cp864, cp865, cp866, cp869, cp874, cp922, cp1098, cp1118, cp1119, cp1125, cp2001, cp3001, cp3002, cp3011, cp3012, cp3021, cp3041, cp3840, cp3841, cp3843, cp3844, cp3845, cp3846, cp3847, cp3848, iso885915, iso88592, iso88597, rk1048, windows1250, windows1251, windows1252, windows1253, windows1254, windows1255, windows1256, windows1257, windows1258.

#### Printer support

Support for one specific code pages is not only dependant on this library, even more important is that the printer understands it. And support for code pages depend on manufacturer and model. Some only support a few, some support most of these. There are probably no printers that support all of them. 

Before choosing a code page, check the technical manual of your printer which codepages are supported. If your printer does not support a code page that you need, you are out of luck and nothing this library does can help you solve this problem. 

#### Advanced text compositing

For some languages it might even be better to print text as an image, because receipt printers do not support advanced text compositing required by some languages, such as Arabic. You can do this by creating a Canvas and drawing your text on there. When finished, you can then use the canvas as a parameter of the `.image()` method to send it to the printer.

#### Code page mappings

By default this library uses the Epson code page mappings and Epson printers will support most of the code pages out of the box. However, other manufacturers might support the same code pages, but use a different mapping. That means that even though
the printer supports the code page, the way to activate it is different for that printer. This library does support a number of code page mappings for other manufacturers, such as `bixolon`, `zjiang` and `star` (in ESC/POS emulation mode).

You can activate these alternative mappings with a parameter when the library is instantiated:

    let encoder = new EscPosEncoder({ 
        codepageMapping: 'bixolon' 
    });

If you want to use a code page mapping that is specific to your printer, you can also specify an object with the correct mappings:

    let encoder = new EscPosEncoder({ 
        codepageMapping: {
            'cp437': 0x00,
            'cp850': 0x02,
            'cp860': 0x03,
            'cp863': 0x04,
            'cp865': 0x05,
            'cp851': 0x0b,
            'cp858': 0x13,
        } 
    });

Each property name must be one of the code pages supported by this library and the value is the number which is used for that code page on your printer. 


#### Auto encoding

It is also possible to enable auto encoding of code pages. The library will then automatically switch between code pages depending on the text that you want to print. 

    let result = encoder
        .codepage('auto')
        .text('Iñtërnâtiônàlizætiøn')
        .text('διεθνοποίηση')
        .text('интернационализация')
        .encode()

Or even mix code pages within the same text:

    let result = encoder
        .codepage('auto')
        .text('You can mix ελληνική γλώσσα and русский язык')
        .encode()

By default the library only considers some of the most common code pages when detecting the right code page for each letter. If you want to add another code page candidate or remove on, because it is not supported by your printer, you can. You can customize the candidate code pages by setting an option during instantiation of the library:

    let encoder = new EscPosEncoder({ 
        codepageCandidates: [
            'cp437', 'cp858', 'cp860', 'cp861', 'cp863', 'cp865',
            'cp852', 'cp857', 'cp855', 'cp866', 'cp869',
        ]
    });



### Text

Print a string of text. If the text is longer than the line width of the printer, it will automatially wrap to the next line when it reaches the maximum width. That means it could wrap right in the middle of a word.

    let result = encoder
        .text('The quick brown fox jumps over the lazy dog')
        .encode()

An optional parameter turns on word wrapping. To enable this, specify the maximum length of the line.

    let result = encoder
        .text('The quick brown fox jumps over the lazy dog', 20)
        .encode()

### Newline

Move to the beginning of the next line.

    let result = encoder
        .newline()
        .encode()

### Line

Print a line of text. This is similar to the `text()` command, except it will automatically add a `newline()` command.

    let result = encoder
        .line('The is the first line')
        .line('And this is the second')
        .encode()

This would be equal to:

    let result = encoder
        .text('The is the first line')
        .newline()
        .text('And this is the second')
        .newline()
        .encode()

An optional parameter turns on word wrapping. To enable this, specify the maximum length of the line.

    let result = encoder
        .line('The quick brown fox jumps over the lazy dog', 20)
        .encode()

### Underline

Change the text style to underline. 

    let result = encoder
        .text('This is ')
        .underline()
        .text('underlined')
        .underline()
        .encode()

It will try to remember the current state of the text style. But you can also provide and additional parameter to force the text style to turn on and off.

    let result = encoder
        .text('This is ')
        .underline(true)
        .text('bold')
        .underline(false)
        .encode()

### Bold

Change the text style to bold. 

    let result = encoder
        .text('This is ')
        .bold()
        .text('bold')
        .bold()
        .encode()

It will try to remember the current state of the text style. But you can also provide and additional parameter to force the text style to turn on and off.

    let result = encoder
        .text('This is ')
        .bold(true)
        .text('bold')
        .bold(false)
        .encode()

### Italic

Change the text style to italic. 

    let result = encoder
        .text('This is ')
        .italic()
        .text('italic')
        .italic()
        .encode()

It will try to remember the current state of the text style. But you can also provide and additional parameter to force the text style to turn on and off.

    let result = encoder
        .text('This is ')
        .italic(true)
        .text('italic')
        .italic(false)
        .encode()

Note: this text style is not supported by most receipt printers. 

### Invert

Change the style to white text on a black background. 

    let result = encoder
        .text('This is ')
        .invert()
        .text('white text on black')
        .invert()
        .encode()

It will try to remember the current state of the text style. But you can also provide and additional parameter to force the text style to turn on and off.

    let result = encoder
        .text('This is ')
        .invert(true)
        .text('white text on black')
        .invert(false)
        .encode()

### Align

Change the alignment of the text. You can specify the alignment using a parameter which can be either "left", "center" or "right".

    let result = encoder
        .align('right')
        .line('This line is aligned to the right')
        .align('center')
        .line('This line is centered')
        .align('left')
        .line('This line is aligned to the left')
        .encode()

### Size

Change the text size. You can specify the size using a parameter which can be either "small" or "normal".

    let result = encoder
        .size('small')
        .line('A line of small text')
        .size('normal')
        .line('A line of normal text')
        .encode()

### Width

Change the text width. You can specify the width using a parameter which can be a number from 1 to 8.

    let result = encoder
        .width(2)
        .line('A line of text twice as wide')
        .width(3)
        .line('A line of text three times as wide')
        .width(1)
        .line('A line of text with normal width')
        .encode()

Not all printers support all widths, it is probably best to not go over 4x at the most just to be safe.

### Height

Change the text height. You can specify the height using a parameter which can be a number from 1 to 8.

    let result = encoder
        .height(2)
        .line('A line of text twice as high')
        .height(3)
        .line('A line of text three times as high')
        .height(1)
        .line('A line of text with normal height')
        .encode()

Not all printers support all heights, it is probably best to not go over 4x at the most just to be safe.

Also, you can combine this command with the width command to make the text bigger. For example:

    let result = encoder
        .width(2)
        .height(2)
        .line('This text is twice as large as normal text')
        .width(1)
        .height(1)
        .encode()

### Table

Insert a table with multiple columns. The contents of each cell can be a string, or a callback function.

    let result = encoder
        .table(
            [
                { width: 36, marginRight: 2, align: 'left' },
                { width: 10, align: 'right' }
            ], 
            [
                [ 'Item 1', '€ 10,00' ],
                [ 'Item 2', '15,00' ],
                [ 'Item 3', '9,95' ],
                [ 'Item 4', '4,75' ],
                [ 'Item 5', '211,05' ],
                [ '', '='.repeat(10) ],
                [ 'Total', (encoder) => encoder.bold().text('€ 250,75').bold() ],
            ]
        )	
        .encode()

The table function takes two parameters. 

The first parameter is an array of column definitions. Each column can have the folowing properties:

- `width`:  determines the width of the column. 
- `marginLeft` and `marginRight`: set a margin to the left and right of the column. 
- `align`: sets the horizontal alignment of the text in the column and can either be `left` or `right`.
- `verticalAlign`: sets the vertical alignment of the text in the column and can either be `top` or `bottom`.

The second parameter contains the data and is an array that contains each row. There can be as many rows as you would like.

Each row is an array with a value for each cell. The number of cells in each row should be equal to the number of columns you defined previously.

    [
        /* Row one, with two columns */
        [ 'Cell one', 'Cell two' ],

        /* Row two, with two columns */
        [ 'Cell three', 'Cell four' ]
    ]

The value can either be a string or a callback function. 

If you want to style text inside of a cell, can use the callback function instead. The first parameter of the called function contains the encoder object which you can use to chain additional commands.

    [
        /* Row one, with two columns */
        [ 
            'Cell one',
            (encoder) => encoder.bold().text('Cell two').bold()
        ],
    ]


### Box

Insert a bordered box. 

The first parameter is an object with additional configuration options.

- `style`: The style of the border, either `single` or `double`
- `width`: The width of the box, by default the width of the paper
- `marginLeft`: Space between the left border and the left edge
- `marginRight`: Space between the right border and the right edge
- `paddingLeft`: Space between the contents and the left border of the box
- `paddingRight`: Space between the contents and the right border of the box
- `align`: The alignment of the text within the box, can be `left` or `right`.

The second parameter is the content of the box and it can be a string, or a callback function.

For example:

    let result = encoder
        .box(
            { width: 30, align: 'right', style: 'double', marginLeft: 10 }, 
            'The quick brown fox jumps over the lazy dog
        )
        .encode()


### Rule

Insert a horizontal rule.

The first parameters is an object with additional styling options:

- `style`: The style of the line, either `single` or `double`
- `width`: The width of the line, by default the width of the paper

For example:

    let result = encoder
        .rule({ style: 'double' })  
        .encode()

### Barcode

Print a barcode of a certain symbology. The first parameter is the value of the barcode as a string, the second is the symbology and finally the height of the barcode.

The following symbologies can be used: 'upca', 'ean13', 'ean8', 'code39', 'itf', 'codabar', 'code93', 'code128', 'gs1-128', 'gs1-databar-omni', 'gs1-databar-truncated', 'gs1-databar-limited', 'gs1-databar-expanded', 'code128-auto'.

_Just because the symbology is suppored by this library does not mean that the printer will actually support it. If the symbology is not supported, the barcode will simply not be printed, or the raw data will be printed instead, depending on the model and manufacturer of the printer._

In general the printer will automatically calculate the checksum if one is not provided. If one is provided in the data, it will not check the checksum. If you provide the checksum yourself and it is not correctly calculated, the behaviour is not defined. It may calculate the correct checksum use that instead or print an invalid barcode. 

For example with the checksum provided in the data:

    let result = encoder
        .barcode('3130630574613', 'ean13', 60)
        .encode()

Or without a checksum:

    let result = encoder
        .barcode('313063057461', 'ean13', 60)
        .encode()

Both examples above should result in the same barcode being printed.

Furthermore, depending on the symbology the data must be handled differently:

| Symbology | Length | Characters |
|-|-|-|
| upca | 11 - 12 | 0 - 9 |
| ean8 | 7 - 8 | 0 - 9 |
| ean13 | 12 - 13 | 0 - 9 |
| code39 | >= 1 | 0 - 9, A - Z, space, or $ % * + - . / |
| itf | >= 2 (even) | 0 - 9 |
| codabar | >= 2 | 0 - 9, A - D, a - d, or $ + − . / : |
| code93 | 1 - 255 | ASCII character (0 - 127) |
| code128 | 1 - 253 | ASCII character (32 - 127) |

The Code 128 symbology specifies three different code sets which contain different characters. For example: CODE A contains ASCII control characters, special characters, digits and uppercase letters. CODE B contains special characters, digits, uppercase letters and lowercase letters. CODE C prints 2 digits numbers that correspond to the ASCII value of the letter.  

By default Code 128 uses CODE B. It is possible to use a different code set, by using the code set selector character { followed by the uppercase letter of the character set.

For example with the default CODE B set: 

    let result = encoder
        .barcode('CODE128 test', 'code128', 60)
        .encode()

Is equivalent to manually selecting CODE B:

    let result = encoder
        .barcode('{B' + 'CODE128 test', 'code128', 60)
        .encode()

And Code C only supports numbers, but you must encode it as a string:

    let result = encoder
        .barcode('{C' + '2Uc#', 'code128', 60)
        .encode()

If you look up the value of the characters in an ASCII table, you will see that 2 = 50, U = 85, c = 99 and # = 35.

The printed barcode will be 50859935.

All of the other symbologies require even more complicated encoding specified in the Espon ESC/POS printer language specification. To use these other symbologies you need to encode these barcodes yourself.



### Qrcode

Print a QR code. The first parameter is the data of the QR code.

    let result = encoder
        .qrcode('https://nielsleenheer.com')
        .encode()

The qrcode function accepts the following additional parameters:

- *model* - a number that can be 1 for Model 1 and 2 for Model 2
- *size* - a number that can be between 1 and 8 for determining the size of the QR code
- *errorlevel* - a string that can be either 'l', 'm', 'q' or 'h'.

For example:

    let result = encoder
        .qrcode('https://nielsleenheer.com', 1, 8, 'h')
        .encode()


### Image

Print an image. The image is automatically converted to black and white and can optionally be dithered using different algorithms.

The first parameter is the image itself. When running in the browser it can be any element that can be drawn onto a canvas, like an img, svg, canvas and video elements. When on Node it can be a Canvas provided by the `canvas` package. 

The second parameter is the width of the image on the paper receipt in pixels. It must be a multiple of 8.

The third parameter is the height of the image on the paper receipt in pixels. It must be a multiple of 8.

The fourth parameter is the dithering algorithm that is used to turn colour and grayscale images into black and white. The follow algorithms are supported: threshold, bayer, floydsteinberg, atkinson. If not supplied, it will default to a simple threshold.

The fifth paramter is the threshold that will be used by the threshold and bayer dithering algorithm. It is ignored by the other algorithms. It is set to a default of 128.

    let img = new Image();
    img.src = 'https://...';
    
    img.onload = function() {
        let result = encoder
            .image(img, 320, 320, 'atkinson')
            .encode()
    }

#### Column or raster image mode

Depending on how new your printer is you might want to use 'column' mode or 'raster' mode. The default is 'column'. The main difference is how images are encoded. Some newer printers do not support 'raster' mode images, while some older printer do not support 'column' mode images. It may depend on the printer model what mode you should use.

To opt in to 'raster' mode you need to provide the constructor of the `EscPosEncoder` class with an options object with the property `imageMode` set to `raster`.

    let encoder = new EscPosEncoder({ 
        imageMode: 'raster' 
    });

_Note: In EscPosEncoder 1.x the 'raster' image mode was the default mode. This changed in EscPosEncoder 2.0 as 'column' image mode will be more future compatible._

### Cut

Cut the paper. Optionally a parameter can be specified which can be either be "partial" or "full". If not specified, a full cut will be used. 

    let result = encoder
        .cut('partial')
        .encode()

_Note: Not all printer models support cutting paper. And even if they do, they might not support both types of cuts._

### Pulse

Send a pulse to an external device, such as a beeper or cash drawer. 

    let result = encoder
        .pulse()
        .encode()

The first parameter is the device where you want to send the pulse. This can be 0 or 1 depending how the device is connected. This parameter is optional an by default it will be send to device 0.

The second parameter is how long the pulse should be active in milliseconds, with a default of 100 milliseconds

The third parameter is how long there should be a delay after the pulse has been send in milliseconds, with a default of 500 milliseconds.

    let result = encoder
        .pulse(0, 100, 500)
        .encode()

### Raw

Add raw printer commands, in case you want to send a command that this library does not support natively. For example the following command is to turn of Kanji character mode.

    let result = encoder
        .raw([ 0x1c, 0x2e ])
        .encode()
        

## License

MIT
