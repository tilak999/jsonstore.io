var store = require('./index')

async function name() {
  let a = new store('3c9622697a53d8b2f3cf825dc4160f7e1aad46c1a759475edeb76bce5cd33a64')
  await a.write('hello','ok')
  await a.write('hello1','ok1')
  console.log(await a.read())
}

name()



