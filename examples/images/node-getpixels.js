import EscPosEncoder from "../../src/esc-pos-encoder.js";
import getPixels from 'get-pixels';

let pixels = await new Promise(resolve => {
    getPixels('image.png', (err, pixels) => {
        resolve(pixels);
    });
});

let encoder = new EscPosEncoder();

let result = encoder
    .initialize()
    .image(pixels, 64, 64, 'atkinson')
    .encode();

console.log(result);