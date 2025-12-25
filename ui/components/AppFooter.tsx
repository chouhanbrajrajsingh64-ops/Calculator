import { View, Text, StyleSheet, Linking } from "react-native";
import { Link } from "expo-router";

export default function AppFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Built by{" "}
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL("https://github.com/chouhanbrajrajsingh64-ops")
          }
        >
          Brajraj Singh Chouhan
        </Text>{" "}
         © 2025 Web Calculator
      </Text>

      {/* INTERNAL ROUTE — MUST USE Link */}
      <Link href="/appprivacy" style={styles.link}>
        Privacy Policy
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    opacity: 0.7,
  },
  link: {
    fontSize: 12,
    color: "#0051ffff",
    marginTop: 4,
  },
});
