
import React from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './theme/ThemeToggle';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center space-x-6">
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/products/biomedical-equipment" className="block">Biomedical Equipment</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/products/surgical-accessories" className="block">Surgical Accessories</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/services/calibration" className="block">Calibration & Maintenance</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="/services/outsourcing" className="block">Outsourcing Solutions</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact" className="px-4 py-2 hover:bg-accent rounded-md">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
