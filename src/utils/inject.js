import {STYLE_IDENTIFIER} from './consts'

const injectStyleElement = () => {
  const el = document.createElement('style')
  document.head.appendChild(el)

  el.type= 'text/css'
  el.setAttribute(STYLE_IDENTIFIER, '')
  return el
}

const getStyleElemnt = () => {
  return document.querySelector(`style[${STYLE_IDENTIFIER}]`)
}

const injectDOMStyle = (cssRules) => {
  let el = getStyleElemnt()
  if (!el) {
    el = injectStyleElement()
  }

  const styleSheet = el.sheet
  return styleSheet.insertRule(cssRules, styleSheet.cssRules.length)
}

export {injectDOMStyle, injectStyleElement, getStyleElemnt}
