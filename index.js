var datauri;
var datauri2;


function readURL(input) {
	var reader = new FileReader();
	reader.onload = function (e){
		datauri = e.target.result;
		// document.querySelector('#img1').src = e.target.result;
	}
	reader.readAsDataURL(input.files[0]);
}

function hidetext(){
	var encode = steg.encode(document.querySelector('#text').value , datauri);

	document.querySelector('#img2').src = encode;
}




function decode(input){
	var reader = new FileReader();
	reader.onload = function (e){
		datauri2 = e.target.result;
		document.querySelector('#hasil').innerHTML = steg.decode(e.target.result);
	}
	reader.readAsDataURL(input.files[0]);
}
