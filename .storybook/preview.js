import React from 'react';
import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <ThemeProvider
      theme={{
        primary: 'teal',
        tertial: '#EDEDED',
        white: 'white',
        secondary: 'red',
      }}
    >
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'lightgray',
    values: [
      { name: 'lightgray', value: 'E5E5E5' },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
