import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Theme, Flex, Text} from '@radix-ui/themes';
import { Button } from "@/components/ui/button"
 


function App() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes</Text>
      <div>
      <Button>Click meme me</Button>
      </div>
    </Flex>
  )
}
export default App
