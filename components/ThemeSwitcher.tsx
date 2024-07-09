"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "./ui/SunIcon";
import { MoonIcon } from "./ui/MoonIcon";
import { Switch } from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleValueChange() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="z-20">
      <Switch
        defaultSelected
        size="lg"
        color="success"
        startContent={<MoonIcon />}
        endContent={<SunIcon />}
        onChange={handleValueChange}
        disableAnimation={false}
      ></Switch>
    </div>
  );
}
