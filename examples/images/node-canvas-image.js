import EscPosEncoder from "../../src/esc-pos-encoder.js";
import { createCanvas, loadImage } from 'canvas';

let image = await loadImage('image.png');

let encoder = new EscPosEncoder({
    createCanvas
});

let result = encoder
    .initialize()
    .image(image, 64, 64, 'atkinson')
    .encode();

console.log(result);