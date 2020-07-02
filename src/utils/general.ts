export function sortByKey<T>(array: T[], key: keyof T) {
  return array.sort((a, b) => {
      const x = a[key]
      const y = b[key]
      return ((x < y) ? -1 : ((x > y) ? 1 : 0))
  })
}

export async function asyncForEach<T>(array: T[], callback: (i: T, index: number, arr?: T[]) => void) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}