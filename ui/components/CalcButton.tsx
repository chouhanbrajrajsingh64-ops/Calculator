import { Text, Pressable, StyleSheet } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

export function CalcButton({ label, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000ff",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  text: {
    color: "#ffffffff",
    fontSize: 22,
  },
});
