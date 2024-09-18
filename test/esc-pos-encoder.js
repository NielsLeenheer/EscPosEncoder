import EscPosEncoder from '../src/esc-pos-encoder.js';
import { assert, expect } from 'chai';


describe('EscPosEncoder', function() {
    let encoder = new EscPosEncoder();

    describe('EscPosEncoder()', function () {
        it('should be .language == esc-pos', function () {
            assert.deepEqual('esc-pos', encoder.language);
        });
    });
});
