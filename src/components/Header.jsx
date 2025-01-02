import {
  LucideLightbulb,
  LucideLock,
  LucideMenu,
  LucideMoon,
  LucideSun,
  LucideUserPlus,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import Container from "./Container";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <Container className={`border-b `}>
      <header className="flex justify-between items-center gap-5 py-4">
        <div className="flex items-center justify-between flex-grow">
          <h1 className="text-xl md:text-3xl font-serif font-thin text-sky-500 dark:text-white">
            Mario
          </h1>

          <div className="md:hidden block">
            <Sheet>
              <SheetTrigger className="dark:text-white">
                <LucideMenu />
              </SheetTrigger>
              <SheetContent className="dark:bg-gray-900 text-white border-none">
                <SheetTitle className="text-lg select-none hover:text-sky-800 cursor-pointer font-serif  border-b mb-2  font-normal">
                  <Link to="/">Home </Link>
                </SheetTitle>
                <SheetTitle className="text-lg select-none hover:text-sky-800 cursor-pointer font-serif  border-b mb-2  font-normal">
                  <Link to="/about">About </Link>
                </SheetTitle>
                <SheetTitle className="text-lg select-none hover:text-sky-800 cursor-pointer font-serif  border-b mb-2  font-normal">
                  <Link to="/contact">Contact </Link>
                </SheetTitle>
                <SheetTitle className="text-lg select-none hover:text-sky-800 cursor-pointer font-serif  border-b mb-2  font-normal">
                  <Link to="/faq">Faqs </Link>
                </SheetTitle>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="hidden md:flex md:gap-5  items-center">
            <Link
              className="font-mono text-sky-300 hover:bg-sky-800  dark:text-gray-500  dark:hover:bg-slate-200/20   duration-200 transition-all delay-100 active:scale-95  px-3 py-1.5 rounded-lg"
              to="/"
            >
              Home
            </Link>
            <Link
              className="font-mono hover:bg-sky-800 px-3 py-1.5 rounded-lg dark:hover:bg-slate-200/20   dark:text-gray-500 duration-200 transition-all delay-100 text-sky-100  "
              to="/about"
            >
              About
            </Link>
            <Link
              className="font-mono hover:bg-sky-800 px-3 py-1.5 rounded-lg dark:hover:bg-slate-200/20   duration-200 transition-all delay-100 text-sky-100 dark:text-gray-500 "
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="font-mono hover:bg-sky-800 px-3 py-1.5 rounded-lg dark:hover:bg-slate-200/20   duration-200 transition-all delay-100 text-sky-100 dark:text-gray-500 "
              to="/faq"
            >
              Faq
            </Link>
          </nav>
        </div>
        <div className="gap-2 items-center hidden md:flex">
          <Link to="/login" className="flex gap-1 items-center">
            <Button
              variant="outline"
              className="flex bg-transparent rounded-lg text-sky-100 hover:text-sky-100 border-sky-500 hover:bg-sky-800 dark:bg-slate-500 dark:text-gray-300 dark:hover:bg-slate-600 gap-1 items-center"
            >
              <LucideLock className="w-4 h-4" />
              <span>Login</span>
            </Button>
          </Link>
          <Link to="/register" className="flex gap-1 items-center">
            <Button
              variant="outline"
              className="flex bg-transparent rounded-lg text-sky-100 hover:text-sky-100 border-sky-500 hover:bg-sky-800 dark:bg-slate-500 dark:text-gray-300 dark:hover:bg-slate-600 gap-1 items-center"
            >
              <LucideUserPlus className="w-4 h-4" />
              <span>Login</span>
            </Button>
          </Link>

          <DarkModeToggle />
        </div>
      </header>
    </Container>
  );
};

export default Header;
