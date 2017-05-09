import StyleSheet from '../StyleSheet'

describe('StyleSheet', () => {
  it('create', () => {
    const styles = StyleSheet.create({
      a: {
        backgroundColor: 'red',
      },
      b: {
        height: 16,
      }
    })
    expect(styles).toEqual({a: 'a__1', b: 'b__2'})
  })
})
