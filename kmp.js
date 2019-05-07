function KMP(pattern, text) {
  let lps = computeLPS(pattern)
  let i = 0
  let j = 0

  while (i < text.length && j < pattern.length) {
    if (text[i] === pattern[j]) {
      i++
      j++
    } else {
      if (j === 0) {
        i++
      } else {
        j = lps[j - 1]
      }
    }
  }

  return j === pattern.length
}

function computeLPS(pattern) {
  if (pattern.length === 0) return []

  let lps = []
  lps[0] = 0

  let i = 1
  let j = 0

  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      lps[i] = j + 1
      j++
      i++
    } else {
      if (j === 0) {
        lps[i] = 0
        i++
      } else {
        j = lps[j - 1]
      }
    }
  }

  return lps
}

console.log(KMP('aba', 'abcaba')) // true
