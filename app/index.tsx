import { View, Text, Pressable } from 'react-native'
import { useEffect, useState } from 'react'

import { useTheme } from '@/ui/theme/ThemeContext'
import { useCalculator } from '@/ui/hooks/useCalculator'

import { Display } from '@/ui/components/Display'
import { ButtonGrid } from '@/ui/components/ButtonGrid'
import { HistoryPanel } from '@/ui/components/HistoryPanel'

export default function Index() {
  const { theme, toggleTheme } = useTheme()
  const calc = useCalculator()
  const [historyOpen, setHistoryOpen] = useState(false)

  /* ---------- Keyboard Input (Web only) ---------- */
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handler = (e: KeyboardEvent) => {
      calc.onKey(e.key)
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        justifyContent: 'flex-end',
      }}
    >
      {/* Theme Toggle */}
      <Pressable
        onPress={toggleTheme}
        style={{ position: 'absolute', top: 40, left: 20, zIndex: 20 }}
      >
        <Text style={{ fontSize: 20 }}>🎨</Text>
      </Pressable>

      {/* History Button */}
      <Pressable
        onPress={() => setHistoryOpen(true)}
        style={{ position: 'absolute', top: 40, right: 20, zIndex: 20 }}
      >
        <Text style={{ fontSize: 22, color: theme.textPrimary }}>☰</Text>
      </Pressable>

      {/* Calculator */}
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Display
          value={calc.state.currentValue}
          previous={calc.state.previousValue}
          operator={calc.state.operator}
          error={calc.state.error}
        />

        <ButtonGrid
          onDigit={calc.digit}
          onDecimal={calc.decimal}
          onOperator={calc.operator}
          onEquals={calc.equals}
          onClear={calc.clear}
          onBackspace={calc.backspace}
          activeOperator={calc.state.operator}
        />
      </View>

      {/* History Panel */}
      <HistoryPanel
        visible={historyOpen}
        history={calc.state.history}
        onClose={() => setHistoryOpen(false)}
        onSelect={(value) => {
          calc.useHistoryValue(value)
          setHistoryOpen(false)
        }}
        onClearHistory={calc.clearHistoryPersistent}
      />
    </View>
  )
}
