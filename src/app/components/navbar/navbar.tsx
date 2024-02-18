"use client";

import { useState } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Image, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Mitusbishi",
      href: "/mitsubishi",
    },
    {
      title: "American Standard",
      href: "/american-standard",
    },
    {
      title: "NYSERDA",
      href: "/nyserda",
    },
    {
      title: "Financing",
      href: "/financing",
    },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="text-primary" />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
        <Image
                src={"/CMMechanical_logo.png"}
                width={250}
                height={250}
                alt="C&M Mechanical Logo"
                className="my-0 mx-auto"
              />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image
                src={"/CMMechanical_logo.png"}
                width={250}
                height={250}
                alt="C&M Mechanical Logo"
                className="my-0 mx-auto"
              />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/about" aria-current="page">
            About Us
          </Link>
        </NavbarItem>
        
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="lg"
                variant="light"
                color="primary"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="C & M Mechanical Products"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Heating"
              description="ACME scales apps to meet user demand, automagically, based on load."
            >
              Heating
            </DropdownItem>
            <DropdownItem
              key="cooling"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            >
              Cooling
            </DropdownItem>
            <DropdownItem
              key="ductless"
              description="ACME runs on ACME, join us and others serving requests at web scale."
            >
              Ductless
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
          
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="lg"
                variant="light"
                color="primary"
              >
                Products
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="C & M Mechanical Services"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Mitusbishi"
              description="ACME scales apps to meet user demand, automagically, based on load."
            >
              Mitsubishi
            </DropdownItem>
            <DropdownItem
              key="american-standard"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
            >
              American Standard
            </DropdownItem>
            <DropdownItem
              key="NYSERDA"
              description="ACME runs on ACME, join us and others serving requests at web scale."
            >
              NYSERDA
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link href="/financing">
            Financing
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="ghost">
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
