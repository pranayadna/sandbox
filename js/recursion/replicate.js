function replicate2(count, num) {
    let replicateArr = [];

    for (let i = 0; i < count; i++) {
        replicateArr.push(num);
    }

    return replicateArr;
}

function replicate(count, num) {
    let replicateArr = [];
    
    if (count === 0) {
        return [];
    } else {
        replicateArr.push(num)
        return replicateArr.concat(replicate(count - 1, num));
    }   
}

console.log(replicate(3, 5));