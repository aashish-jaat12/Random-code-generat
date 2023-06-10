function  getcolor() {

	let randomnumber = Math.floor(Math.random() * 16777215);
	const randomcode ="#" + randomnumber.toString(16);
	document.body.style.backgroundColor = randomcode;
	document.getElementById("color-code").innerText=randomcode;
}
	

	//event call
document.getElementById("btn").addEventListener("click",
getcolor)

//init call
getcolor();

