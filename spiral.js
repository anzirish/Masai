function array(arr, N) {
  let result = "";

  for (let j = N - 1; j > 0; j--) {  // bottom to top
    result += arr[j][0] + " ";
  }

  for (let j = 0; j < N; j++) { // left to right
    result += arr[0][j] + " ";
  }

  for (let j = 1; j < N-1; j++) { // top to bottom
    result += arr[j][N - 1] + " ";
  }

  for(let j = N-1;j>0;j--){ // right to left
    result+=arr[N-1][j] + " "
  }

  console.log(result);
}

let arr = [
  [1, 2, 3, 4],
  [6, 7, 8, 9],
  [11, 12, 13, 14],
  [16, 17, 18, 19],
];
array(arr, 4);
