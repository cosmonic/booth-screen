import * as React from 'react'

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (!item) {
        window.localStorage.setItem(key, JSON.stringify(initialValue))
        return initialValue
      }
      return JSON.parse(item)
    } catch (error) {
      console.error(error)
      return initialValue
    }
  }
  )
  const setValue = (value: ((oldValue: T) => string) | T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }
  return [storedValue, setValue]
}

export {useLocalStorage}