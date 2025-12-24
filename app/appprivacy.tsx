import { View, Text } from "react-native";

export default function Privacy() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 14 }}>
        This calculator does not collect, store, or transmit personal data.
        All calculations and history remain locally on the user’s device.
      </Text>
    </View>
  );
}
