function strToFloat(text) {
  if (text.includes(',') && text.includes('.')) {
    text = text.replace('.', '')
  }
  text = text.replace(',', '.')
  text = text.replace('$', '')

  return parseFloat(text)
}

module.exports = strToFloat
