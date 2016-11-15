console.log('start');
process.nextTick(function(){
	console.log('next tick callback');
})
console.log('scheduled');
