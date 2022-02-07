// level {1/2/3}

// leve l
// Write a function in Javascript to print the following pattern.

// ```
//       1
//     1 2 1
//   1 2 3 2 1
// 1 2 3 4 3 2 1

let n = 5;
for (let a = 0; a < n; a++) {
  for (let b = 0; b < 2*n; b++) {
     let abs = Math.abs(n - b);
    System.out.print(abs> a ? " " : a- abs+1);
  }
  System.out.println();
  
};