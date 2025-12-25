import { ScrollView, Text } from "react-native";

export default function PrivacyPolicy() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Privacy Policy
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 12 }}>
        This Privacy Policy explains how the Calculator application (“the App”)
        handles user information.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Information Collection
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 12 }}>
        The App does not collect, store, transmit, or share any personal or
        sensitive user data. No account creation or sign-in is required to use
        the App.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Data Usage
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 12 }}>
        All calculations are performed locally on your device or in your browser.
        No data is sent to external servers.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Third-Party Services
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 12 }}>
        The App does not use analytics, advertising, tracking SDKs, or third-party
        data collection services.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Children’s Privacy
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 12 }}>
        This App is suitable for all ages and does not knowingly collect any
        information from children.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Changes to This Policy
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 12 }}>
        This Privacy Policy may be updated in the future. Any changes will be
        reflected on this page.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Contact
      </Text>
      <Text style={{ fontSize: 16 }}>
        If you have questions or concerns about this Privacy Policy, please
        contact the developer via GitHub.
      </Text>
    </ScrollView>
  );
}
