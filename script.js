function volume_sphere() {
    //Write your code here
 event.preventDefault();

	let redius = document.getElementById("radius").value;
	let r = parseFloat(redius);

	if(isNaN(r) || r<0){
		document.getElementById("volume").value="NaN";
		return;
	}

	let v = (4/3)*Math.PI*Math.pow(r,3);

	document.getElementById("volume").value = v.toFixed(4);
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
