"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Settings,
  Users,
  Shield,
  Database,
  Key,
  Brain,
  Network,
  FileText,
  Fingerprint,
  HardDrive,
  Cloud,
  Code2,
} from "lucide-react"

interface ProjectModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ open, onOpenChange }: ProjectModalProps) {
  const [activeProject, setActiveProject] = useState("personal")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] p-0 organic-card">
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="text-2xl font-bold text-space">Project Control Center</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="projects" className="flex h-[calc(80vh-80px)]">
          <TabsList className="flex flex-col justify-start gap-2 p-4 border-r w-48 h-full">
            <TabsTrigger value="projects" className="w-full justify-start gap-2">
              <Database className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="profiles" className="w-full justify-start gap-2">
              <Users className="w-4 h-4" />
              Profiles
            </TabsTrigger>
            <TabsTrigger value="security" className="w-full justify-start gap-2">
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="knowledge" className="w-full justify-start gap-2">
              <Brain className="w-4 h-4" />
              Knowledge
            </TabsTrigger>
            <TabsTrigger value="settings" className="w-full justify-start gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-auto">
            <TabsContent value="projects" className="p-6 m-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} active={activeProject === project.id} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="profiles" className="p-6 m-0">
              <div className="grid gap-4">
                {profiles.map((profile) => (
                  <ProfileCard key={profile.id} profile={profile} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="security" className="p-6 m-0">
              <div className="space-y-6">
                <Card className="p-4 neo-gradient">
                  <h3 className="text-lg font-semibold mb-4 text-space">Security Overview</h3>
                  <div className="grid gap-4">
                    {securityMetrics.map((metric) => (
                      <div key={metric.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-mono">{metric.name}</span>
                          <span className="font-mono">{metric.value}</span>
                        </div>
                        <Progress value={metric.progress} />
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-4 neo-gradient">
                  <h3 className="text-lg font-semibold mb-4 text-space">Access Control</h3>
                  <div className="space-y-4">
                    {accessControls.map((control) => (
                      <div key={control.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <control.icon className="w-4 h-4 text-primary" />
                          <span className="font-mono">{control.name}</span>
                        </div>
                        <Badge variant={control.enabled ? "default" : "secondary"}>
                          {control.enabled ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="knowledge" className="p-6 m-0">
              <div className="grid gap-4">
                {knowledgeBases.map((kb) => (
                  <Card key={kb.name} className="p-4 neo-gradient">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <kb.icon className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-space">{kb.name}</h3>
                      </div>
                      <Badge>{kb.entries} entries</Badge>
                    </div>
                    <Progress value={kb.usage} className="mb-2" />
                    <div className="text-xs text-muted-foreground font-mono">
                      {kb.usage}% utilized • Last updated {kb.lastUpdated}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="p-6 m-0">
              <div className="space-y-6">
                <div className="grid gap-4">
                  <h3 className="text-lg font-semibold text-space">System Preferences</h3>
                  {settings.map((setting) => (
                    <Card key={setting.name} className="p-4 neo-gradient">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <setting.icon className="w-4 h-4 text-primary" />
                          <div>
                            <div className="font-semibold">{setting.name}</div>
                            <div className="text-sm text-muted-foreground">{setting.description}</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

const ProjectCard = ({ project, active }: { project: any; active: boolean }) => (
  <Card className={`p-4 neo-gradient ${active ? "ring-2 ring-primary" : ""}`}>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <project.icon className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-space">{project.name}</h3>
      </div>
      <Badge>{project.type}</Badge>
    </div>
    <div className="space-y-2">
      <Progress value={project.progress} />
      <div className="flex justify-between text-xs text-muted-foreground font-mono">
        <span>{project.progress}% complete</span>
        <span>{project.lastAccessed}</span>
      </div>
    </div>
  </Card>
)

const ProfileCard = ({ profile }: { profile: any }) => (
  <Card className="p-4 neo-gradient">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <profile.icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-space">{profile.name}</h3>
          <p className="text-sm text-muted-foreground font-mono">{profile.role}</p>
        </div>
      </div>
      <Button variant="outline" size="sm">
        Manage
      </Button>
    </div>
  </Card>
)

const projects = [
  { id: "personal", name: "Personal Workspace", type: "Primary", progress: 75, lastAccessed: "2h ago", icon: Database },
  { id: "team", name: "Team Projects", type: "Shared", progress: 60, lastAccessed: "1h ago", icon: Users },
  { id: "research", name: "Research Lab", type: "Private", progress: 40, lastAccessed: "3h ago", icon: Brain },
  { id: "development", name: "Development", type: "Active", progress: 90, lastAccessed: "30m ago", icon: Code2 },
]

const profiles = [
  { id: 1, name: "Administrator", role: "System Admin", icon: Shield },
  { id: 2, name: "Researcher", role: "Data Scientist", icon: Brain },
  { id: 3, name: "Developer", role: "Engineer", icon: Code2 },
]

const securityMetrics = [
  { name: "Quantum Encryption", value: "99.99%", progress: 99.99 },
  { name: "Neural Firewall", value: "95%", progress: 95 },
  { name: "Memetic Shield", value: "98%", progress: 98 },
]

const accessControls = [
  { name: "Two-Factor Authentication", enabled: true, icon: Key },
  { name: "Biometric Verification", enabled: true, icon: Fingerprint },
  { name: "Neural Handshake", enabled: false, icon: Brain },
]

const knowledgeBases = [
  { name: "Core Memory", entries: 1234567, usage: 75, lastUpdated: "1h ago", icon: HardDrive },
  { name: "Neural Network", entries: 890123, usage: 60, lastUpdated: "2h ago", icon: Network },
  { name: "Cloud Sync", entries: 456789, usage: 45, lastUpdated: "30m ago", icon: Cloud },
]

const settings = [
  { name: "Neural Processing", description: "Configure cognitive processing parameters", icon: Brain },
  { name: "Security Protocol", description: "Manage security settings and access control", icon: Shield },
  { name: "Data Management", description: "Configure data storage and processing", icon: Database },
  { name: "System Logs", description: "View and manage system activity logs", icon: FileText },
]

