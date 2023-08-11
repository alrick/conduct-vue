export const sanitizeAndSort = (list: string[]) => {
  list = Array.from(new Set(list.filter(item => item !== null)))
  sortAlpha(list)
  return list
}

export const sortAlpha = (list: string[]) => {
  list.sort((a: string, b: string) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
}

export const formatDate = (date: number) => {
  return date > 0 ? Math.abs(date) + ' apr. J.-C.' : Math.abs(date) + ' av. J.-C.'
}