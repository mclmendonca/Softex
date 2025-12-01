import { useState } from 'react'
import  BasicButtons from './UI/BasicButtons'
import SimpleBottomNavigation from './UI/SimpleButton'
import ResponsiveAppBar from './UI/NavBar'
import NestedModal from './UI/Modal'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ResponsiveAppBar />
        <NestedModal />
        <br />
        <BasicButtons />
        <SimpleBottomNavigation />
        
      </div>
      
    </>
  )
}

export default App
