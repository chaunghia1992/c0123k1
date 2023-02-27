arr2: [7, 12, 6, 9, 20, 56, 89]
arr3: []
arr4: [0, 0, 0, 0, 0, 0]
function minArray(arr) {

    if (arr.length == 0)
        return -1
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = ar[i]
        }
    }
    return min;

}
let arr1 = [];
let min = minArray(arr1);
alert(min);
