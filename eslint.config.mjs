import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Конфиги Next через совместимость с .eslintrc
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Игнор-листы
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },

  // Базовое форматирование через фабрику Stylistic
  // По умолчанию у Stylistic: indent: 2, quotes: 'single', semi: false, jsx: true
  // Ниже переопределяется semi: true и сохраняются остальные опции
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    jsx: true,
  }),

  // Точечные доп. правила форматирования
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'eslint linebreak-style': ['error', 'windows'],
      // Запятая в конце многострочных литералов
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      // Put JSX closing bracket directly after the last prop
      '@stylistic/jsx-closing-bracket-location': ['error', 'after-props'],
      // Indent and brace style
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      // Spaces and line breaks
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/space-before-function-paren': [
        'error',
        { anonymous: 'never', named: 'never', asyncArrow: 'always' },
      ],
      '@stylistic/linebreak-style': ['error', 'windows'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/linebreak-style': ['error', 'unix'],
      // Кавычки/точки с запятой
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/semi': ['error', 'always'],
      // Стрелочные функции и переносы
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
      '@stylistic/operator-linebreak': [
        'error',
        'before',
        { overrides: { '=': 'after' } },
      ],
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
      // Ограничение длины строки (смягчённый вариант)
      '@stylistic/max-len': [
        'warn',
        {
          code: 100,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreUrls: true,
        },
      ],
    },
  },
];

export default eslintConfig;
