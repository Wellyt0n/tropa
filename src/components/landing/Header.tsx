import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
    { title: "Quem somos", href: "#about" },
    { title: "Vantagens", href: "#benefits" },
    { title: "Recursos", href: "#resources" },
    { title: "Depoimentos", href: "#testimonials" },
    { title: "FAQ", href: "#faq" },
  ],
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#2B5C0F] text-white">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">{logo}</div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  href={item.href}
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-[#FFD700] hover:text-[#2B5C0F] focus:bg-[#FFD700] focus:text-[#2B5C0F] focus:outline-none disabled:pointer-events-none disabled:opacity-50",
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
