"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Dropdown,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import { SearchIcon } from "./Searchicon";
export default function Header() {
  const [value, setValue] = useState("");
  const pathname = usePathname();
  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="xl"
      classNames={{
        wrapper: "px-0",
        item: [
          "flex",
          "px-3",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      className="bg-[#0F1117] w-full text-white "
    >
      <NavbarBrand>
        <Image src="/logo.svg" alt="logo" height={60} width={60} />
        <p className="font-bold text-inherit">
          Anime <span className="red-gradient">Pro</span>{" "}
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-[#3784ef]" : "text-white"
            } text-lg`}
            aria-current="page"
          >
            Anime
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/manga"}>
          <Link
            href="/manga"
            aria-current="page"
            className={`${
              pathname === "/manga" ? "text-[#3784ef]" : "text-white"
            } text-lg`}
          >
            Manga
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-white text-lg">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[15rem] h-10",
            mainWrapper: "h-full",
            input: "text-md",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="lg"
          startContent={<SearchIcon size={18} />}
          type="search"
          onValueChange={setValue}
        />
      </NavbarContent>
    </Navbar>
  );
}
