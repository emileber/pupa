const buble = require('rollup-plugin-buble');
const pkg = require('./package.json');

const version = process.env.VERSION || pkg.version;
const name = pkg.name;
const banner =
    `/**
 * ${name} v${version}
 * (c) ${new Date().getFullYear()} ${pkg.author.name}
 * @license ${pkg.license}
 */`;

const defaultOutput = {name, banner};

module.exports = {
	input: './index.js',
	output: [
		{
			file: `dist/${name}.js`,
			format: 'umd'
		},
		{
			file: `dist/${name}.common.js`,
			format: 'cjs'
		},
		{
			file: `dist/${name}.esm.js`,
			format: 'es'
		}
	].map(out => Object.assign({}, defaultOutput, out)),
	plugins: [buble()]
};
