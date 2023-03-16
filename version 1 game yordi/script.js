window.onload = function () {
	let money = 0;
	let moneyclock = setInterval(getMoney, 500);
	let honger = 100;
	let Training = 100;
	let clock2 = setInterval(depleteT, 360);
	let Vrolijk = 100;
	let clock3 = setInterval(depleteV, 370);
	let ElementalBurst = false;
	let gameover = 0;

	document.querySelector("BtnHonger") = fillHonger;
	document.querySelector("BtnTraining") = fillTraining;
	document.querySelector("BtnVrolijk") = fillVrolijk;

	document.querySelector("item1") = AdeptusTemptationEffect;
	document.querySelector("item2") = KoopeenwapenEffect;
	document.querySelector("item3") = KoopantidepressivaEffect;
	document.querySelector("item4") = ElementalBurst

	function CynoHandler() {
	}

	let clock1 = setInterval(depleteH, 350);

	function getMoney() {
		if (honger > 0 && Training > 0 && Vrolijk > 0) {
			document.querySelector("MoneyValue").value = money;
			money++;
		}
	}

	function gameovercheck() {
		if (honger == 0 && Training == 0 && Vrolijk == 0 && gameover == 0) {
			alert("Game Over!");
			gameover++;
			CynoHandler();
		}
		else {
			CynoHandler();
		}
	}

	function AdeptusTemptationEffect() {
		if (honger == 0 && money >= 150 && gameover == 0) {
			money -= 150;
			honger += 50;
			clock1 = setInterval(depleteH, 350);
			depleteH();
			CynoHandler();
		}
	}

	function KoopeenwapenEffect() {
		if (Training == 0 && money >= 200 && gameover == 0) {
			money -= 200;
			Training += 50;
			clock2 = setInterval(depleteT, 360);
			depleteT();
			CynoHandler();
		}
	}

	function KoopantidepressivaEffect() {
		if (Vrolijk == 0 && money >= 300 && gameover == 0) {
			money -= 300;
			Vrolijk += 50;
			clock3 = setInterval(depleteV, 370);
			depleteV();
			CynoHandler();
		}
	}

	function ElementalBurst() {
		if (ElementalBurst == false && money >= 1000) {
			money -= 1000;
			ElementalBurst = true;
			CynoHandler();
			clearInterval(clock1);
			clearInterval(clock2);
			clearInterval(clock3);
			clearInterval(moneyclock);
			alert("Gefeliciteerd! jij hebt Cyno tot de krijger gemaakt die hij is!");
		}
	}

	function fillHonger() {
		if (honger <= 99 && honger != 0) {
			honger += 2;
		}
		else if (honger == 0) {
			honger += 0;
		}
	}

	fillHonger()

	function fillTraining() {
		if (Training <= 99 && Training != 0) {
			Training += 2;
		}
		else if (Training == 0) {
			Training += 0;
		}
	}

	function fillVrolijk() {
		if (Vrolijk <= 99 && Training != 0) {
			Vrolijk += 2;
		}
		else if (Vrolijk == 0) {
			Vrolijk += 0;
		}
	}

	function depleteH() {
		if (honger == 0) {
			clearInterval(clock1);
			alert("Cyno verhongerd!");
			gameovercheck();
		}
		else {
			honger--;
			document.querySelector("HongerBar").value = honger;
		}
	}

	function depleteT() {
		if (Training == 0) {
			clearInterval(clock2);
			alert("Cyno verveelt zich te erg!");
			gameovercheck();
		}
		else {
			Training--;
			document.querySelector("TrainingBar").value = Training;
		}
	}

	function depleteV() {
		if (Vrolijk == 0) {
			clearInterval(clock3);
			alert("Cyno is depressief!");
			gameovercheck();
		}
		else {
			Vrolijk--;
			document.querySelector("VrolijknBar").value = Vrolijk;
		}
	}

}


