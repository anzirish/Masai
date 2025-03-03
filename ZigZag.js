function array(arr, N, M) {
  let result = "";
  for (let i = 0; i < N; i++) {

    if (i % 2 === 0) {
      for (let k = M - 1; k >= 0; k--) {
        result += arr[i][k] + " ";
      }
    } else {
      for (let j = 0; j < M; j++) {
        result += arr[i][j] + " ";
      }
    }
  }

  console.log(result);
}

let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
array(arr, 4, 5);
