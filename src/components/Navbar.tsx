
import React, { useState } from 'react';
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
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Drawer, 
  DrawerClose, 
  DrawerContent, 
  DrawerTrigger 
} from '@/components/ui/drawer';

export const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const MobileMenu = () => (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button className="p-2 md:hidden">
          <Menu size={24} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-[85vh]">
        <div className="flex flex-col p-4">
          <div className="flex items-center justify-between mb-4">
            <Logo />
            <DrawerClose asChild>
              <button className="p-2 rounded-full hover:bg-accent">
                <X size={24} />
              </button>
            </DrawerClose>
          </div>
          <div className="flex flex-col space-y-4">
            {MENU_ITEMS.map((item) => (
              <div key={item.title} className="flex flex-col">
                {item.subMenu ? (
                  <>
                    <div className="font-medium text-lg mb-2">{item.title}</div>
                    <div className="flex flex-col space-y-2 ml-4">
                      {item.subMenu.map((subItem) => (
                        <Link 
                          key={subItem.title} 
                          to={subItem.href} 
                          className="py-2 hover:bg-accent px-3 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    to={item.href} 
                    className="py-2 hover:bg-accent px-3 rounded-md font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto flex justify-center py-4">
            <ThemeToggle />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-background sticky top-0 z-50 w-full">
      <div className="flex items-center space-x-6">
        <Logo />
        {!isMobile && (
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
        )}
      </div>
      <div className="flex items-center space-x-4">
        {!isMobile && <ThemeToggle />}
        {isMobile && <MobileMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
