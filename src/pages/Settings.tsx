
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useToast } from "@/hooks/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";

const Settings = () => {
  const { toast } = useToast();

  const saveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <header className="border-b bg-white py-4 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Settings</h1>
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
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-2">
              <div className="space-y-2">
                <Link to="/profile" className="block p-2 hover:bg-gray-100 rounded">
                  Profile
                </Link>
                <Link to="/settings" className="block p-2 hover:bg-gray-100 rounded">
                  Settings
                </Link>
                <Separator />
                <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
                  Sign out
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Notifications</h3>
              <Separator className="my-4" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive email updates about your account activity</p>
                  </div>
                  <Switch defaultChecked id="email-notifications" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-gray-500">Receive push notifications in your browser</p>
                  </div>
                  <Switch id="push-notifications" />
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Privacy</h3>
              <Separator className="my-4" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Profile Visibility</p>
                    <p className="text-sm text-gray-500">Make your profile visible to other users</p>
                  </div>
                  <Switch defaultChecked id="profile-visibility" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Activity Status</p>
                    <p className="text-sm text-gray-500">Show when you're active on the platform</p>
                  </div>
                  <Switch defaultChecked id="activity-status" />
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6 bg-[#FEECE8]">
              <h3 className="text-lg font-semibold text-destructive mb-4">Danger Zone</h3>
              <Separator className="my-4 bg-[#FF8989]" />

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-700 mb-4">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <Button variant="delete">Delete Account</Button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button onClick={saveSettings}>Save All Settings</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
