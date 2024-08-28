import EscPosEncoder from "../../src/esc-pos-encoder.js";
import sharp from "sharp";

let buffer = await sharp('image.png')
  .raw()
  .toBuffer({ resolveWithObject: true });

let encoder = new EscPosEncoder();

let result = encoder
    .initialize()
    .image(buffer, 64, 64, 'atkinson')
    .encode();

console.log(result);