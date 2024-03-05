"use client";

import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  useDisclosure,
  ModalContent,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pathname = usePathname();

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
      title: "Heating",
      href: "/services/heating",
    },
    {
      title: "Cooling",
      href: "/services/cooling",
    },
    {
      title: "Ductless",
      href: "/services/ductless",
    },
    {
      title: "Mitsusbishi",
      href: "/products/mitsubishi",
    },
    {
      title: "American Standard",
      href: "/products/american-standard",
    },
    {
      title: "NYSERDA",
      href: "/products/nyserda",
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
      className="bg-forground"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-primary"
        />
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
        {/*<NavbarItem isActive={pathname === "/"}>
          <Link href="/">
            Home
          </Link>
  </NavbarItem>*/}
        <NavbarItem isActive={pathname === "/about"}>
          <Link href="./about" aria-current="page">
            About Us
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem isActive={pathname.includes("services")}>
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
              href="/services/heating"
            >
              Heating
            </DropdownItem>
            <DropdownItem
              key="cooling"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              href="/services/cooling"
            >
              Cooling
            </DropdownItem>
            <DropdownItem
              key="ductless"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              href="/services/ductless"
            >
              Ductless
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem isActive={pathname.includes("products")}>
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
              href="/products/mitsubishi"
            >
              Mitsubishi
            </DropdownItem>
            <DropdownItem
              key="american-standard"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              href="/products/american-standard"
            >
              American Standard
            </DropdownItem>
            <DropdownItem
              key="NYSERDA"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              href="/products/nyserda"
            >
              NYSERDA
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem isActive={pathname === "/financing"}>
          <Link href="/financing">Financing</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" variant="shadow" onPress={onOpen}>
            Contact Us
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Modal Title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod. Et mollit incididunt nisi consectetur esse
                      laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                      deserunt nostrud ad veniam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
