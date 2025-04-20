
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Welcome to Your Theme-Enabled App</CardTitle>
            <CardDescription>Try switching between light and dark modes using the toggle button above!</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This app features a beautiful theme system that automatically adjusts to your preferences.
              The UI components are designed to look great in both light and dark modes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
