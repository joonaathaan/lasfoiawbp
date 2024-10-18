const { BRANCH_NAME: branch } = process.env;

const commitAnalyzerConfig = [
    '@semantic-release/commit-analyzer',
    {
      preset: 'conventionalcommits',
      releaseRules: [
        {
          type: 'feat',
          release: 'minor',
        },
        {
          type: 'fix',
          release: 'patch',
        },
        {
          type: 'docs',
          release: 'patch',
        },
        {
          type: 'chore',
          release: false,
        },
        {
          type: 'ci',
          release: false,
        },
        {
          type: 'refactor',
          release: 'patch',
        },
        {
          type: 'perf',
          release: 'patch',
        },
        {
          type: 'style',
          release: 'patch',
        },
      ],
    },
  ],
  gitConfig = [
    '@semantic-release/github',
    {
      successComment: false,
      failTitle: false,
    },
  ];

/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: [
    {
      name: 'stable',
      channel: 'latest',
      prerelease: false,
    },
    {
      name: 'main',
      channel: 'dev',
      prerelease: 'dev',
    },
  ],
  plugins:
    branch === 'stable'
      ? [
          commitAnalyzerConfig,
          '@semantic-release/release-notes-generator',
          '@semantic-release/changelog',
          '@semantic-release/npm',
          gitConfig,
        ]
      : [commitAnalyzerConfig, '@semantic-release/npm'],
};
