import { NavLink, useLocation } from "react-router-dom";
import { Home, AlertTriangle, Phone, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/dashboard", icon: Home, label: "Dashboard" },
  { to: "/incidents", icon: AlertTriangle, label: "Alerts" },
  { to: "/emergency", icon: Phone, label: "Emergency" },  
  { to: "/profile", icon: User, label: "Profile" },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around py-2 px-4 max-w-lg mx-auto">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          const isEmergency = to === "/emergency";
          
          return (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-smooth ${
                  isActive
                    ? isEmergency 
                      ? "text-destructive" 
                      : "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              <Icon 
                className={`h-5 w-5 ${isEmergency && isActive ? "animate-pulse" : ""}`} 
              />
              <span className="text-xs font-medium">{label}</span>
            </NavLink>
          );
        })}
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            // Handle logout
            window.location.href = "/";
          }}
          className="flex flex-col items-center space-y-1 px-3 py-2 text-muted-foreground hover:text-destructive"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-xs font-medium">Logout</span>
        </Button>
      </div>
    </nav>
  );
};