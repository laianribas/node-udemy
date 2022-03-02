const x = 10
const y = 'Laian'
const z = [1, 2, 3]

console.log(x, y, z)

// contagem de impressões

console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

//variável entre string

console.log('O nome é %s, ele é programador', y)

//limpar console

setTimeout(() => {
    console.clear()
}, 2000)