import { useState } from "react";

import { useRouter } from "next/router";
import siteConfig from "@/data/siteConfig";
import Link from "next/link";
import { cx } from "@/lib/utils";
import { Menu, X } from "react-feather";
import { Sun, Moon } from "react-feather";
import { useTheme } from "next-themes";

export const Header: React.FC = () => {
  const { pathname } = useRouter();
  const { theme: activeTheme, themes, setTheme } = useTheme();

  const bgColor = activeTheme === "light" ? "#f9fafb" : "#111827";
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const mobileMenuStyles: React.CSSProperties = {
    zIndex: 999,
    top: isMobileMenu ? 50 : "-100%",
    right: 0,
    transition: "top 0.3s ease-in-out",
    position: "fixed",
    width: "100%",
    textAlign: "center",
    backgroundColor: `${bgColor}`,
    padding: "1rem 0",
  };
  const toggleTheme = () => {
    setTheme(activeTheme === "dark" ? "light" : "dark");
    setIsMobileMenu(false);
  };

  return (
    <header>
      <div className="py-8 flex justify-between items-center">
        <Link href="/" className="font-bold">
          ITS DAVID
        </Link>
        <nav>
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setIsMobileMenu(!isMobileMenu)}
          >
            {isMobileMenu ? <X width="3em" /> : <Menu width="3em" />}
          </div>
          <ul className=" hidden md:flex space-x-8">
            {siteConfig.nav.map((item, index) => {
              const isActive = item.href === pathname;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cx(
                      "text-gray-500 hover:text-regal-yellow",
                      "dark:text-gray-400 dark:hover:text-regal-yellow"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <div
              className="hidden md:block cursor-pointer"
              onClick={toggleTheme}
            >
              {activeTheme === "light" ? (
                <Moon width="1.2em" />
              ) : (
                <Sun width="1.2em" />
              )}
            </div>
          </ul>
        </nav>
        <div
          style={mobileMenuStyles}
          className={`transition-opacity w-full flex flex-col space-y-8 items-center md:hidden ${
            isMobileMenu ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="space-y-8">
            {siteConfig.nav.map((item, index) => {
              const isActive = item.href === pathname;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cx(
                      "text-gray-500 hover:text-gray-900",
                      "dark:text-white dark:hover:text-regal-yellow"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="cursor-pointer" onClick={toggleTheme}>
            {activeTheme === "light" ? (
              <Moon width="3em" />
            ) : (
              <Sun width="3em" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
