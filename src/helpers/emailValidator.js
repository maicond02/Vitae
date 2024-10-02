export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email não pode ficar vazio."
  if (!re.test(email)) return 'Ooops! Precisamos de um endereço de e-mail válido.'
  return ''
}
