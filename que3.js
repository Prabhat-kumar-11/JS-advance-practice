function main() {
  function sayNormalFunction() {
    console.log("normal function", this);
  }

  sayNormalFunction();

  const sayArrowFunction = () => {
    console.log("arrow function", this);
  };

  sayArrowFunction();
}

main.call({ name: "Prabhat" });


// output
// normal function <ref *1> Object [global] {
//   global: [Circular *1],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 40.62610000371933,
//       nodeStart: 0.6343999952077866,
//       v8Start: 3.700200006365776,
//       bootstrapComplete: 28.02300000190735,
//       environment: 13.17399999499321,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1694247719435.616
//   },
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   }
// }
// arrow function { name: 'Prabhat' }