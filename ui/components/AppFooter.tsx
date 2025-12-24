import { View, Text, StyleSheet, Linking } from "react-native";

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
        </Text>
      </Text>

      <Text
        style={styles.link}
        onPress={() =>
          Linking.openURL("/privacy")
        }
      >
        Privacy Policy
      </Text>
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
    color: "#7082a9ff",
  },
});
