import { CalculatorState } from './types'
import { CalcAction } from './actions'
import {
  createInitialState,
  inputDigit,
  inputDecimal,
  chooseOperator,
  calculate,
  backspace,
  clear,
  clearHistory,
} from './engine'

// ==============================
// Initial State
// ==============================

export const initialState: CalculatorState = createInitialState()

// ==============================
// Reducer (UI-facing brain)
// ==============================

export function calculatorReducer(
  state: CalculatorState,
  action: CalcAction
): CalculatorState {
  switch (action.type) {

    /* ---------- Numbers ---------- */
    case 'DIGIT':
      return inputDigit(state, action.value)

    case 'DECIMAL':
      return inputDecimal(state)

    /* ---------- Operator ---------- */
    case 'OPERATOR': {
      // If operator already exists, calculate first (operator chaining)
      if (state.operator && state.previousValue !== null) {
        const calculated = calculate(state)

        return {
          ...chooseOperator(calculated, action.operator),
        }
      }

      return chooseOperator(state, action.operator)
    }

    /* ---------- Equals ---------- */
    case 'EQUALS':
      return calculate(state)

    /* ---------- Editing ---------- */
    case 'BACKSPACE':
      return backspace(state)

    case 'CLEAR':
      return clear(state) // ✅ clears values, keeps history

    /* ---------- History ---------- */
    case 'CLEAR_HISTORY':
      return clearHistory(state)

    case 'SET_HISTORY':
      return {
        ...state,
        history: action.history,
      }

    case 'SET':
      return {
        ...state,
        currentValue: action.value,
        previousValue: null,
        operator: null,
        error: null,
      }

    /* ---------- Error ---------- */
    case 'ERROR':
      return {
        ...state,
        error: action.message,
      }

    default:
      return state
  }
}
