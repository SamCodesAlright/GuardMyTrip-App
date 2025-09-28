import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Smartphone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useToast } from "@/hooks/use-toast";


const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [userType, setUserType] = useState<"tourist" | "volunteer">("tourist");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: `You've been successfully logged in as a ${userType}.`,
      });
      navigate(userType === "volunteer" ? "/volunteer-dashboard" : "/dashboard");
    }, 1500);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration successful!",
        description: `Your ${userType} account has been created with blockchain ID.`,
      });
      navigate(userType === "volunteer" ? "/volunteer-dashboard" : "/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Smart Tourist Safety System" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Smart Tourist Safety</h1>
            <p className="text-sm opacity-90">Your digital guardian while traveling</p>
          </div>
        </div>
      </div>

      {/* Login/Register Form */}
      <div className="flex-1 p-6">
        <div className="max-w-md mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            {/* User Type Selection */}
            <div className="mb-6">
              <Label className="text-sm font-medium">I am a:</Label>
              <div className="flex gap-4 mt-2">
                <Button 
                  type="button"
                  variant={userType === "tourist" ? "default" : "outline"} 
                  className="flex-1 justify-start"
                  onClick={() => setUserType("tourist")}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Tourist
                </Button>
                <Button 
                  type="button"
                  variant={userType === "volunteer" ? "default" : "outline"} 
                  className="flex-1 justify-start"
                  onClick={() => setUserType("volunteer")}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Volunteer
                </Button>
              </div>
            </div>
            
            <TabsContent value="login">
              <Card className="safety-card">
                <CardHeader className="text-center">
                  <CardTitle>Welcome Back</CardTitle>
                  <CardDescription>
                    Sign in to access your safety dashboard
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tourist@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card className="safety-card">
                <CardHeader className="text-center">
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>
                    Register to get your blockchain digital ID
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleRegister}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reg-name">Full Name</Label>
                      <Input
                        id="reg-name"
                        type="text"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-email">Email</Label>
                      <Input
                        id="reg-email"
                        type="email"
                        placeholder="tourist@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-password">Password</Label>
                      <Input
                        id="reg-password"
                        type="password"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passport">Passport Number</Label>
                      <Input
                        id="passport"
                        type="text"
                        placeholder="123456789"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Features */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Smartphone className="h-5 w-5 text-primary" />
              <span>Blockchain-secured digital identity</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Real-time location tracking & geofencing</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span>AI-powered safety monitoring</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;