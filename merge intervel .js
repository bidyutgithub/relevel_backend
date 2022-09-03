function mergeIntervel(intervel) {
    if (intervel.length < 2) {
        return intervel;
    }
    intervel.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervel.length; i++) {
        current = intervel[i];  //[2,6]
        previous = intervel[i - 1];  //[1,4]
        if (current[0] <= previous[1]) {
            intervel[i] = [previous[0], Math.max(previous[1], current[1])];

            intervel.splice(i - 1, 1)   //remove one element
            i = i - 1;
        }
    }
    return intervel;
}
let arr = [[1, 4], [2, 6], [8, 10]]
console.log(mergeIntervel(arr));