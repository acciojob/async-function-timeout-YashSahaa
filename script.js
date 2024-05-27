//your JS code here. If required.
let text = document.getElementById("text");
let delay = document.getElementById("delay");
let submit = document.getElementById("btn");

submit.addEventListener("click",()=>{
	setTimeout(()=>{
		let out =  document.getElementById("output");
		out.innerText = text.value;
	},delay.value)
})