let numbers = (1, 2, 3, 4, 5);

// forEach

// let result = 0;
// function showNumber(number) {
//   console.log(`sekarang nomor ${number}`);
//   result += number;
// }

// numbers.forEach(showNumber);

// console.log(result);

// let doubleNumber = []

// numbers.forEach((number) => {
//     doubleNumber.push(number*2)
// })

// map
// const doubleNumber = numbers.map((number)=>{
//  return number * 2
// })

// filter
// const candidates = [
//     {
//       name: "A",
//       score: 70,
//       expectedSallary: 500,
//       prefferedPosition: "Fullstack",
//     },
//     {
//       name: "B",
//       score: 40,
//       expectedSallary: 200,
//       prefferedPosition: "Fullstack",
//     },
//     {
//       name: "C",
//       score: 90,
//       expectedSallary: 1500,
//       prefferedPosition: "Backend",
//     },
//     {
//       name: "D",
//       score: 80,
//       expectedSallary: 700,
//       prefferedPosition: "Fullstack",
//     },
//   ];

//   const criteria = {
//     score : 70,
//     expectedSallary : 1000
//     prefferedPosition : "fullstack"
//   }

//   const passCandidates = candidates.filter((candidate)=>){
//     if(candidate.score >= criteria.score) return true;

//     return false;

//   }

//   console.log(passCandidates)

// REDUCE

const sum = numbers.reduce((prev, curr) => {
  return prev + curr;
});
