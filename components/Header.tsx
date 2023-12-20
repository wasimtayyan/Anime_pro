"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Dropdown,
  Input,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { SearchIcon } from "./Searchicon";
import useSearch from "@/app/context/SearchContext";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSearch } = useSearch();

  useEffect(() => {
    const dillay = setTimeout(() => {
      if (searchValue) {
        setSearch(searchValue);
        console.log(searchValue);
      } else {
        setSearch("");
      }
    }, 400);
    return () => clearTimeout(dillay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const menuItems = [
    { title: "Anemi", herf: "/" },
    { title: "Manga", herf: "/manga" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
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
      <NavbarContent className="mx-3 lg:mx-0" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
        />
        <NavbarBrand className="sm:hidden"></NavbarBrand>
        <NavbarBrand>
          <Image src="/logo.svg" alt="logo" height={60} width={60} />
          <p className="font-bold text-inherit">
            Anime <span className="red-gradient">Pro</span>{" "}
          </p>
        </NavbarBrand>
      </NavbarContent>

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
        {/* <NavbarItem>
          <Link href="#" className="text-white text-lg">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
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
          onValueChange={setSearchValue}
        />
      </NavbarContent>
      <NavbarMenu className="bg-[#0F1117]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full ${
                pathname === item.herf ? "text-[#3784ef]" : "text-white"
              }`}
              href={item.herf}
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
