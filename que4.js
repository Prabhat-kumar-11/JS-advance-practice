let developers_array = [
  { first: "John", last: "Doe", dept: "FE", commits: 10 },
  { first: "Jane", last: "Doe", dept: "FE", commits: 15 },
  { first: "James", last: "Bond", dept: "BE", commits: 20 },
];

// output
// {FE:true,
//   BE:true,
// }

const result = developers_array.reduce((acc, item) => {
  acc[item.dept] = true

  return acc
}, {});


console.log(result)