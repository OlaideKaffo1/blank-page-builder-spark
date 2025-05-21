
import React from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to your app with <span className="text-primary">DM Sans</span> font
        </h1>
        <p className="text-lg text-gray-600">
          Your application now uses DM Sans as the primary font and #8383FF as the primary color.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
