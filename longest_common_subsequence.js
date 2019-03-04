function lcs(s1, s2) {
  let memo = {}
  return lcs_rec(s1, s2, 0, 0, memo)
}

function lcs_rec(s1, s2, i1, i2, memo) {
  if (i1 === s1.length || i2 === s2.length) {
    return ''
  }

  let key = `${i1}-${i2}`
  if (memo[key]) {
    return memo[key]
  }

  if (s1[i1] === s2[i2]) {
    let result = s1[i1] + lcs_rec(s1, s2, i1 + 1, i2 + 1, memo)
    let key = `${i1 + 1}-${i2 + 1}`
    memo[key]
    return result
  }

  let resultA = lcs_rec(s1, s2, i1 + 1, i2, memo)
  let resultB = lcs_rec(s1, s2, i1, i2 + 1, memo)
  
  let keyA = `${i1 + 1}-${i2}`
  let keyB = `${i1}-${i2 + 1}`
  memo[keyA] = resultA
  memo[keyB] = resultB

  return resultA.length > resultB.length ? resultA : resultB
}

lcs('ABCDEF', 'ACDFEG') // returns ACDE
