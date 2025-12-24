import { View, Pressable, Text, StyleSheet } from 'react-native'
import { useTheme } from '../theme/ThemeContext'

type Operator = '+' | '-' | '*' | '/'

type Props = {
  onDigit: (d: string) => void
  onOperator: (op: Operator) => void
  onEquals: () => void
  onClear: () => void
  onDecimal: () => void
  onBackspace: () => void
  activeOperator?: Operator | null
}

export function ButtonGrid({
  onDigit,
  onOperator,
  onEquals,
  onClear,
  onDecimal,
  onBackspace,
  activeOperator,
}: Props) {
  const { theme } = useTheme()

  const Btn = ({
    label,
    onPress,
    variant = 'number',
    wide,
    active,
  }: {
    label: string
    onPress: () => void
    variant?: 'number' | 'operator' | 'function' | 'equals'
    wide?: boolean
    active?: boolean
  }) => {
    const backgroundColor =
      variant === 'operator'
        ? active
          ? theme.operatorActiveBg
          : theme.operatorBg
        : variant === 'function'
        ? theme.functionBg
        : variant === 'equals'
        ? theme.equalsBg
        : theme.buttonBg

    return (
      <Pressable
        onPress={onPress}
        style={[
          styles.button,
          { backgroundColor },
          wide && styles.wide,
        ]}
      >
        <Text
          style={[
            styles.text,
            { color: theme.buttonText },
            variant === 'operator' && styles.operatorText,
            variant === 'equals' && styles.equalsText,
          ]}
        >
          {label}
        </Text>
      </Pressable>
    )
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Row 1 */}
      <Btn label="C" onPress={onClear} variant="function" />
      <Btn label="/" onPress={() => onOperator('/')} variant="operator" active={activeOperator === '/'} />
      <Btn label="*" onPress={() => onOperator('*')} variant="operator" active={activeOperator === '*'} />
      <Btn label="-" onPress={() => onOperator('-')} variant="operator" active={activeOperator === '-'} />

      {/* Row 2 */}
      <Btn label="7" onPress={() => onDigit('7')} />
      <Btn label="8" onPress={() => onDigit('8')} />
      <Btn label="9" onPress={() => onDigit('9')} />
      <Btn label="+" onPress={() => onOperator('+')} variant="operator" active={activeOperator === '+'} />

      {/* Row 3 */}
      <Btn label="4" onPress={() => onDigit('4')} />
      <Btn label="5" onPress={() => onDigit('5')} />
      <Btn label="6" onPress={() => onDigit('6')} />
      <Btn label="⌫" onPress={onBackspace} variant="function" />

      {/* Row 4 */}
      <Btn label="1" onPress={() => onDigit('1')} />
      <Btn label="2" onPress={() => onDigit('2')} />
      <Btn label="3" onPress={() => onDigit('3')} />
      <Btn label="=" onPress={onEquals} variant="equals" />

      {/* Row 5 */}
      <Btn label="0" onPress={() => onDigit('0')} wide />
      <Btn label="." onPress={onDecimal} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  button: {
    width: '25%',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#222',
  },

  wide: {
    width: '75%',
  },

  text: {
    fontSize: 24,
  },

  operatorText: {
    fontSize: 26,
    fontWeight: '600',
  },

  equalsText: {
    fontSize: 26,
    fontWeight: '700',
  },
})
