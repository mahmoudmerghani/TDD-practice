function analyzeArray(arr) {
    if (arr.length === 0) return null;

    let sum = arr[0];
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }

        sum += arr[i];
    }

    return {
        average: sum / arr.length,
        min,
        max,
        length: arr.length,
    }
}

export default analyzeArray