function getAmount(userId) {
	getUser(userId)
	.then(user => getBankBalance(user))
	.then(amount => console.log(amount));
	
	console.log('Chamou o async ES2015');
}

async function getAmount2(userId) {
	let user = await getUser(userId);
	let amount = await getBankBalance(user);
	console.log(amount);
	
	console.log('Chamou o async ES2017');
}

getAmount2('1');

function getUser(userId) {
	return new Promise (resolve => {
		setTimeout(() =>
		{resolve('John');}
		, 1000);
	});
}

function getBankBalance(user) {
	return new Promise ((resolve, reject)=> {
		setTimeout(() => {
			if (user == 'John') {
				resolve('$1,000');
			} else {
				reject('unknow user');
			}
		}, 1000);
	});
}