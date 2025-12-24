import { Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import type { HistoryItem } from '@/core/calculator/types'

const STORAGE_KEY = 'calculator_history'

export async function loadHistory(): Promise<HistoryItem[]> {
  try {
    if (Platform.OS === 'web') {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    }

    const raw = await AsyncStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export async function saveHistory(history: HistoryItem[]) {
  try {
    const value = JSON.stringify(history)

    if (Platform.OS === 'web') {
      localStorage.setItem(STORAGE_KEY, value)
    } else {
      await AsyncStorage.setItem(STORAGE_KEY, value)
    }
  } catch {}
}

export async function clearHistoryStorage() {
  try {
    if (Platform.OS === 'web') {
      localStorage.removeItem(STORAGE_KEY)
    } else {
      await AsyncStorage.removeItem(STORAGE_KEY)
    }
  } catch {}
}
