import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const router = useRouter();

  const navigate = (url: string) => {
    router.push(url);
  };

  return (
    <React.StrictMode>
      <NextUIProvider navigate={navigate}>
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
      </NextUIProvider>
    </React.StrictMode>
  );
}
