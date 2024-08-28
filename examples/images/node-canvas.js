import EscPosEncoder from "../../src/esc-pos-encoder.js";
import { createCanvas, loadImage } from 'canvas';

let image = await loadImage('image.png');

let canvas = createCanvas(64, 64);
let ctx = canvas.getContext('2d');
ctx.drawImage(image, 0, 0, 64, 64);

let encoder = new EscPosEncoder({
    createCanvas
});

let result = encoder
    .initialize()
    .image(canvas, 64, 64, 'atkinson')
    .encode();

console.log(result);