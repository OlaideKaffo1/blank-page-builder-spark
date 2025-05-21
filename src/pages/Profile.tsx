
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { User } from "lucide-react";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved successfully.",
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <header className="border-b bg-white py-4 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">User Profile</h1>
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
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback className="text-xl">JD</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-600">Frontend Developer</p>
            </div>
          </div>

          <div className="space-y-6 rounded-lg border p-6">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <Button 
                variant={isEditing ? "default" : "secondary"}
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              >
                {isEditing ? "Save Changes" : "Edit Profile"}
              </Button>
            </div>
            <Separator />

            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <Input 
                    id="firstName" 
                    defaultValue="John" 
                    disabled={!isEditing} 
                    className="mt-1" 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <Input 
                    id="lastName" 
                    defaultValue="Doe" 
                    disabled={!isEditing} 
                    className="mt-1" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  defaultValue="john.doe@example.com" 
                  disabled={!isEditing} 
                  className="mt-1" 
                />
              </div>

              <div>
                <label htmlFor="bio" className="text-sm font-medium">Bio</label>
                <Textarea 
                  id="bio" 
                  defaultValue="Frontend developer with 5 years of experience in React and related technologies." 
                  disabled={!isEditing} 
                  className="mt-1" 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
