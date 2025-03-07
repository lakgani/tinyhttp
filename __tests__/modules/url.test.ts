import { getQueryParams, getURLParams } from '../../packages/url/src'
import { parse } from 'url'
import rg from 'regexparam'

describe('getQueryParams(url)', () => {
  it('parses query params the same way as url.parse(str, true)', () => {
    const str = '/hello?world=42'

    expect(getQueryParams(str)).toEqual(parse(str, true).query)
  })
})

describe('getURLParams(reqUrl, url)', () => {
  it('returns empty object if none matched', () => {
    const reqUrl = '/'

    const regex = rg('/:a/:b')

    expect(getURLParams(regex, reqUrl)).toStrictEqual({})
  })
  it('parses URL params and returns an object with matches', () => {
    const reqUrl = '/hello/world'

    const regex = rg('/:a/:b')

    expect(getURLParams(regex, reqUrl)).toStrictEqual({
      a: 'hello',
      b: 'world'
    })
  })
})
