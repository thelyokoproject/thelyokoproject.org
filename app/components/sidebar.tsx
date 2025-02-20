import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, Image, MessageSquare } from "lucide-react"

interface SidebarProps {
  activeLab: string
}

export function Sidebar({ activeLab }: SidebarProps) {
  const renderContent = () => {
    switch (activeLab) {
      case "chat":
        return (
          <div className="grid gap-2 p-4">
            <div className="font-semibold mb-2">Chat Templates</div>
            {["General Assistant", "Code Helper", "Writing Aid", "Math Tutor"].map((template) => (
              <Button key={template} variant="ghost" className="justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                {template}
              </Button>
            ))}
            <div className="font-semibold mb-2 mt-4">Saved Chats</div>
            {["Project Planning", "Bug Analysis", "Feature Ideas"].map((chat) => (
              <Button key={chat} variant="ghost" className="justify-start">
                <FileText className="mr-2 h-4 w-4" />
                {chat}
              </Button>
            ))}
          </div>
        )
      case "image":
        return (
          <div className="grid gap-2 p-4">
            <div className="font-semibold mb-2">Image Tools</div>
            {["Generate", "Edit", "Upscale", "Variations"].map((tool) => (
              <Button key={tool} variant="ghost" className="justify-start">
                <Image className="mr-2 h-4 w-4" />
                {tool}
              </Button>
            ))}
          </div>
        )
      // Add more cases for other labs
      default:
        return <div className="p-4 text-muted-foreground">Select a lab to view its tools and options</div>
    }
  }

  return (
    <div className="flex flex-col h-full border-r">
      <div className="p-4 border-b">
        <h2 className="font-semibold">Lab Tools</h2>
      </div>
      <ScrollArea className="flex-1">{renderContent()}</ScrollArea>
    </div>
  )
}

