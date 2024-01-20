import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import "./EventInput.css";

const formSchema = z.object({
    eventName: z.string().min(1, {
      message: "Event name must be at least 1 character.",
    }),
    eventDetails: z.string()
  })
type FormValues = z.infer<typeof formSchema>;

const EventInput = () => {
  
  const [eventName, setEventName] = useState<string>('');
  const [eventDetails, setEventDetails] = useState<string>('');
    const form = useForm<FormValues>({
      resolver: zodResolver(formSchema)
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setEventName(data.eventName); // Update state with the event name
    setEventDetails(data.eventDetails);
    console.log(data.eventName);
    console.log(data.eventDetails);
};

  return (
    <main className = "flex min-h-screen flex-col items-center justify-between p-24">
    <Form {...form} >
      <form className= " max-w-md w-full flex flex-col gap-4"
      onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="eventName"
          render={({ field }) => (
            <FormItem className = "space-y-2">
              <FormLabel className = "items-start" >New Event</FormLabel>
              <FormControl className = "font-bold">
                <Input className = "align-top" placeholder="(e.g. Jensen Turns One)" {...field} />
              </FormControl>
              <FormDescription>
                Enter your event name.
              </FormDescription> 
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventDetails"
          render={({ field }) => (
            <FormItem className = "space-y-2">
              <FormLabel className = "text-sm" >Event Details</FormLabel>
              <FormControl className = "h-72">
                <Input className = "grid align-top" placeholder="(e.g. very Fun Party)" {...field} />
              </FormControl>
              <FormDescription>
                Enter your event details(Optional)
              </FormDescription> 
            </FormItem>
          )}
        />
        <div className  ='flex justify-center space-x-3'> <Button type="submit">Create Event</Button>
        <Button variant = "destructive" >Cancel</Button></div>
      </form>
    </Form>
    </main>
  )
}

export default EventInput
