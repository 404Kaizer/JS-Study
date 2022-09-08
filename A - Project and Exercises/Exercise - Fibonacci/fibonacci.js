let left = 0
let mid = 1
let right = 1

console.log(left)
console.log(mid)
console.log(right)

function getSequence() {
    
    while(right <= 5000000) {
        left = mid + right
        console.log(left)
        mid = right
        right = left
    }
}

getSequence()