function array(arr, N, M){



    for(let i = 0;i<N;i++){
        let result = ""
        for(let j = 0;j<M;j++){
            result +=(i+j)+" "
        }
        console.log(result)
    }
}

let arr = [[1, 2], [3, 4], [5, 6]]
array(arr, 3, 2)