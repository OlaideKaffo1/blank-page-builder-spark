
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import { User } from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "Success!",
      description: "Your action was completed successfully.",
    });
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <header className="border-b bg-white py-4 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Dashboard</h1>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/profile">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Profile
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/settings">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Settings
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <section className="space-y-4 rounded-lg border p-6">
            <h2 className="text-lg font-semibold">Form Components</h2>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Type your message"
                  className="mt-1"
                />
              </div>
              <Button onClick={showToast}>Submit Form</Button>
            </div>
          </section>

          <section className="space-y-4 rounded-lg border p-6">
            <h2 className="text-lg font-semibold">UI Components</h2>
            <Separator className="my-4" />
            
            <h3 className="text-md font-medium">Avatar</h3>
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>

            <h3 className="text-md font-medium">Progress</h3>
            <Progress value={66} className="w-full" />

            <h3 className="text-md font-medium">Skeleton</h3>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>

            <h3 className="text-md font-medium">Buttons</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="defaultWithIcon">With Icon</Button>
              <Button variant="secondaryWithIcon">Secondary Icon</Button>
              <Button variant="delete">Delete</Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
