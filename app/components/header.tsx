"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  ChevronDown,
  Command,
  Github,
  HelpCircle,
  LayoutGrid,
  LogOut,
  Plus,
  Search,
  Settings,
  Star,
  User,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Clock } from "@/components/clock"
import { AnimatedIcon } from "@/components/animated-icon"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const [selectedProject, setSelectedProject] = useState("Personal Project")
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New model available",
      description: "GPT-4 Turbo is now available for your projects",
      time: "2m ago",
      unread: true,
      icon: Zap,
    },
    {
      id: 2,
      title: "Usage limit approaching",
      description: "You've used 80% of your monthly quota",
      time: "1h ago",
      unread: true,
      icon: Bell,
    },
    {
      id: 3,
      title: "Project starred",
      description: "Someone starred your AI project",
      time: "2h ago",
      unread: false,
      icon: Star,
    },
  ])

  const [searchHistory] = useState([
    { text: "GPT-4 configuration", type: "recent" },
    { text: "Prompt templates", type: "recent" },
    { text: "API usage", type: "recent" },
  ])

  const [quickActions] = useState([
    { text: "Create new project", icon: Plus },
    { text: "Open settings", icon: Settings },
    { text: "View documentation", icon: HelpCircle },
  ])

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center gap-4">
        <motion.div
          className="flex items-center gap-4 flex-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button variant="ghost" className="font-bold text-xl px-2 gap-2">
            <AnimatedIcon Icon={Command} className="text-primary" />
            AI Studio
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <AnimatedIcon Icon={LayoutGrid} />
                {selectedProject}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Projects</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={selectedProject} onValueChange={setSelectedProject}>
                <DropdownMenuRadioItem value="Personal Project">Personal Project</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Team Project">Team Project</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Client Work">Client Work</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Plus className="w-4 h-4 mr-2" />
                Create New Project
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2 h-8" onClick={() => setShowSearch(true)}>
                <Search className="w-4 h-4" />
                <span className="hidden md:inline">Quick Search</span>
                <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[850px] gap-0">
              <DialogHeader>
                <DialogTitle>Search</DialogTitle>
              </DialogHeader>
              <div className="flex items-center gap-2 py-4">
                <Input placeholder="Search everything..." className="h-11" />
              </div>
              <div className="grid grid-cols-2 gap-4 py-4 border-t">
                <div>
                  <h4 className="font-medium mb-2">Recent Searches</h4>
                  <ul className="space-y-1">
                    {searchHistory.map((item, index) => (
                      <motion.li
                        key={index}
                        className="p-2 hover:bg-muted rounded-md cursor-pointer flex items-center gap-2"
                        whileHover={{ x: 4 }}
                      >
                        <Search className="w-4 h-4 text-muted-foreground" />
                        {item.text}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Quick Actions</h4>
                  <ul className="space-y-1">
                    {quickActions.map((action, index) => (
                      <motion.li
                        key={index}
                        className="p-2 hover:bg-muted rounded-md cursor-pointer flex items-center gap-2"
                        whileHover={{ x: 4 }}
                      >
                        <action.icon className="w-4 h-4 text-muted-foreground" />
                        {action.text}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Clock />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <AnimatedIcon Icon={Bell} animate={notifications.some((n) => n.unread)} />
                {notifications.some((n) => n.unread) && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center">
                    {notifications.filter((n) => n.unread).length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="flex flex-col items-start gap-1 p-4">
                  <div className="flex items-center gap-2 w-full">
                    <AnimatedIcon Icon={notification.icon} className="text-primary" />
                    <span className="font-medium flex-1">{notification.title}</span>
                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{notification.description}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon">
            <AnimatedIcon Icon={Command} />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help & Support
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">
                <LogOut className="w-4 h-4 mr-2" />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
        </motion.div>
      </div>
    </header>
  )
}

