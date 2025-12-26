// ==============================
// Calculator Core Engine
// ==============================

import { CalculatorState, Operator } from './types'

// ==============================
// Initial State
// ==============================

export function createInitialState(): CalculatorState {
  return {
    currentValue: '0',
    previousValue: null,
    operator: null,
    error: null,
    history: [],
  }
}

// ==============================
// Input Handlers
// ==============================

export function inputDigit(
  state: CalculatorState,
  digit: string
): CalculatorState {
  if (state.error) return state

  return {
    ...state,
    currentValue:
      state.currentValue === '0'
        ? digit
        : state.currentValue + digit,
  }
}

export function inputDecimal(
  state: CalculatorState
): CalculatorState {
  if (state.error) return state
  if (state.currentValue.includes('.')) return state

  return {
    ...state,
    currentValue: state.currentValue + '.',
  }
}

// ==============================
// Clear Operations
// ==============================

// Clears current calculation ONLY (C button)
export function clear(
  state: CalculatorState
): CalculatorState {
  return {
    ...state,
    currentValue: '0',
    previousValue: null,
    operator: null,
    error: null,
  }
}

// Clears EVERYTHING (rare reset)
export function clearAll(): CalculatorState {
  return createInitialState()
}

// Clears history ONLY
export function clearHistory(
  state: CalculatorState
): CalculatorState {
  return {
    ...state,
    history: [],
  }
}

// ==============================
// Operator Selection
// ==============================

export function chooseOperator(
  state: CalculatorState,
  operator: Operator
): CalculatorState {
  if (state.error) return state

  // If chaining operators, calculate first
  if (state.previousValue !== null && state.operator !== null) {
    state = calculate(state)
  }

  return {
    ...state,
    previousValue: state.currentValue,
    currentValue: '0',
    operator,
  }
}

export function backspace(
  state: CalculatorState
): CalculatorState {
  if (state.error) return state

  if (state.currentValue.length <= 1) {
    return {
      ...state,
      currentValue: '0',
    }
  }

  return {
    ...state,
    currentValue: state.currentValue.slice(0, -1),
  }
}

// ==============================
// Calculation + History
// ==============================

export function calculate(
  state: CalculatorState
): CalculatorState {
  const { operator, previousValue, currentValue } = state

  if (!operator || previousValue === null) {
    return state
  }

  const a = Number(previousValue)
  const b = Number(currentValue)

  if (operator === '/' && b === 0) {
    return {
      ...state,
      error: 'Cannot divide by zero',
    }
  }

  let result: number

  switch (operator) {
    case '+':
      result = a + b
      break

    case '-':
      result = a - b
      break

    case '*':
      result = a * b
      break

    case '/':
      result = a / b
      break

    case '%':
      /**
       * Percent behavior:
       * If previous value exists → a * (b / 100)
       * Else → b / 100
       */
      result =
        previousValue !== null
          ? a * (b / 100)
          : b / 100
      break

    default:
      return state
  }

  const resultStr = Number(result.toFixed(10)).toString()
  const expression =
    operator === '%'
      ? `${previousValue ?? ''} ${currentValue}%`
      : `${previousValue} ${operator} ${currentValue}`

  return {
    ...state,
    currentValue: resultStr,
    previousValue: null,
    operator: null,
    error: null,
    history: [
      ...state.history,
      {
        expression,
        result: resultStr,
      },
    ],
  }
}

