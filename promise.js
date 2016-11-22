exports.foo = (opts) => {
  return new Promise((resolve, reject) => {
    if(opts == 1) {
      reject('1 is not accepted')
    } else {
      setTimeout(() => {
        console.log(opts)
        resolve(opts);
      }, 500)
    }
  })
}
