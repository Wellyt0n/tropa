import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

interface HeaderProps {
  logo?: string;
  navigationItems?: Array<{
    title: string;
    href: string;
  }>;
}

const Header = ({
  logo = "Tropa do ML",
  navigationItems = [
    { title: "Vantagens", href: "#benefits" },
    { title: "Recursos", href: "#resources" },
    { title: "Depoimentos", href: "#testimonials" },
    { title: "FAQ", href: "#faq" },
    { title: "Quem somos", href: "#about" },
  ],
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="logo-text text-3xl font-bold">{logo}</div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  href={item.href}
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-[#3A5F0B] hover:text-[#FFD700] focus:bg-[#3A5F0B] focus:text-[#FFD700] focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
