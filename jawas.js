let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelectorAll("#rest");
let newbtn = document.querySelectorAll("#btn");
let masContainer = document.querySelectorAll(".mass");
let masb = document.querySelectorAll("#mas");
let turnO = true;
let con =[
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[3,4,5],
	[6,7,8]
	];

const resetgame =() =>{
	turnO = true;
	eneblbox();
	mas.innerText = "";
};

boxes.forEach((box) => {
	box.addEventListener("click",() => {
		console.log("Clicked");
		if(turnO) {
			box.innerText = "o";
			turnO = false;
		}
			else{
			box.innerText = "x";
			turnO = true
			}
			box.disabled = true;
		chekWinner();
	});
});

const disbox = () =>{
	for (let box of boxes){
		box.disabled = true;
	}
};

const eneblbox = () =>{
	for (let box of boxes){
		box.disabled = false;
		box.innerText = "";
	}
};

const showWinner = (winner) =>{
	mas.innerText ="Congratulations, You Won the Match!!";
};

const chekWinner = () => {
	for ( let p of con){
		let pos1V = boxes[p[0]].innerText;
		let pos2V = boxes[p[1]].innerText;
		let pos3V = boxes[p[2]].innerText;
		
		if (pos1V != "" &&  pos2V != "" && pos3V != ""){
			if (pos1V == pos2V && pos2V == pos3V) {
				console.log("winner" , pos1V);
				showWinner(pos1V);
				disbox();
			}
		}
	}
};

rest.addEventListener("click" , resetgame);