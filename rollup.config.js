import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default [

	// Browser-friendly UMD build
	{
		input: 'src/esc-pos-encoder.js',
		output: {
			name: 'EscPosEncoder',
			file: 'dist/esc-pos-encoder.umd.js',
			sourcemap: true,
			format: 'umd'
		},
		plugins: [
			resolve({ browser: true }), 
			commonjs(),
            terser()
		]
	},

	// Browser-friendly ES module build
	{
		input: 'src/esc-pos-encoder.js',
		output: { 
			file: 'dist/esc-pos-encoder.esm.js', 
			sourcemap: true,
			format: 'es' 
		},
		plugins: [
			resolve({ browser: true }), 
			commonjs(),
            terser()
		]
	},

    // CommonJS (for Node) and ES module (for bundlers) build
    {
		input: 'src/esc-pos-encoder.js',
		external: ['@canvas/image-data', 'canvas-dither', 'canvas-flatten', 'resize-image-data', 'codepage-encoder', 'linewrap'],
		output: [
			{ file: 'dist/esc-pos-encoder.cjs', format: 'cjs' },
			{ file: 'dist/esc-pos-encoder.mjs', format: 'es' }
		]
	}
];
