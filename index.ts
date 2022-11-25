class BigI {
  n = ''

  constructor(binary: string) {
    this.n = binary
  }

  static convert(decimal:string){
    const ten = new BigI('1010')
    const digits = Array.from(decimal).reverse().map(Number)
    let r = new BigI('0')
    for (const [i,d] of digits.entries()){
      const bigD = new BigI(d.toString(2))
      const pow = BigI.potency(ten,i)
      const totalD = BigI.multiply(pow,bigD)
      r = BigI.sum(r,totalD)

    }
    return r

  }

  static potency (bigA:BigI,b:number){
    if(b==0)return new BigI('1')
    //TODO change to bigB
    b--
      console.log('a',parseInt(bigA.n,2))
    let r = bigA
    while(b--){
      r = BigI.multiply(r,bigA)

    }
    return r
  }
  static multiply(bigA:BigI,bigB:BigI){
    let n = parseInt(bigB.n,2) //TODO cange n to bigB and -- to bigI.sub
    let r = new BigI('0')
    while(n--){
      r = BigI.sum(r,bigA)
    }
    return r

  }

  static sum(bigA: BigI, bigB: BigI) {
    const a = [...bigA.n]
    const b = [...bigB.n]
    const result = [] as string[]

    let carry = 0
    while (a.length || b.length || carry) {
      const ab = Number(a.pop() ?? 0)
      const bb = Number(b.pop() ?? 0)
      const sum = carry + ab + bb
      if (sum === 3) {
        result.push('1')
        carry = 1
        continue
      }
      if (sum === 2) {
        result.push('0')
        carry = 1
        continue
      }
      if (sum === 1) {
        result.push('1')
        carry = 0
        continue
      }
      if (sum === 0) {
        result.push('0')
        carry = 0
        continue
      }
    }

    //TODO result.reverse?
    return new BigI(result.reverse().join(''))
  }
}

function test() {
  const randomN = new Array(100)
    .fill('')
    .map(() => [
      Math.floor(Math.random() * 1000),
      Math.floor(Math.random() * 1000),
    ]).forEach(([a,b])=>testSum(a,b))
  testSum(2, 3)
  testMultiply(11,13)
  testPotency(10,0)

  function testMultiply(a:number,b:number){
    const r = BigI.multiply(new BigI(a.toString(2)),new BigI(b.toString(2))).n
    const mult = a*b
    const success = mult.toString(2) === r
    console.log('success',success)

  }
  function testPotency(a:number,b:number){
    const r = BigI.potency(new BigI(a.toString(2)),b).n
    const pow = a**b
    console.log('pow',pow,parseInt(r,2))
    const success = pow.toString(2) === r
    console.log('success',success)

  }
  testConvert('200220000000000001111111111112')

  function testConvert(n:string){
    const r = BigI.convert(n).n
    console.log('converted',r)
    const success = BigInt(n).toString(2) === r
    console.log('success',success)

  }
  function testSum(a: number, b: number) {
    const abSum = a + b
    const sum = BigI.sum(new BigI(a.toString(2)), new BigI(b.toString(2))).n
    const sumN = parseInt(sum, 2)
    const success = abSum === sumN
    if (!success) {
      console.log('a,b', a, b)
      console.log('a,b', a.toString(2), b.toString(2))
      console.log('sum', sum)
      console.log('sum', sumN)
    }
  }
}
test()
