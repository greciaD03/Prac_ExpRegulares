console.log("EXP-REG")
const mensaje = 'Hola, soy @midudev'
const pattern = /midudev/g

pattern.test(mensaje)
pattern.lastIndex = 0
pattern.test(mensaje)
