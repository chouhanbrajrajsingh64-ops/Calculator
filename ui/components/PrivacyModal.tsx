import { Modal, View, Text, ScrollView, Pressable, StyleSheet } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function PrivacyModal({ visible, onClose }: Props) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Close button */}
          <Pressable style={styles.close} onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </Pressable>

          <ScrollView>
            <Text style={styles.title}>Privacy Policy</Text>

            <Text style={styles.text}>
              This calculator application does not collect, store, or share any
              personal or sensitive user data.
            </Text>

            <Text style={styles.text}>
              All calculations are performed locally on your device or browser.
              No data is transmitted to external servers.
            </Text>

            <Text style={styles.text}>
              The application does not use analytics, advertising, or tracking
              services.
            </Text>

            <Text style={styles.text}>
              If you have any questions, please contact the developer via GitHub.
            </Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 16,
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    maxHeight: "90%",
  },
  close: {
    position: "absolute",
    right: 12,
    top: 8,
    zIndex: 10,
  },
  closeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
