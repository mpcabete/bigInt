const a = 2
console.log('a\t',a.toString(2))

const b = 7
console.log('b\t',b.toString(2).padStart(a.toString(2).length,'0'))

const bSub = sub(a,b)
// console.log('bSub\t',bSub.toString(2))

const nSub = a - b
// console.log('nSub\t',nSub.toString(2))

const bSum = sum(a,b)
// console.log('bSum\t',bSum.toString(2))

const nSum = a+b
// console.log('nSum\t',nSum.toString(2))
const randomN = new Array(100).fill('').map(()=>[Math.floor(Math.random()*1000),Math.floor(Math.random()*1000)])
.map(([x,y])=>x+y===sum(x,y))
console.log('randomN',randomN)

function sum(a:number,b:number){
  let carry = 0
  let r = 0
  let location = 1
  while(a!=0 || b!=0 || carry!=0){
    let result
    const aLastBit = a&1
    const bLastBit = b&1
    const is01 = aLastBit ^ bLastBit
    if(is01){
      console.log('01')

      if(carry){
        result = 0
        carry = 1 // redundante
      }else{
        result = 1
        carry = 0
      }
    }
    const is11 = aLastBit & bLastBit
    if(is11){
      console.log('11')
      result = carry
      carry = 1
    }
    const is00 = (aLastBit|bLastBit)^1
    console.log('is00',is00)
    if(is00){
      console.log('00')
      result = carry
      carry = 0
    }
    a = a>>1
    b = b>>1
    if(result){
      r = r | location
    }
    location = location << 1


  }
    console.log('r',r)
    console.log('result',r?.toString(2))
    return r
}

function sub(a:number,b:number){
  return a & ~b
}
