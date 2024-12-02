import {
  Heart,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
  TrendingUp,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const sidebarItems = [
  {
    icon: <Home />,
    text: "Home",
  },
  {
    icon: <Search />,
    text: "Search",
  },
  {
    icon: <TrendingUp />,
    text: "Explore",
  },
  {
    icon: <MessageCircle />,
    text: "Messages",
  },
  {
    icon: <Heart />,
    text: "Notifications",
  },
  {
    icon: <Home />,
    text: "Home",
  },
  {
    icon: <PlusSquare />,
    text: "Create",
  },
  {
    icon: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
    text: "Profile",
  },
  {
    icon: <LogOut />,
    text: "Logout",
  },
];

function LeftSidebar() {
  return (
    <div>
      {sidebarItems.map((item, index) => (
        <div key={index}>
          {item.icon}
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default LeftSidebar;
