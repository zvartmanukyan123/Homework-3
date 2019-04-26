function count(arr) {
		let obj = {};
	    let div = arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
	    for(let key in div){
	    	obj[key] = div[key]/arr.length;
	    }
	    return obj;
	}

	console.log(count([1,1,2,2,4]));
