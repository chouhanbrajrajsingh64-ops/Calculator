import { View, Text, StyleSheet, Linking, Pressable } from "react-native";
import { useState } from "react";
import PrivacyModal from "@/ui/components/PrivacyModal";

export default function AppFooter() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
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

        <Pressable onPress={() => setShowPrivacy(true)}>
          <Text style={styles.link}>Privacy Policy</Text>
        </Pressable>
      </View>

      {/* Overlay */}
      <PrivacyModal
        visible={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      />
    </>
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
