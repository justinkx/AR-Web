import React from 'react'

export default function ARScreen() {
    return (
          <a-scene embedded arjs='sourceType: webcam;'>
    <a-marker preset="hiro">
        <a-box position='0 0.5 0' material='color: yellow;'></a-box>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
    )
}
