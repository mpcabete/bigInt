// const buffer = new ArrayBuffer(8)
// console.log('buffer',buffer)
// const int8 = new Uint8Array(buffer)
// const int16 = new Uint16Array(buffer)
// int16[0] = 253
// const int32 = new Uint32Array(buffer)
// int32[0] = 65536
//
// console.log('buffer',buffer)
// const binary8 = Array.from(int8).map((x:number)=>x.toString(2).padStart(8,'0')).reverse().join('')
// const binary16 = Array.from(int16).map((x:number)=>x.toString(2).padStart(16,'0')).reverse().join('')
// console.log('binary8',binary8)
// console.log('binary6',binary16)
//
// console.log('int16',int16)
// console.log('int32',int32)
import  chalk  from 'chalk'
for(let i = 0;i<200;i++){
  const binary = (BigInt(10)**BigInt(i)).toString(2)
  const binaryColor = Array.from(binary).map(x=>x=='0'?chalk.red('██'):chalk.green('██')).slice(0,450).join('')
  console.log('10^'+i,binaryColor)
}
