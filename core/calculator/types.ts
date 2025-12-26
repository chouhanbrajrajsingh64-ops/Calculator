// ui/theme/types.ts
export type Operator = '+' | '-' | '*' | '/' | '%'

export type AppTheme = {
  background: string
  displayBg: string

  textPrimary: string
  textSecondary: string

  displayPrimaryText: string
  displaySecondaryText: string

  buttonBg: string
  buttonText: string

  operatorBg: string
  operatorActiveBg: string

  functionBg: string
  equalsBg: string

  accent: string
  error: string
}
