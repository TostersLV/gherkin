import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Translations from './Translations'
import Feature from './Feature'
import HappyPathScenario from './HappyPathScenario'
import RubicCube from './RubicCube'
import Scenario from './Scenario'
import UserStory from './UserStory'

function App() {
  

  return (
    <>
      <Translations />
      <Feature />
      <UserStory />
      <Scenario />
      <RubicCube />
      <HappyPathScenario />
    </>
  )
}

export default App
