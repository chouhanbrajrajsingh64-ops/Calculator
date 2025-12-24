import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '@/ui/theme/ThemeContext'

type Props = {
  value: string
  previous?: string | null
  operator?: '+' | '-' | '*' | '/' | null
  error?: string | null
}

export function Display({ value, previous, operator, error }: Props) {
  const { theme } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.displayBg }]}>
      <Text style={[styles.previous, { color: theme.displaySecondaryText }]}>
        {previous && operator ? `${previous} ${operator}` : ' '}
      </Text>

      <Text style={[styles.current, { color: theme.displayPrimaryText }]}>
        {error ?? value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    padding: 16,
    justifyContent: 'flex-end',
  },
  previous: {
    fontSize: 18,
    textAlign: 'right',
  },
  current: {
    fontSize: 40,
    textAlign: 'right',
  },
})
