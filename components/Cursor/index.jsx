import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

const CursorRegion = styled.span({
  pointerEvents: 'none',
  userSelect: 'none',
  height: '100%',
  width: '100%',
  position: 'absolute',
  overflow: 'hidden',
});

const Circle = styled.div.attrs(
  ({
    isMouseDown, isVisible, position,
  }) => {
    function getRadius() {
      switch (true) {
        case isMouseDown:
          return 12;
        case isVisible:
          return 24;
        default:
          return 0;
      }
    }
    return {
      style: {
        transition: 'background 0.4s, height 0.2s, width 0.2s, opacity 0.4s',
        height: getRadius(),
        width: getRadius(),
        mixBlendMode: 'difference',
        background: '#FFFFFF',
        opacity: isVisible ? 1 : 0,
        ...position,
      },
    };
  },
)({
  position: 'absolute',
  borderRadius: 64,
  transform: 'translate(-50%, -50%)',
  zIndex: 9999,
  pointerEvents: 'none',
  userSelect: 'none',
});

export default function Cursor() {
  const delay = 12;
  const ref = useRef();
  const x = useRef(0);
  const y = useRef(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const xDelay = useRef(0);
  const yDelay = useRef(0);
  const requestRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    function mouseMoveEvent(e) {
      x.current = e.pageX;
      y.current = e.pageY;
    }
    function mouseEnterEvent() {
      setIsVisible(true);
    }
    function mouseLeaveEvent() {
      setIsVisible(false);
    }
    function mouseDownEvent() {
      setIsMouseDown(true);
    }
    function mouseUpEvent() {
      setIsMouseDown(false);
    }
    function animate() {
      xDelay.current += (x.current - xDelay.current) / delay;
      yDelay.current += (y.current - yDelay.current) / delay;
      setPosition({
        top: yDelay.current,
        left: xDelay.current,
      });
      requestRef.current = requestAnimationFrame(animate);
    }
    function release(e) {
      mouseMoveEvent(e);
      mouseUpEvent();
    }
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseover', mouseEnterEvent);
    document.addEventListener('mouseout', mouseLeaveEvent);
    document.addEventListener('mousedown', mouseDownEvent);
    document.addEventListener('mouseup', mouseUpEvent);
    document.addEventListener('drag', mouseMoveEvent);
    document.addEventListener('dragend', release);
    document.addEventListener('contextmenu', release);
    animate();
    return () => {
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseover', mouseEnterEvent);
      document.removeEventListener('mouseout', mouseLeaveEvent);
      document.removeEventListener('mousedown', mouseDownEvent);
      document.removeEventListener('mouseup', mouseUpEvent);
      document.removeEventListener('drag', mouseMoveEvent);
      document.removeEventListener('dragend', release);
      document.removeEventListener('contextmenu', release);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  return (
    <CursorRegion>
      <Circle
        ref={ref}
        isMouseDown={isMouseDown}
        isVisible={isVisible}
        position={position}
      />
    </CursorRegion>
  );
}
