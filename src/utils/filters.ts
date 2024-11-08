export const convertToKebabCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2') // 在小寫字母和大寫字母之間插入連字符
    .toLowerCase() // 轉為小寫
}
