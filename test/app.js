let promise = new Promise(
  function(resolve, reject) {
    console.log('Promise', resolve)
    resolve(45)
  }
)

promise.then((value) => {
  setTimeout(function() {
    console.log('SetTimeOut Promise')
  }, 0)
})
setTimeout(function() {
  console.log('SetTimeOut')
}, 0)

console.log('No promise')
