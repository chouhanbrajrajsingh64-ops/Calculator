import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native'

export type HistoryItem = {
  expression: string
  result: string
}

type Props = {
  visible: boolean
  history: HistoryItem[]
  onClose: () => void
  onSelect: (value: string) => void
  onClearHistory: () => void
}

export function HistoryPanel({
  visible,
  history,
  onClose,
  onSelect,
  onClearHistory,
}: Props) {
  if (!visible) return null

  return (
    <View style={styles.overlay}>
      {/* Backdrop */}
      <Pressable style={styles.backdrop} onPress={onClose} />

      {/* Panel */}
      <View style={styles.panel}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>History</Text>

          {history.length > 0 && (
            <Pressable
              onPress={onClearHistory}
              style={styles.clearButton}
            >
              <Text style={styles.clearText}>Clear</Text>
            </Pressable>
          )}
        </View>

        {/* Content */}
        {history.length === 0 ? (
          <Text style={styles.empty}>No calculations yet</Text>
        ) : (
          <ScrollView>
            {history.map((item, index) => (
              <Pressable
                key={index}
                style={styles.item}
                onPress={() => onSelect(item.result)}
              >
                <Text style={styles.expression}>{item.expression}</Text>
                <Text style={styles.result}>{item.result}</Text>
              </Pressable>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    inset: 0,
    zIndex: 30,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  panel: {
    backgroundColor: '#111',
    maxHeight: '55%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  clearButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#ff3b30',
    borderRadius: 6,
  },
  clearText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  empty: {
    color: '#777',
    textAlign: 'center',
    padding: 20,
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#222',
  },
  expression: {
    color: '#888',
    fontSize: 14,
  },
  result: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'right',
    fontWeight: '600',
  },
})
