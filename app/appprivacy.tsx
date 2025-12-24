import { View, Text, ScrollView } from "react-native";

export default function PrivacyPolicy() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>
        Privacy Policy
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        This calculator app does not collect, store, or share any personal data.
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        All calculations are performed locally on your device or browser.
      </Text>

      <Text style={{ fontSize: 16 }}>
        If you have any questions, contact the developer via GitHub.
      </Text>
    </ScrollView>
  );
}
