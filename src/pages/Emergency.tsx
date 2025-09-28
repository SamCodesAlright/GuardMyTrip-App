import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  Heart, 
  Car, 
  Shield, 
  Clock,
  CheckCircle,
  AlertCircle,
  Copy,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Emergency = () => {
  const { toast } = useToast();
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const emergencyContacts = [
    { name: "Local Emergency", number: "911", type: "emergency", icon: Phone },
    { name: "Tourist Police", number: "+1-555-TOURIST", type: "police", icon: Shield },
    { name: "Medical Emergency", number: "+1-555-MEDICAL", type: "medical", icon: Heart },
    { name: "Embassy Hotline", number: "+1-555-EMBASSY", type: "embassy", icon: Users },
  ];

  const handleEmergencySOS = () => {
    if (emergencyActive) return;

    setEmergencyActive(true);
    setCountdown(10);
    
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setEmergencyActive(false);
          toast({
            title: "Emergency Alert Sent!",
            description: "Authorities have been notified with your location and digital ID.",
            variant: "destructive",
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    toast({
      title: "Emergency SOS Activated",
      description: `Alert will be sent in ${countdown} seconds. Tap cancel to stop.`,
      variant: "destructive",
    });
  };

  const cancelEmergency = () => {
    setEmergencyActive(false);
    setCountdown(0);
    toast({
      title: "Emergency Cancelled",
      description: "SOS alert has been cancelled.",
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${text} has been copied.`,
    });
  };

  const touristInfo = {
    digitalId: "TS-BLK-789456123-NYC",
    location: "Times Square, NYC",
    bloodType: "O+",
    allergies: "None",
    emergencyContact: "Jane Doe (+1-555-0123)"
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Emergency Help</h1>
            <p className="text-sm text-muted-foreground">One-tap SOS & emergency contacts</p>
          </div>
          <div className="flex items-center space-x-2">
            {emergencyActive ? (
              <Badge variant="destructive" className="animate-pulse">
                <AlertCircle className="h-3 w-3 mr-1" />
                ACTIVE
              </Badge>
            ) : (
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent">
                <CheckCircle className="h-3 w-3 mr-1" />
                Ready
              </Badge>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Emergency SOS Button */}
        <Card className={`safety-card ${emergencyActive ? "bg-destructive/10 border-destructive" : ""}`}>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Emergency SOS</span>
            </CardTitle>
            <CardDescription>
              {emergencyActive 
                ? `Sending alert in ${countdown} seconds...`
                : "Instantly share your location and digital ID with authorities"
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            {emergencyActive ? (
              <>
                <div className="text-6xl font-bold text-destructive animate-pulse">
                  {countdown}
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={cancelEmergency}
                  className="w-full max-w-xs"
                >
                  Cancel Emergency
                </Button>
              </>
            ) : (
              <Button
                variant="emergency"
                size="emergency"
                onClick={handleEmergencySOS}
                className="mb-4"
              >
                <Phone className="h-8 w-8" />
              </Button>
            )}
            <p className="text-sm text-muted-foreground text-center max-w-sm">
              Press and hold for 3 seconds to activate emergency alert with your digital ID and precise location
            </p>
          </CardContent>
        </Card>

        {/* Digital ID Card */}
        <Card className="safety-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Your Digital ID</span>
            </CardTitle>
            <CardDescription>Blockchain-secured tourist identification</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div>
                <p className="text-sm font-medium">Blockchain ID</p>
                <p className="text-xs text-muted-foreground font-mono">{touristInfo.digitalId}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(touristInfo.digitalId)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">Blood Type</p>
                <p className="text-sm font-medium">{touristInfo.bloodType}</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">Allergies</p>
                <p className="text-sm font-medium">{touristInfo.allergies}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 p-3 bg-primary/10 rounded-lg">
              <MapPin className="h-4 w-4 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Current Location</p>
                <p className="text-sm font-medium">{touristInfo.location}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="safety-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Emergency Contacts</span>
            </CardTitle>
            <CardDescription>Important numbers for your safety</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <contact.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{contact.name}</p>
                    <p className="text-xs text-muted-foreground">{contact.number}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    window.open(`tel:${contact.number}`, '_self');
                    toast({
                      title: `Calling ${contact.name}`,
                      description: "Initiating emergency call...",
                    });
                  }}
                >
                  Call
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Personal Emergency Contact */}
        <Card className="safety-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Personal Emergency Contact</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
              <div>
                <p className="text-sm font-medium">Emergency Contact</p>
                <p className="text-xs text-muted-foreground">{touristInfo.emergencyContact}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toast({
                    title: "Contacting emergency contact",
                    description: "Sending your location and status...",
                  });
                }}
              >
                Notify
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Navigation />
    </div>
  );
};

export default Emergency;