import fs from 'node:fs';
import { stringify } from 'javascript-stringify';

function generateMappings() {

    let output = '';
    output += 'const codepageMappings = {\n';


    try {
        let files = fs.readdirSync('data/mappings/');

        for (let file of files) {
            let data = fs.readFileSync('data/mappings/' + file, 'utf8');
            let lines = data.split("\n");

            let name = file.replace(/\.txt$/, '').replace(/-legacy/g, '\/legacy');
            let list = new Map();

            for (let line of lines) {
                if (line.length > 1 && line.charAt(0) != '#') {
                    let [ skip, key, value ] = line.split(/\t/);
                    list.set(parseInt(key, 16), value.trim());
                }
            }

            let mapping = new Array(Math.max(...list.keys()));

            for (let [ key, value ] of list) {
                mapping[key] = value;
            }   

            output += `\t'${name}': ${stringify(mapping)},\n`;
        }
    }
    catch (err) {
        console.error(err);
    }

    output += '};\n\n';

    output += 'codepageMappings[\'zijang\'] = codepageMappings[\'pos-5890\'];\n\n';
    output += 'export default codepageMappings;\n';

    fs.writeFileSync('generated/mapping.js', output, 'utf8');
}

generateMappings();