function fn1(){
	const arr =[1,2,3];
	for (const el of arr){
		console.log("el="+el);
	}
}
fn1();

function fn2(){
	let i=0;
	for (let i =0; i<5; i++){
		console.log("i="+i);
	}
	console.log("ii="+i);
	
	for (var y =i; y<4; y++){
		console.log("y="+y);
	}
	console.log("yy="+y);
	
	fn3();
	
	console.log("z="+global.z);
	console.log("w="+global.w);
}

function fn3(){ 
	this.z = 'escopo global.';
	w = 'escopo global também';
}

fn2();