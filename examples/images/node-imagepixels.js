import EscPosEncoder from "../../src/esc-pos-encoder.js";
import pixels from 'image-pixels';

let imageData = await pixels('image.png');

let encoder = new EscPosEncoder();

let result = encoder
    .initialize()
    .image(imageData, 64, 64, 'atkinson')
    .encode();

console.log(result);