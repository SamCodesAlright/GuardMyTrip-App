import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { MapPin, Users, MessageCircle, Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import Map from "@/components/Map";
import { useToast } from "@/hooks/use-toast";

const VolunteerDashboard = () => {
  const [activeRequests, setActiveRequests] = useState([
    {
      id: 1,
      touristName: "John Smith",
      location: "Kaziranga National Park, Assam",
      issue: "Lost and need directions to nearest exit",
      priority: "medium",
      timestamp: "2 min ago",
      distance: "0.8 km"
    },
    {
      id: 2,
      touristName: "Sarah Johnson",
      location: "Tawang Monastery, Arunachal Pradesh",
      issue: "Need local restaurant recommendations",
      priority: "low",
      timestamp: "5 min ago",
      distance: "1.2 km"
    },
    {
      id: 3,
      touristName: "Mike Chen",
      location: "Loktak Lake, Manipur",
      issue: "Feeling unsafe, need assistance",
      priority: "high",
      timestamp: "1 min ago",
      distance: "0.3 km"
    }
  ]);

  const [stats, setStats] = useState({
    helpedToday: 7,
    totalHelped: 142,
    rating: 4.8,
    responseTime: "3 min"
  });

  const { toast } = useToast();

  const handleAcceptRequest = (requestId: number) => {
    setActiveRequests(prev => prev.filter(req => req.id !== requestId));
    setStats(prev => ({ ...prev, helpedToday: prev.helpedToday + 1, totalHelped: prev.totalHelped + 1 }));
    toast({
      title: "Request Accepted!",
      description: "You're now connected with the tourist. Chat window opened.",
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Volunteer Dashboard</h1>
              <p className="text-primary-foreground/80">Help tourists explore Northeast India safely</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="safety-card">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{stats.helpedToday}</div>
              <div className="text-sm text-muted-foreground">Helped Today</div>
            </CardContent>
          </Card>
          <Card className="safety-card">
            <CardContent className="p-4 text-center">
              <CheckCircle className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-accent">{stats.totalHelped}</div>
              <div className="text-sm text-muted-foreground">Total Helped</div>
            </CardContent>
          </Card>
          <Card className="safety-card">
            <CardContent className="p-4 text-center">
              <Shield className="h-8 w-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-warning">{stats.rating}</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </CardContent>
          </Card>
          <Card className="safety-card">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-secondary">{stats.responseTime}</div>
              <div className="text-sm text-muted-foreground">Avg Response</div>
            </CardContent>
          </Card>
        </div>

        {/* Active Help Requests */}
        <Card className="safety-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Active Help Requests
            </CardTitle>
            <CardDescription>
              Tourists near you who need assistance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeRequests.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No active requests at the moment</p>
                <p className="text-sm">Check back soon for tourists who need help!</p>
              </div>
            ) : (
              activeRequests.map((request) => (
                <div key={request.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{request.touristName}</h4>
                        <Badge className={getPriorityColor(request.priority)}>
                          {request.priority} priority
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{request.location} • {request.distance} away</span>
                      </div>
                      <p className="text-sm mb-2">{request.issue}</p>
                      <p className="text-xs text-muted-foreground">{request.timestamp}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleAcceptRequest(request.id)}
                      className="flex-1"
                      variant="default"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Accept & Chat
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="h-4 w-4 mr-2" />
                      View Location
                    </Button>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* India Safety Map */}
        <Card className="safety-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Northeast India Safety Map
            </CardTitle>
            <CardDescription>
              Real-time safety information and tourist locations in Northeast India
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Map />
          </CardContent>
        </Card>
      </div>

      <Navigation />
    </div>
  );
};

export default VolunteerDashboard;