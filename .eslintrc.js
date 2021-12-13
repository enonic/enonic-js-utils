module.exports = {
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	globals: {
		// CommonJS (CJS) format
		module: false
	},
	plugins: ['@typescript-eslint'],
	rules: { // https://eslint.org/docs/rules
		'@typescript-eslint/no-inferrable-types': ['off'],
		indent: ['warn', 'tab'],
		'prefer-rest-params': ['off'], // This rule should not be used in ES3/5 environments.
		'no-inferrable-types': ['off'],
		'no-tabs': ['off']
	}
};
