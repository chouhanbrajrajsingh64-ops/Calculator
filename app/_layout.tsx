import { Stack } from "expo-router";
import { ThemeProvider } from "@/ui/theme/ThemeContext";
import AppFooter from "../ui/components/AppFooter";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <AppFooter />
    </ThemeProvider>
  );
}
