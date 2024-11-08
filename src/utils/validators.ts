// 長度驗證規則
export const lengthValidator = (
  value: string,
  min: number,
  max: number,
  hint: string
) => {
  return (value.length >= min && value.length <= max) || hint
}

// 必填驗證規則
export const requiredValidator = (value: string, hint: string) => {
  return value.length > 0 || hint
}

// 電子郵件驗證規則
export const emailValidator = (value: string, hint: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || hint
}

// 密碼驗證規則
export const passwordValidator = (value: string, hint: string) => {
  return (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      value
    ) || hint
  )
}

// 電話驗證規則
export const phoneValidator = (value: string, hint: string) => {
  return /^\d{10}$/.test(value) || hint
}
