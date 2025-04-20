
import React from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './theme/ThemeToggle';
import { MENU_ITEMS } from '@/config/menu';
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
            {MENU_ITEMS.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.subMenu ? (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.title}>
                            <NavigationMenuLink asChild>
                              <Link to={subItem.href} className="block px-4 py-2 hover:bg-accent rounded-md">
                                {subItem.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link to={item.href} className="px-4 py-2 hover:bg-accent rounded-md">
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
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
