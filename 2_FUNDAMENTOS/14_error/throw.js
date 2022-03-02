const x = '10'

if (!Number.isInteger(x)) {
    throw new Error('x must be an integer')
}

console.log(x)