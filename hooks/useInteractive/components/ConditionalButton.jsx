import styled from 'styled-components';
import useInteractive from '../hook';

const BaseButton = styled.button.attrs(({ theme }) => ({
  style: {
    borderRadius: theme.gap,
  },
}))(({ theme }) => ({
  background: 'unset',
  color: theme.fg,
  cursor: 'pointer',
  borderWidth: 1,
  fontWeight: 500,
  textDecoration: 'none',
  padding: theme.gap,
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
}));

export default function ConditionalButton({ onClick, children }) {
  const { handlers } = useInteractive();
  if (onClick) {
    return (
      <BaseButton onClick={onClick} {...handlers}>
        {children}
      </BaseButton>
    );
  }
  return children;
}
