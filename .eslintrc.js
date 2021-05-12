module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier/@typescript-eslint',
		'prettier',
  ],
  plugins: ['vue','nuxt','vuejs-accessibility', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'warn',
		'vue/order-in-components': [
			'error',
			{
				order: [
					'el',
					'name',
					'parent',
					'functional',
					['delimiters', 'comments'],
					['components', 'directives', 'filters'],
					'extends',
					'mixins',
					'inheritAttrs',
					'model',
					['props', 'propsData'],
					'data',
					'computed',
					'watch',
					'LIFECYCLE_HOOKS',
					'methods',
					['template', 'render'],
					'renderError',
				],
			},
		],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				singleline: 'never',
				multiline: 'never',
			},
		],
		'vue/html-closing-bracket-spacing': [
			'error',
			{
				startTag: 'never',
				endTag: 'never',
				selfClosingTag: 'always',
			},
		],
		'vue/script-indent': [
			'error',
			2,
			{
				baseIndent: 0,
				switchCase: 1,
				ignores: [],
			},
		],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  globals: {
    $nuxt: true,
  },
}
