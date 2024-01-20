import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const EventMessage = () => {
  return (
    <div className='h-full'>
        <Alert className='m-auto'>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
            You can add components and dependencies to your app using the cli.
        </AlertDescription>
    </Alert>
</div>
  )
}

export default EventMessage