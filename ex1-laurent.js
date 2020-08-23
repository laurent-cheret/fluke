const arr = [
    1,
    4,
    3,
    3,
    4,
    1,
    5,
    2,
    2,
    23,
    23,
    54,
    11,
    54,
    5,
    7,
    9,
    11,
    9
]

findSingleNumber = function (array) {
    let sortedArr = array
    //pega o array e ordena ele de forma que números iguais estejam em posições consecutivas
    sortedArr.sort()
    let size = sortedArr.length
    console.log(array)
    //varre o array ordenado e verifica se o elemento na posição i é igual ao elemento da posição seguinte (i+1) e anterior (i-1)
    for (i = 0; i <= size - 1; i++) {
        if (i == 0) {
            if (sortedArr[i] != sortedArr[i + 1]) {
                console.log(`O elemento único é ${sortedArr[i]}`)
                return
            }
        }
        else {
            if (sortedArr[i] != sortedArr[i + 1] && sortedArr[i] != sortedArr[i - 1]) {
                console.log(`O elemento único é ${sortedArr[i]}`)
                return
            }
        }
    }
}
findSingleNumber(arr)
