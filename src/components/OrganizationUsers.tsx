
import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AddUserModal from "./AddUserModal";

// Sample data for organization users
const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Admin",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    role: "Member",
    department: "Design",
    status: "Active",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    role: "Member",
    department: "Marketing",
    status: "Away",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@example.com",
    role: "Owner",
    department: "Executive",
    status: "Active",
  },
  {
    id: 5,
    name: "Priya Patel",
    email: "priya.patel@example.com",
    role: "Member",
    department: "Customer Success",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Alex Thompson",
    email: "alex.thompson@example.com",
    role: "Member",
    department: "Product",
    status: "Active",
  },
];

const OrganizationUsers = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-2xl font-semibold">Organization Users</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            Total Users: {users.length}
          </div>
          <AddUserModal />
        </div>
      </div>
      
      <div className="border rounded-lg">
        <Table>
          <TableCaption>A list of all users in your organization.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <User className="h-5 w-5 text-muted-foreground" />
                </TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {user.role === "Admin" ? (
                    <span className="font-medium text-primary">{user.role}</span>
                  ) : user.role === "Owner" ? (
                    <span className="font-medium">{user.role}</span>
                  ) : (
                    user.role
                  )}
                </TableCell>
                <TableCell>{user.department}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      user.status === "Active" 
                        ? "live" 
                        : user.status === "Away" 
                          ? "inProgress" 
                          : "cancelled"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrganizationUsers;
