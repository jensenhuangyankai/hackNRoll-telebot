import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Theme, Flex, Text} from '@radix-ui/themes';
import { Button, } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EventInput from './elements/EventInput';
import { Calendar } from "@/components/ui/calendar"
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { string } from 'zod';
import DateRangePicker from './elements/DateRangePicker';
import { ModeToggle } from './components/mode-toggle';
import EventMessage from './elements/EventMessage';


 


function App(): JSX.Element {
  return (
    <ThemeProvider defaultTheme= "dark" storageKey="vite-ui-theme">
      <EventMessage></EventMessage>
    </ThemeProvider>
  )
}
export default App
