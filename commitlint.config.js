module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation changes
        'style', // Code style changes (formatting, missing semicolons, etc.)
        'refactor', // Code refactoring
        'test', // Adding or updating tests
        'chore', // Build process or auxiliary tool changes
        'perf', // Performance improvements
        'ci', // CI/CD changes
        'revert', // Revert a previous commit
      ],
    ],
  },
}
