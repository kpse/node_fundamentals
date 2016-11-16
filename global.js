var inFileGlobalFoo;

exports.setFoo = function (val) {
  inFileGlobalFoo = val;
}

exports.returnFoo = function () {
  return inFileGlobalFoo;
}
