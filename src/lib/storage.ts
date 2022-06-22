export const jsonLocalStorage = {
  setItem: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  getItem: (key: string) => {
    const item = localStorage.getItem(key)
    if (!item) return
    return JSON.parse(item)
  },
  clear: () => {
    localStorage.clear()
  },
}
