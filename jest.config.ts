import type { Config } from 'jest'

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  coverageProvider: 'v8',
  testEnvironment: 'node',
  passWithNoTests: true,
  projects: [
    {
      displayName: 'test',
    },
    {
      displayName: 'unit',
      testMatch: ['<rootDir>/src/**/*.spect.ts'],
      preset: 'ts-jest',
    },
    {
      displayName: 'integration',
      testMatch: ['<rootDir>/integration/**/*.spec.ts'],
      preset: 'ts-jest',
    },
  ],
} as Config
