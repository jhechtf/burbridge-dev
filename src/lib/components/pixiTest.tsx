import React, { useEffect, useMemo, useState } from 'react';
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text} from '@pixi/react';

export default function PixiTest() {
  const [pos, setPos] = useState({x: 100, y: 270});
  useEffect(() => {
    const int = setInterval(() => {
      setPos(p => ({x: p.x + 30 / 1000/60, y: p.y}));
    }, 1000/60);
    return () => clearInterval(int);
  }, []);
  return (
    <Stage width={document.body.clientWidth}>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={pos.x}
        y={pos.y}
        anchor={{ x: 0.5, y: 0.5}}
      />
      <Container x={200} y={50}>
        <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} style={
      new TextStyle({
        align: 'center',
        fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
        fontSize: 16,
        fontWeight: '400',
        fill: ['#ffffff', '#ff99cc'], // gradient
        stroke: '#ff00ff',
        strokeThickness: 5,
        wordWrap: true,
        wordWrapWidth: 440,
      })
    }/>
      </Container>
    </Stage>
  )
}