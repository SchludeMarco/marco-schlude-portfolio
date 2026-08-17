"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { profile } from "@/data/profile";
import { mainNavItems } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {mainNavItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Menü öffnen"
                />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{profile.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {mainNavItems.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={<Link href={item.href} />}
                  >
                    <span className="block rounded-md px-2 py-2 text-sm text-foreground hover:bg-muted">
                      {item.label}
                    </span>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
