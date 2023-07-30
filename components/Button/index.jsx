import styled from 'styled-components';

export const ButtonGroup = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16,
});

const Button = styled.button(({ size = 24, compact, theme }) => ({
  background: 'unset',
  color: theme.fg,
  cursor: 'pointer',
  borderWidth: 1,
  fontWeight: 500,
  textDecoration: 'none',
  padding: (size / 4) * 3,
  borderStyle: 'solid',
  borderColor: theme.fg,
  margin: 0,
  display: 'inline-flex',
  width: 'max-content',
  transition: 'background-color 0.2s ease, color 0.2s ease',
  '&:hover, &:focus': {
    backgroundColor: theme.fg,
    color: theme.bg,
  },
  ...(!compact && {
    marginTop: theme.gap * 2,
    marginBottom: theme.gap * 2,
  }),
}));

export default Button;
