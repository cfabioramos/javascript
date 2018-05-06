async function doubleAndAdd(a, b) {
	[x, w] = await Promise.all([doubleAfter1Sec(a), doubleAfter1Sec(b)]);
	console.log([a, b]);
	console.log([x, w]);
	return x + w;
}

doubleAndAdd(1,2).then(console.log);

function doubleAfter1Sec(param) {
	return new Promise(resolve => {
		setTimeout(resolve(param * 2), 1000);
	});
}
