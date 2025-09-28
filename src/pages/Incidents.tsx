import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  Users, 
  MapPin, 
  Clock, 
  Eye,
  UserX,
  Thermometer,
  Car,
  CheckCircle,
  XCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Incident {
  id: string;
  type: "overcrowding" | "unconscious" | "traffic" | "weather" | "resolved";
  title: string;
  description: string;
  location: string;
  timestamp: string;
  severity: "low" | "medium" | "high";
  status: "active" | "resolved";
  aiConfidence: number;
}

const Incidents = () => {
  const { toast } = useToast();
  
  const [incidents] = useState<Incident[]>([
    {
      id: "1",
      type: "overcrowding",
      title: "Overcrowding Detected",
      description: "High tourist density detected at Times Square",
      location: "Times Square, NYC",
      timestamp: "2 mins ago",
      severity: "high",
      status: "active",
      aiConfidence: 94
    },
    {
      id: "2", 
      type: "unconscious",
      title: "Tourist Down",
      description: "Person appears unconscious near Central Park",
      location: "Central Park, NYC",
      timestamp: "5 mins ago",
      severity: "high",
      status: "active",
      aiConfidence: 87
    },
    {
      id: "3",
      type: "traffic",
      title: "Traffic Incident",
      description: "Road closure affecting tourist route",
      location: "Broadway & 42nd St",
      timestamp: "12 mins ago",
      severity: "medium",
      status: "active",
      aiConfidence: 76
    },
    {
      id: "4",
      type: "resolved",
      title: "Weather Alert",
      description: "Heavy rain warning issued",
      location: "Manhattan Area",
      timestamp: "1 hour ago",
      severity: "low",
      status: "resolved",
      aiConfidence: 89
    }
  ]);

  const activeIncidents = incidents.filter(i => i.status === "active");
  const resolvedIncidents = incidents.filter(i => i.status === "resolved");

  const getIncidentIcon = (type: Incident["type"]) => {
    switch (type) {
      case "overcrowding": return Users;
      case "unconscious": return UserX;
      case "traffic": return Car;
      case "weather": return Thermometer;
      case "resolved": return CheckCircle;
      default: return AlertTriangle;
    }
  };

  const getSeverityColor = (severity: Incident["severity"]) => {
    switch (severity) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-warning text-warning-foreground";
      case "low": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const handleQuickAction = (action: string, incidentId: string) => {
    toast({
      title: `${action} initiated`,
      description: `Action taken for incident ${incidentId}`,
    });
  };

  const IncidentCard = ({ incident }: { incident: Incident }) => {
    const Icon = getIncidentIcon(incident.type);
    const isResolved = incident.status === "resolved";
    
    return (
      <Card className={`safety-card ${isResolved ? "opacity-75" : ""}`}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <div className={`p-2 rounded-lg ${isResolved ? "bg-accent/20" : "bg-destructive/20"}`}>
                <Icon className={`h-4 w-4 ${isResolved ? "text-accent" : "text-destructive"}`} />
              </div>
              <div>
                <CardTitle className="text-base">{incident.title}</CardTitle>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge className={getSeverityColor(incident.severity)}>
                    {incident.severity.toUpperCase()}
                  </Badge>
                  {incident.status === "resolved" && (
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Resolved
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">{incident.timestamp}</p>
              <p className="text-xs text-primary">AI: {incident.aiConfidence}%</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <CardDescription>{incident.description}</CardDescription>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{incident.location}</span>
          </div>

          {!isResolved && (
            <div className="flex items-center space-x-2 pt-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleQuickAction("View Details", incident.id)}
                className="flex-1"
              >
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleQuickAction("Report False Alert", incident.id)}
                className="flex-1"
              >
                <XCircle className="h-4 w-4 mr-1" />
                False Alert
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Incident Alerts</h1>
            <p className="text-sm text-muted-foreground">AI-powered safety monitoring</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive">
              {activeIncidents.length} Active
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="active" className="relative">
              Active Alerts
              {activeIncidents.length > 0 && (
                <Badge className="ml-2 bg-destructive text-destructive-foreground px-2 py-0 text-xs">
                  {activeIncidents.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="resolved">
              Resolved
              <Badge className="ml-2 bg-accent text-accent-foreground px-2 py-0 text-xs">
                {resolvedIncidents.length}
              </Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-4">
            {activeIncidents.length === 0 ? (
              <Card className="safety-card">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <CheckCircle className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-lg font-medium text-center mb-2">All Clear!</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    No active safety incidents in your area
                  </p>
                </CardContent>
              </Card>
            ) : (
              activeIncidents.map(incident => (
                <IncidentCard key={incident.id} incident={incident} />
              ))
            )}
          </TabsContent>
          
          <TabsContent value="resolved" className="space-y-4">
            {resolvedIncidents.map(incident => (
              <IncidentCard key={incident.id} incident={incident} />
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <Navigation />
    </div>
  );
};

export default Incidents;