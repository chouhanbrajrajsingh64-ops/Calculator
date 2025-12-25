import { Stack } from "expo-router";
import { ThemeProvider } from "@/ui/theme/ThemeContext";
import AppFooter from "../ui/components/AppFooter";
import { View } from "react-native";

export default function Layout() {
  return (
    <ThemeProvider>
       <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      <AppFooter /></View>
    </ThemeProvider>
  );
}
