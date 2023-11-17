function firstWord(s) {
  // your code here
	s = s.trim();
	let wtSp = s.indexOf(" ");
	if(wtSp == -1) {
		return s;
	}
	else {
		return s.slice(0, wtSp);
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
