// const powervalue=(base,exponent)=>{
//   let result=1;
//   for(let i=0;i<exponent;i++){
//     result*=base
//   }
//   return result;
// }
// console.log(powervalue(2,3));

// const transposeMatrix=(inputvalue)=>{
//   let numberofRows=inputvalue.length;
//   let numberofColums=inputvalue[0].length
//   // console.log(numberofRows,numberofColums)
//   let result=[]
//   for (let i=0;i<numberofRows;i++){
//     for(let j=0; j<numberofColums;j++){
//       if(!result[j]){
//         result[j]=[]
//       }
//       result[j][i]=inputvalue[i][j]
//     }
//   }
// return result;


// }

// console.log(transposeMatrix([ [ 3, 7 ], [ 4, 8 ], [ 5, 9 ], [ 6, 10 ] ]
// ))

const findArray=(n,values)=>{
    let result=[]
    let index=0
    for( let i=0;i<n;i++){
      result[i]=[];
      for(let j=0;j<n;j++){
        result[i][j]=values[index%values.length]
        index++;
      }
    }
    return result;
}

console.log(findArray(6,[3,4,5,6]))