import { Operator } from './types'

export type CalcAction =
  | { type: 'DIGIT'; value: string }
  | { type: 'DECIMAL' }
  | { type: 'OPERATOR'; operator: Operator }
  | { type: 'EQUALS' }
  | { type: 'BACKSPACE' }
  | { type: 'CLEAR' }
  | { type: 'CLEAR_HISTORY' }
  | { type: 'SET'; value: string }
  | { type: 'ERROR'; message: string }
