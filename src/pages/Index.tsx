
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  priority: z.enum(["low", "medium", "high"], {
    required_error: "Please select a priority level.",
  }),
});

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      priority: "medium",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsModalOpen(false);
  }

  return (
    <div className="min-h-screen w-full bg-white p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight leading-tight mb-6 text-primary">
          Welcome to the Application
        </h1>
        
        <div className="flex gap-4 flex-wrap justify-center mb-12">
          <Button onClick={() => setIsModalOpen(true)}>Open Form Modal</Button>
          <Link to="/dashboard">
            <Button variant="secondary">Go to Dashboard</Button>
          </Link>
        </div>

        {/* Live Status Card */}
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
            <div className="space-y-2">
              <CardTitle className="text-xl font-semibold leading-tight">System Status</CardTitle>
              <CardDescription className="text-sm leading-normal">
                Current application status
              </CardDescription>
            </div>
            <Badge variant="live">Live</Badge>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-base leading-relaxed">
              The application is currently running and all services are operational.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white sm:max-w-[550px]">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-xl font-semibold leading-tight">Contact Form</DialogTitle>
            <DialogDescription className="text-sm leading-normal">
              Fill out this form to get in touch with us. We'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium">Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-sm font-medium">Priority</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-3"
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="low" id="low" />
                          <Label htmlFor="low" className="text-sm leading-normal">Low</Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="medium" id="medium" />
                          <Label htmlFor="medium" className="text-sm leading-normal">Medium</Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="high" id="high" />
                          <Label htmlFor="high" className="text-sm leading-normal">High</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Write your message here..." 
                        className="min-h-[120px] leading-relaxed" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter className="pt-6 flex gap-3">
                <Button variant="cancel" type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
