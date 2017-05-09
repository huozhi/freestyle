import StyleRegistry from './StyleRegistry'

const StyleSheet = {
  create: (stylesMap) => {
    const association = {}
    Object.keys(stylesMap).forEach(styleName => {
      const style = stylesMap[styleName]
      const clsName = StyleRegistry.register(styleName, style)
      association[styleName] = clsName
    })
    return association
  },
  flatten: (stylesArray) => {
    return stylesArray.reduce((r, style) => Object.assign({}, r, style), {})
  },
}

export default StyleSheet
