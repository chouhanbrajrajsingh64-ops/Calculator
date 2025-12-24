import { useEffect, useReducer } from 'react'
import { calculatorReducer, initialState } from '@/core/calculator/reducer'
import { Operator } from '@/core/calculator/types'

import {
  loadHistory,
  saveHistory,
  clearHistoryStorage,
} from '@/ui/storage/historyStorage'

/* ==============================
   Hook
================================ */

export function useCalculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  /* ---------- Load History (ONCE) ---------- */
  useEffect(() => {
    loadHistory().then(history => {
      if (history.length > 0) {
        dispatch({ type: 'SET_HISTORY', history })
      }
    })
  }, [])

  /* ---------- Persist History ---------- */
  useEffect(() => {
    saveHistory(state.history)
  }, [state.history])

  /* ---------- Calculator Actions ---------- */

  const digit = (value: string) =>
    dispatch({ type: 'DIGIT', value })

  const decimal = () =>
    dispatch({ type: 'DECIMAL' })

  const operator = (operator: Operator) =>
    dispatch({ type: 'OPERATOR', operator })

  const equals = () =>
    dispatch({ type: 'EQUALS' })

  const clear = () =>
    dispatch({ type: 'CLEAR' }) // clears calculation ONLY

  const backspace = () =>
    dispatch({ type: 'BACKSPACE' })

  /* ---------- History ---------- */

  const useHistoryValue = (value: string) =>
    dispatch({ type: 'SET', value })

  const clearHistory = () =>
    dispatch({ type: 'CLEAR_HISTORY' })

  const clearHistoryPersistent = async () => {
    await clearHistoryStorage()
    dispatch({ type: 'CLEAR_HISTORY' })
  }

  /* ---------- Keyboard (Web) ---------- */

  const onKey = (key: string) => {
    if (key >= '0' && key <= '9') return digit(key)
    if (key === '.') return decimal()
    if (['+', '-', '*', '/'].includes(key))
      return operator(key as Operator)
    if (key === 'Enter' || key === '=') return equals()
    if (key === 'Backspace') return backspace()
    if (key === 'Escape') return clear()
  }

  /* ---------- API ---------- */

  return {
    state,
    dispatch,

    digit,
    decimal,
    operator,
    equals,
    clear,
    backspace,

    onKey,

    useHistoryValue,
    clearHistory,
    clearHistoryPersistent,
  }
}
