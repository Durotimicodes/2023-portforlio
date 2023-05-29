import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei'
import CanvasLoader from '../Loader';
import { AmbientLight } from 'three';


const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {

  return (
    <Canvas
      frameLoop="demand"
    gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}/>
      <Ball imgUrl={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )

}

export default BallCanvas