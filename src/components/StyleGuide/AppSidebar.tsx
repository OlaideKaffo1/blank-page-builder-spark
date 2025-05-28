
import { Calendar, Home, Inbox, Search, Settings, Palette } from "lucide-react"
import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

// Menu items
const items = [
  {
    id: "option1",
    title: "Menu Option 1",
    url: "#",
    icon: Home,
  },
  {
    id: "option2",
    title: "Menu Option 2",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const [selectedItem, setSelectedItem] = useState<string>("option1")

  return (
    <Sidebar 
      className="border-r-0"
      style={{ 
        backgroundColor: '#091F42',
        '--sidebar-background': '#091F42',
        '--sidebar-foreground': 'white',
        '--sidebar-accent': 'rgba(255, 255, 255, 0.1)',
        '--sidebar-accent-foreground': 'white',
        '--sidebar-border': 'rgba(255, 255, 255, 0.1)'
      } as React.CSSProperties}
    >
      <SidebarHeader className="border-b border-white/10 pb-4 mb-4">
        <div className="px-2">
          <h2 className="text-lg font-semibold text-white">FOUNT</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={selectedItem === item.id}
                    className={`text-white/90 hover:bg-white/10 hover:text-white transition-colors ${
                      selectedItem === item.id 
                        ? 'bg-white/15 text-primary font-medium' 
                        : ''
                    }`}
                  >
                    <a 
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault()
                        setSelectedItem(item.id)
                      }}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
