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
    console.log('use memo')
  }

  if (s1[i1] === s2[i2]) {
    let result = s1[i1] + lcs_rec(s1, s2, i1 + 1, i2 + 1, memo)
    memo[`${i1 + 1}-${i2 + 1}`]
    return result
  }

  let resultA = lcs_rec(s1, s2, i1 + 1, i2, memo)
  let resultB = lcs_rec(s1, s2, i1, i2 + 1, memo)

  memo[`${i1 + 1}-${i2}`] = resultA
  memo[`${i1}-${i2 + 1}`] = resultB

  return resultA.length > resultB.length ? resultA : resultB
}

lcs('ABCDEF', 'ACDFEG') // returns ACDE
