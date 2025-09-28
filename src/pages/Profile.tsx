import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Shield, 
  Heart, 
  Phone, 
  MapPin, 
  Calendar,
  Edit,
  Copy,
  CheckCircle,
  Globe,
  FileText
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${label} has been copied.`,
    });
  };

  const profileData = {
    name: "John Doe",
    email: "john.doe@example.com",
    passportNumber: "US123456789",
    digitalId: "TS-BLK-789456123-NYC",
    nationality: "United States",
    bloodType: "O+",
    allergies: "None",
    medicalConditions: "None",
    emergencyContactName: "Jane Doe",
    emergencyContactPhone: "+1-555-0123",
    emergencyContactRelation: "Spouse",
    registrationDate: "2024-01-15",
    lastLocationUpdate: "2 minutes ago",
    safetyScore: 92
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{profileData.name}</h1>
              <p className="text-sm text-muted-foreground">Tourist Profile</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-accent/10 text-accent border-accent">
              <CheckCircle className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Blockchain Digital ID */}
        <Card className="safety-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Blockchain Digital ID</span>
            </CardTitle>
            <CardDescription>Secure, tamper-proof tourist identification</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
              <div>
                <p className="text-sm font-medium text-primary">Digital ID</p>
                <p className="text-lg font-mono font-bold">{profileData.digitalId}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Registered: {profileData.registrationDate}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard(profileData.digitalId, "Digital ID")}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">Safety Score</p>
                <p className="text-2xl font-bold text-accent">{profileData.safetyScore}%</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="text-sm font-medium text-accent">Active Tourist</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="safety-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Personal Information</span>
              </CardTitle>
              <CardDescription>Your travel and identity details</CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={profileData.name} readOnly className="bg-muted" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={profileData.email} readOnly className="bg-muted" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="passport">Passport Number</Label>
                  <Input id="passport" value={profileData.passportNumber} readOnly className="bg-muted" />
                </div>
                <div>
                  <Label htmlFor="nationality">Nationality</Label>
                  <Input id="nationality" value={profileData.nationality} readOnly className="bg-muted" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card className="safety-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Medical Information</span>
              </CardTitle>
              <CardDescription>Important health details for emergencies</CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="bloodType">Blood Type</Label>
                <Input id="bloodType" value={profileData.bloodType} readOnly className="bg-muted" />
              </div>
              <div>
                <Label htmlFor="allergies">Allergies</Label>
                <Input id="allergies" value={profileData.allergies} readOnly className="bg-muted" />
              </div>
            </div>
            <div>
              <Label htmlFor="conditions">Medical Conditions</Label>
              <Input id="conditions" value={profileData.medicalConditions} readOnly className="bg-muted" />
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contacts */}
        <Card className="safety-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Emergency Contact</span>
              </CardTitle>
              <CardDescription>Person to contact in case of emergency</CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="emergencyName">Contact Name</Label>
              <Input id="emergencyName" value={profileData.emergencyContactName} readOnly className="bg-muted" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="emergencyPhone">Phone Number</Label>
                <Input id="emergencyPhone" value={profileData.emergencyContactPhone} readOnly className="bg-muted" />
              </div>
              <div>
                <Label htmlFor="relation">Relationship</Label>
                <Input id="relation" value={profileData.emergencyContactRelation} readOnly className="bg-muted" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location & Activity */}
        <Card className="safety-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Location & Activity</span>
            </CardTitle>
            <CardDescription>Your recent location and safety activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
              <MapPin className="h-4 w-4 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium">Last Location Update</p>
                <p className="text-xs text-muted-foreground">{profileData.lastLocationUpdate}</p>
              </div>
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent">
                <CheckCircle className="h-3 w-3 mr-1" />
                Active
              </Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-lg font-bold text-primary">47</p>
                <p className="text-xs text-muted-foreground">Safe Zones</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-lg font-bold text-accent">12</p>
                <p className="text-xs text-muted-foreground">Days Active</p>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <p className="text-lg font-bold text-secondary">0</p>
                <p className="text-xs text-muted-foreground">Incidents</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="safety-card">
          <CardHeader>
            <CardTitle>Settings & Preferences</CardTitle>
            <CardDescription>Manage your safety and privacy settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => toast({ title: "Privacy settings", description: "Opening privacy controls..." })}
            >
              <Shield className="h-4 w-4 mr-2" />
              Privacy & Security
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => toast({ title: "Notification settings", description: "Opening notification preferences..." })}
            >
              <Globe className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => toast({ title: "Export data", description: "Preparing your data export..." })}
            >
              <FileText className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </CardContent>
        </Card>
      </main>

      <Navigation />
    </div>
  );
};

export default Profile;