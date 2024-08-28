import EscPosEncoder from "../../src/esc-pos-encoder.js";
import readimage from 'readimage';
import fs from 'node:fs';


let image = await new Promise(resolve => {
    readimage(fs.readFileSync("image.png"), (err, image) => {
        resolve(image);
    });
})

let encoder = new EscPosEncoder();

let result = encoder
    .initialize()
    .image(image, 64, 64, 'atkinson')
    .encode();

console.log(result);