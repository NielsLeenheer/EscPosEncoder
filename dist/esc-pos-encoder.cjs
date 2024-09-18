'use strict';

var ReceiptPrinterEncoder = require('@point-of-sale/receipt-printer-encoder');

/**
 * Create a byte stream based on commands for ESC/POS printers
 */
class EscPosEncoder extends ReceiptPrinterEncoder {
  /**
     * Create a new object
     *
     * @param  {object}   options   Object containing configuration options
    */
  constructor(options) {
    options = options || {};
    options.language = 'esc-pos';

    super(options);
  }
}

module.exports = EscPosEncoder;
