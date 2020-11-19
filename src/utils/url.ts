import { setWith } from 'lodash'

export const queryStringToObject = (qs: string) => {
  const q = qs.slice(1)
  const res: { [key: string]: string } = {}

  q.split('&').forEach(ss => {
    const kv = ss.split('=')
    res[kv[0]] = decodeURIComponent(kv[1])
  })

  return res
}

export const simpleObjectToQueryString = (qo: object) => {
  return `?${Object.keys(qo).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(qo[k])}`).join('&')}`
}

export const genericObjectToQueryString = (qo: { [key: string]: any }) => {
  return convertKeyValueArrayToQueryString(convertObjectToKeyValueArray(qo))
}

type IKeyValueTypes = { [key: string]: boolean | string | number | IKeyValueTypes[] } 
const convertObjectToKeyValueArray = (obj: object): IKeyValueTypes[] => {
  return Object.keys(obj).map(key => {
    const value = obj[key]
    const result = {}

    if (typeof value === 'object') {
      result[key] = convertObjectToKeyValueArray(value)
    } else {
      result[key] = value
    }

    return result
  })
}

const convertKeyValueArrayToQueryString = (arr: IKeyValueTypes[], recursiveStrings?: string[], previousKeys?: string[], depth: number = 0) => {
  const resultStrings: string[] = []

  arr.forEach((keyValuePair) => {
    const key = Object.keys(keyValuePair)[0]
    const value = keyValuePair[key]

    if (value && Array.isArray(value)) {
      convertKeyValueArrayToQueryString(value, resultStrings, previousKeys ? [...previousKeys, key] : [key], depth + 1)
    } else {
      resultStrings.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
  })

  if (recursiveStrings) {
    const previousKeyString = previousKeys ? `${previousKeys.join('.')}.` : ''
    const parsedStrings = resultStrings.map((rs, i) => {
      const checkedDepthAmount = rs.split('.').length - 1
      if (depth >= (checkedDepthAmount || 0)) {
        return `${previousKeyString}${rs}`
      } else {
        return rs
      }
    })
    
    recursiveStrings.push(`${parsedStrings.join('&')}`)
    return ''
  } else {
    return `?${resultStrings.sort().join('&')}`
  }
}

export const convertFlattenedKeyValueObjectToObject = (qs: { [key: string]: boolean | string | number }): object => {
  const endObject = {}
  const partializedKeys = Object.keys(qs).map(key => key.split('.')).map(keyArr => ({ keyArr, value: qs[keyArr.join('.')] }))

  partializedKeys.forEach(kv => {
    const key = kv.keyArr.map(k => `[${k}]`).join('')
    setWith(endObject, key, kv.value, Object)
  })

  return endObject
}