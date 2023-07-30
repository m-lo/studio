import styled from 'styled-components';
import Link from 'next/link';
import { isRelative } from 'utils/url';
import useInteractive from '../hook';

const BaseLink = styled.a({
  display: 'inherit',
  textDecoration: 'none',
  height: 'auto',
});

const BaseNextLink = styled(Link)({
  display: 'inherit',
  textDecoration: 'none',
});

export default function ConditionalLink({ href, children }) {
  const { handlers } = useInteractive();
  if (!href) return children;
  if (isRelative(href)) {
    return (
      <BaseNextLink href={href} {...handlers}>
        {children}
      </BaseNextLink>

    );
  }
  return (
    <BaseLink href={href} target="_blank" rel="noreferrer" {...handlers}>
      {children}
    </BaseLink>
  );
}
