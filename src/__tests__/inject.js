import {
  injectDOMStyle,
  injectStyleElement,
  getStyleElemnt
} from '../utils/inject'

test('inject should works well', () => {
  const r = injectStyleElement()
  injectDOMStyle('p{color:white;}')
  injectDOMStyle('span{color:red;}')
  const order = injectDOMStyle('.hello{color:blue;}')

  const styles = getStyleElemnt()
  expect(styles.sheet.cssRules.length).toBe(order + 1)
  expect(styles.type).toBe('text/css')
})
