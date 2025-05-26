
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-white p-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Dashboard</h1>
      <p className="text-muted-foreground text-lg mb-8">Welcome to your dashboard!</p>
      
      <Link to="/">
        <Button variant="secondary">Back to Home</Button>
      </Link>
    </div>
  );
};

export default Dashboard;
