import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Shield, 
  AlertTriangle, 
  Clock, 
  Users, 
  Navigation as NavigationIcon,
  Phone,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Map from "@/components/Map";

const Dashboard = () => {
  const { toast } = useToast();
  const [currentZone, setCurrentZone] = useState<"safe" | "restricted" | "moderate">("safe");

  const quickActions = [
    {
      title: "Emergency SOS",
      description: "Instant help with location sharing",
      icon: Phone,
      variant: "emergency" as const,
      action: () => {
        toast({
          title: "Emergency Alert Sent!",
          description: "Authorities have been notified of your location.",
          variant: "destructive",
        });
      }
    },
    {
      title: "Report Incident",
      description: "Report safety concerns",
      icon: AlertTriangle,
      variant: "warning" as const,
      action: () => {
        toast({
          title: "Incident Reported",
          description: "Thank you for helping keep tourists safe.",
        });
      }
    }
  ];

  const zoneInfo = {
    safe: {
      title: "Safe Zone",
      description: "You're in a tourist-friendly area",
      color: "safe-zone-indicator",
      icon: CheckCircle,
      bgColor: "bg-accent/10"
    },
    restricted: {
      title: "Restricted Area",
      description: "Exercise caution in this area",
      color: "restricted-zone-indicator",
      icon: AlertTriangle,
      bgColor: "bg-destructive/10"
    },
    moderate: {
      title: "Moderate Risk",
      description: "Stay alert and with groups",
      color: "bg-warning text-warning-foreground rounded-full px-3 py-1 text-sm font-medium",
      icon: Shield,
      bgColor: "bg-warning/10"
    }
  };

  const currentZoneData = zoneInfo[currentZone];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Safety Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, Tourist</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className={currentZoneData.color}>
              <currentZoneData.icon className="h-4 w-4 inline mr-1" />
              {currentZoneData.title}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Zone Status Card */}
        <Card className={`safety-card ${currentZoneData.bgColor}`}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <currentZoneData.icon className="h-5 w-5" />
                <CardTitle className="text-lg">{currentZoneData.title}</CardTitle>
              </div>
              <Badge variant="outline" className="bg-background">
                Live
              </Badge>
            </div>
            <CardDescription>{currentZoneData.description}</CardDescription>
          </CardHeader>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4">
            {quickActions.map((action, index) => (
              <Card key={index} className="safety-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <action.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{action.title}</h3>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                    </div>
                    <Button
                      variant={action.variant}
                      size={action.variant === "emergency" ? "emergency" : "default"}
                      onClick={action.action}
                    >
                      {action.variant === "emergency" ? <Phone className="h-5 w-5" /> : "Report"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Volunteer Help Request */}
            <Link to="/help-request">
              <Card className="safety-card hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Users className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium">Request Help from Volunteers</h3>
                        <p className="text-sm text-muted-foreground">Get assistance from local helpers</p>
                      </div>
                    </div>
                    <Button variant="outline">
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* India Safety Map */}
        <Card className="safety-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Northeast India Safety Map</span>
            </CardTitle>
            <CardDescription>Real-time safety zones and tourist information for Northeast India</CardDescription>
          </CardHeader>
          <CardContent>
            <Map />
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="safety-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-accent/10">
              <CheckCircle className="h-4 w-4 text-accent" />
              <div className="flex-1">
                <p className="text-sm font-medium">Entered safe zone</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted">
              <Users className="h-4 w-4 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium">Geofence alert cleared</p>
                <p className="text-xs text-muted-foreground">15 minutes ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Navigation />
    </div>
  );
};

export default Dashboard;