const emptyObj = {}
const stylesMap = {}
const namesMap = {}
let uniqueId = 1

class StyleRegistry {
  static register(name, style) {
    const id = uniqueId++
    const clsName = name + '__' + id
    stylesMap[id] = style
    namesMap[clsName] = id
    return clsName
  }

  static get(clsName) {
    if (!clsName) {
      return emptyObj
    }
    const style = stylesMap[clsName]
    return style ? style : emptyObj
  }
}

export default StyleRegistry
