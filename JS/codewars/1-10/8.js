/*
Task
You will be given an array of numbers. You have to sort the odd numbers 
in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(arr) {
    let temp
    let k

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] % 2 == 0)
                continue
            else { 
                k = i + 1
                while (arr[k] % 2 == 0)
                    k++
                if (arr[i] > arr[k]) {
                    temp = arr[k]
                    arr[k] = arr[i]
                    arr[i] = temp
                }
            }
        }
    }
    return arr
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
arr = sortArray(arr)
console.log(arr)
