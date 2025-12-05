import nextConfig from 'eslint-config-next'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

const eslintConfig = [
  ...nextConfig,
  prettierRecommended,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'test-results/**',
      'playwright-report/**',
    ],
  },
  {
    files: ['jest.config.js', 'jest.setup.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    // Relax some stricter rules introduced in eslint-config-next 16.x
    // These are pre-existing issues that should be addressed separately
    rules: {
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/immutability': 'warn',
    },
  },
]

export default eslintConfig
