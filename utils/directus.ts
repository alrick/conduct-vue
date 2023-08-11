export const dTranslate = (object: any, key: string) => {
  return object?.translations?.[0]?.[key] || ''
}

export const dThumbnail = (id: string, preset?: string) => {
  switch (preset) {
    case 'thumb':
      return `https://eddb9.unifr.ch/nafo/assets/${id}/?fit=cover&width=160&height=160`
    case 'details':
      return `https://eddb9.unifr.ch/nafo/assets/${id}/?fit=cover&width=512`
    default:
      return `https://eddb9.unifr.ch/nafo/assets/${id}/`
  }
}