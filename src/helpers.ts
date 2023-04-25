export const getClasses = (input: { [key: string]: boolean }): string => {
  const classes: string[] = []
  Object.entries(input).forEach(([key, isTrue]) => {
    if (isTrue) classes.push(key)
  })
  return classes.join(' ')
}
