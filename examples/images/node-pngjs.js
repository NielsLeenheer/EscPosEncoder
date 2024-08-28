import EscPosEncoder from "../../src/esc-pos-encoder.js";
import ImageData from '@canvas/image-data';
import PNG from 'png-js';

let image = await new Promise(resolve => {
    let file = PNG.load("image.png");

    file.decode(pixels => {
        let image = new ImageData(file.width, file.height);
        image.data.set(pixels);
        resolve(image);
    });
});

let encoder = new EscPosEncoder();

let result = encoder
    .initialize()
    .image(image, 64, 64, 'atkinson')
    .encode();

console.log(result);