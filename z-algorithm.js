function findIndex(pattern, text) {
  let zString = []
  let i = 0
  for (let ch of pattern) {
    zString[i] = ch
    i++
  }
  zString[i] = '$'
  i++
  for (let ch of text) {
    zString[i] = ch
    i++
  }

  let result = []
  let zValue = calculateZ(zString)

  for (let i = 0; i < zValue.length; i++) {
    if (zValue[i] === pattern.length) {
      result.push(i - pattern.length - 1)
    }
  }
  return result
}

function calculateZ(zString) {
  let z = [0]
  let left = 0
  let right = 0
  for (let k = 1; k < zString.length; k++) {
    if (k > right) {
      left = k
      right = k
      while (right < zString.length && zString[right] === zString[right - left]) {
        right++
      }
      z[k] = right - left
      right--
    } else {
      let k1 = k - left
      if (z[k1] < right - k + 1) {
        z[k] = z[k1]
      } else {
        left = k
        while (right < zString.length && zString[right] === zString[right - left]) {
          right++
        }
        z[k] = right - left
        right--
      }
    }
  }
  return z
}

console.log(findIndex('aba', 'ababa')) // [0, 2]
