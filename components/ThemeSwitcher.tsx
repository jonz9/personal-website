"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "./ui/SunIcon";
import { MoonIcon } from "./ui/MoonIcon";
import { Switch } from "@nextui-org/switch";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleValueChange() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="z-20">
      <h2 className="text-black">hello testing switch</h2>
      <Switch
        defaultSelected
        size="lg"
        color="success"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onChange={handleValueChange}
      ></Switch>
      {/* <button onClick={() => setTheme("light")}></button>
      <button onClick={() => setTheme("dark")}></button> */}
    </div>
  );
}
