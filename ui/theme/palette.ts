// ui/theme/palette.ts
import type { AppTheme } from './types'

export const palette = {
  white: '#ffffff',
  black: '#000000',

  gray100: '#f5f5f5',
  gray300: '#d1d1d6',
  gray400: '#aeaeb2',
  gray600: '#636366',
  gray900: '#1c1c1e',

  orange: '#ff9500',
  blue: '#007aff',
  green: '#34c759',
}

export const lightTheme: AppTheme = {
  background: palette.gray100,
  displayBg: palette.white,

  textPrimary: palette.black,
  textSecondary: palette.gray600,

  displayPrimaryText: palette.black,
  displaySecondaryText: palette.gray400,

  buttonBg: palette.gray300,
  buttonText: palette.black,

  operatorBg: palette.orange,
  operatorActiveBg: palette.blue,

  functionBg: palette.gray600,
  equalsBg: palette.orange,

  accent: palette.orange,
  error: '#ff3b30',
}

export const darkTheme: AppTheme = {
  background: palette.black,
  displayBg: palette.gray900,

  textPrimary: palette.white,
  textSecondary: palette.gray300,

  displayPrimaryText: palette.white,
  displaySecondaryText: palette.gray400,

  buttonBg: '#2c2c2e',
  buttonText: palette.white,

  operatorBg: '#3a3a3c',
  operatorActiveBg: palette.orange,

  functionBg: '#505050',
  equalsBg: palette.orange,

  accent: palette.orange,
  error: '#ff453a',
}

export const accentTheme: AppTheme = {
  ...darkTheme,
  accent: palette.green,
  operatorActiveBg: palette.green,
  equalsBg: palette.green,
}
