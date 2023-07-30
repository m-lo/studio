import { ThemeProvider } from "styled-components";

const theme = {
  fg: '#FEF4EE',
  bg: '#2F3061',
  gap: 8
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div
        css={{
          background: theme.bg,
          position: "absolute",
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <Story />
      </div>
    </ThemeProvider>
  ),
];