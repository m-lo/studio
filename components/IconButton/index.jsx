import styled from 'styled-components';
import useInteractive from 'hooks/useInteractive';

const IconButtonBase = styled.button.attrs(({ size }) => ({
  style: {
    borderRadius: 120 || size,
  },
}))(({
  disabled, size = 64, theme, borderless, color,
}) => ({
  background: 'unset',
  border: 'unset',
  color: color || theme.fg,
  cursor: 'pointer',
  // borderRadius: 120,
  width: size,
  height: size,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: borderless ? 'transparent' : `${color || theme.fg}80`,
  margin: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'border-color 0.2s ease, opacity 0.1s ease',
  '&:hover, &:focus': {
    borderColor: color || theme.fg,
  },
  svg: {
    pointerEvents: 'none',
  },
  ...(disabled && {
    cursor: 'default',
    pointerEvents: 'none',
    opacity: 0.4,
    borderWidth: 0,
  }),
}));

export default function IconButton({ children, ...rest }) {
  const { handlers } = useInteractive();

  return (
    <IconButtonBase
      {...rest}
      {...handlers}
    >
      {children}
    </IconButtonBase>
  );
}
