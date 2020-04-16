import React from "react"

import './index.css';
import { TILE_SIZE } from '../../settings/constants'

const Hero = () => {
  return (
    <div
      style={{
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'hero-animation 1s steps(4) infinite',
        position: 'absolute',
        bottom: TILE_SIZE * 2,
        left: TILE_SIZE,
      }}
    />
  )
}
export default Hero;