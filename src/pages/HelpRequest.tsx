import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { MapPin, Users, MessageCircle, Clock, Star, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const HelpRequest = () => {
  const [helpType, setHelpType] = useState("");
  const [description, setDescription] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [connectedVolunteer, setConnectedVolunteer] = useState<any>(null);

  const { toast } = useToast();

  // Sample nearby volunteers
  const nearbyVolunteers = [
    {
      id: 1,
      name: "Raj Patel",
      distance: "0.3 km",
      rating: 4.9,
      specialties: ["Local Guide", "Emergency Help"],
      responseTime: "2 min",
      languages: ["English", "Hindi", "Gujarati"],
      avatar: "👨‍💼"
    },
    {
      id: 2,
      name: "Priya Sharma",
      distance: "0.5 km",
      rating: 4.8,
      specialties: ["Food Recommendations", "Shopping"],
      responseTime: "3 min",
      languages: ["English", "Hindi"],
      avatar: "👩‍💼"
    },
    {
      id: 3,
      name: "Ahmed Khan",
      distance: "0.8 km",
      rating: 4.7,
      specialties: ["Transportation", "Cultural Sites"],
      responseTime: "4 min",
      languages: ["English", "Hindi", "Urdu"],
      avatar: "👨‍🎓"
    }
  ];

  const handleRequestHelp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!helpType || !description) {
      toast({
        title: "Missing Information",
        description: "Please select help type and describe your situation.",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);
    
    // Simulate finding volunteers
    setTimeout(() => {
      setIsSearching(false);
      toast({
        title: "Volunteers Found!",
        description: "Found 3 volunteers nearby who can help you.",
      });
    }, 2000);
  };

  const handleConnectVolunteer = (volunteer: any) => {
    setConnectedVolunteer(volunteer);
    toast({
      title: "Connected!",
      description: `You're now connected with ${volunteer.name}. Start chatting!`,
    });
  };

  if (connectedVolunteer) {
    return (
      <div className="min-h-screen bg-background pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-accent to-accent/80 text-white p-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Connected with Volunteer</h1>
                <p className="text-white/80">Chat with your local helper</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-6">
          {/* Volunteer Info */}
          <Card className="safety-card mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{connectedVolunteer.avatar}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{connectedVolunteer.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{connectedVolunteer.distance} away</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-warning" />
                      <span>{connectedVolunteer.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{connectedVolunteer.responseTime} response</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {connectedVolunteer.specialties.map((specialty: string, index: number) => (
                      <Badge key={index} variant="secondary">{specialty}</Badge>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Languages: {connectedVolunteer.languages.join(", ")}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chat Interface */}
          <Card className="safety-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Chat with {connectedVolunteer.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="space-y-4 mb-4 h-64 overflow-y-auto border rounded-lg p-4 bg-muted/20">
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                    <p className="text-sm">Hi! I got your help request. I'm nearby and ready to assist you. What exactly do you need help with?</p>
                    <span className="text-xs text-muted-foreground">Just now</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Thank you! I'm lost near India Gate and need directions to my hotel.</p>
                    <span className="text-xs text-primary-foreground/70">Just now</span>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg p-3 max-w-xs shadow-sm">
                    <p className="text-sm">No problem! What's your hotel name? I can guide you there or even meet you if needed.</p>
                    <span className="text-xs text-muted-foreground">Just now</span>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="flex gap-2">
                <Input 
                  placeholder="Type your message..." 
                  className="flex-1"
                />
                <Button>Send</Button>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  Share Location
                </Button>
                <Button variant="outline" size="sm">
                  📞 Voice Call
                </Button>
                <Button variant="outline" size="sm">
                  📷 Send Photo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-glow text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Request Help</h1>
              <p className="text-primary-foreground/80">Connect with local volunteers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Help Request Form */}
        {!isSearching && nearbyVolunteers.length > 0 && !helpType ? (
          <Card className="safety-card">
            <CardHeader>
              <CardTitle>What kind of help do you need?</CardTitle>
              <CardDescription>
                Select the type of assistance you're looking for
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRequestHelp} className="space-y-4">
                <div>
                  <Label>Type of Help</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {[
                      "🗺️ Directions & Navigation",
                      "🍽️ Food Recommendations", 
                      "🛍️ Shopping Assistance",
                      "🚗 Transportation Help",
                      "🏛️ Cultural Information",
                      "🆘 Emergency Assistance"
                    ].map((type) => (
                      <Button
                        key={type}
                        type="button"
                        variant={helpType === type ? "default" : "outline"}
                        className="justify-start h-auto p-3"
                        onClick={() => setHelpType(type)}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Describe your situation</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Please provide more details about what you need help with..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Users className="h-4 w-4 mr-2" />
                  Find Volunteers
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : isSearching ? (
          <Card className="safety-card">
            <CardContent className="p-8 text-center">
              <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Finding Volunteers...</h3>
              <p className="text-muted-foreground">Looking for helpful locals near you</p>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Request Summary */}
            <Card className="safety-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{helpType}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => {setHelpType(""); setDescription("");}}>
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Available Volunteers */}
            <Card className="safety-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Available Volunteers
                </CardTitle>
                <CardDescription>
                  Choose a volunteer to connect with
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {nearbyVolunteers.map((volunteer) => (
                  <div key={volunteer.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{volunteer.avatar}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{volunteer.name}</h4>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-current text-warning" />
                            <span className="text-sm">{volunteer.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{volunteer.distance}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{volunteer.responseTime} response</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {volunteer.specialties.map((specialty, index) => (
                            <Badge key={index} variant="secondary">{specialty}</Badge>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Languages: {volunteer.languages.join(", ")}
                        </p>
                        <Button 
                          onClick={() => handleConnectVolunteer(volunteer)}
                          className="w-full"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Connect & Chat
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </>
        )}
      </div>

      <Navigation />
    </div>
  );
};

export default HelpRequest;