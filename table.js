/*
 * Create Html Table using Javascript and Dom
 * By: Manuel Quijano	
 * 
 *
 *
 *
 *
 */






window.onload = function () {

//--------------------------------------------------------------------------------------------------------
// Data Structure that will hold the values of the input fields of the Form
//--------------------------------------------------------------------------------------------------------
var dataStruct = {
	
	"table": document.getElementById("myTable"),
	"caption": document.getElementById("tableName"),
	"count": 1,
	"form":document.getElementById ("addData"),
	"hFontColor" :document.getElementById("hFontColor"),
	"hColor" :document.getElementById("hBG"),
	"select" :document.getElementById("selec"),
	"tdColor": document.getElementById("dBG"),
	"tdFontColor": document.getElementById ("dFontColor"),
	
}

var help = document.getElementById("help"); 

//-------------------------------------------------------------------
// Add event handlers to all inputs in the Form
//-------------------------------------------------------------------
dataStruct.hFontColor.onkeyup = changeHeaderFontColor;
dataStruct.hColor.onkeyup = changeHeaderBackgroundColor;
dataStruct.select.onclick = fillDOM;
dataStruct.tdFontColor.onkeyup = changeDataFontColor;
dataStruct.tdColor.onkeyup = changeDataBackgroundColor;

//--------------------------------------
// Add Caption to table 
//-------------------------------------
dataStruct.caption.onkeyup = function () {
	document.getElementById("myCaption").innerHTML = dataStruct.caption.value;
	
}

//------------------------------------------------------------
// This function will display the help menu
//------------------------------------------------------------
help.onclick = function () {
	var hBox = document.getElementById("helpBox");
	hBox.style.display = "block";
}

//--------------------------------------------------
// This function will hide help menu
//--------------------------------------------------
help.ondblclick = function () {
	var hBox = document.getElementById("helpBox");
	hBox.style.display = "none";
}

//-----------------------------------------------------------------------------------------------------------------------------
// This functions adds the appropiate number of input fields depending on user choice
//------------------------------------------------------------------------------------------------------------------------------
function fillDOM() {
	var val = dataStruct.select.value;
	
	var button_1;
	

	dataStruct.globalVal = val; //Change

	while (dataStruct.form.firstChild) {
		dataStruct.form.removeChild(dataStruct.form.firstChild); //change

	}
	
	if (dataStruct.count ==0)
	var text = document.createTextNode("Add Headers to Table ");
	else
	var text = document.createTextNode("Add Data to Table");
	
	dataStruct.form.appendChild (document.createElement("BR"));
	dataStruct.form.appendChild (text);
	dataStruct.form.appendChild (document.createElement("BR"));
	var inp = document.createElement("INPUT");
	inp.setAttribute ("type","text");
	inp.setAttribute ("id","input_1");

	for (var i=0;i<val;i++){	
		var inp = document.createElement("INPUT");
		inp.setAttribute ("type","text");
		inp.setAttribute ("id","input_"+i);
		dataStruct.form.appendChild(inp);
	}

	var bt = document.createElement("H3");
	

	if (dataStruct.count == 0){
		bt.innerHTML = "Build Table Headers";
		bt.onclick = addHeaders;
	}
	else{
		bt.innerHTML = "Add data to table";
		bt.onclick = addData;
	}
	
	var dv = document.createElement("DIV");
	dv.setAttribute ("id","divButt");
	//dv.style.display = "inline";
	
	var br = document.createElement("BR");
	dataStruct.form.appendChild(br);
	bt.setAttribute ("class","button");
	bt.style.margin = "10px";
	
	dv.appendChild (bt);

	
	
	dataStruct.form.appendChild(dv);
	var bt2 = document.createElement ("H3");
	bt2.innerHTML = "Delete Row";
	bt2.setAttribute ("class","button");
	bt2.onclick = deleteRow;
	dv.appendChild(bt2);
	
	
	
	

}

//-------------------------------------------------------------------------------------------------
// This function appends the appropiate headers to the table
//---------------------------------------------------------------------------------------------------	
function addHeaders () {
	
	var row = document.createElement ("TR");
	for (var i=0; i<dataStruct.globalVal; i++){ //change

		//var row = document.createElement ("TR");
		var th = document.createElement("TH");
		var text = document.createTextNode(document.getElementById("input_"+i).value);
		th.appendChild (text);
		
		th.setAttribute ("class","myTH");
		row.appendChild(th);
		
		
	}
	dataStruct.count++; //change
	dataStruct.table.appendChild(row); //change
	var select = document.getElementById("col");
	select.style.display = "none";

	fillDOM();

}

// ----------------------------------------------------------------------------------
// This function appends the appropiate data to the table
//-----------------------------------------------------------------------------------
function addData (){
	var row = document.createElement ("TR");
	for (var i=0; i<dataStruct.globalVal; i++){ //change
		var td = document.createElement("TD");
		var text = document.createTextNode(document.getElementById("input_"+i).value);
		td.appendChild (text);
		td.setAttribute ("class","myTD");
		row.appendChild (td);
		
	}
	dataStruct.count++; //change
	dataStruct.table.appendChild(row); //change

}

//----------------------------------------------------------------
// This function deletes a row in the table
//----------------------------------------------------------------
function deleteRow() {
	console.log ("Row Deleted");
	count = dataStruct.count;
	if (count == 0){
		console.log("Table Empty");
	}
	else {
		dataStruct.table.removeChild(dataStruct.table.childNodes[count+1]);  //change
		dataStruct.count--; //change
		if (dataStruct.count == 0) { //change
			var select = document.getElementById("col");
			select.style.display = "block";
			fillDOM();
		}
	}
}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 	All of the function below this point change the style of the table
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------
// The function changes the font color of the table headers
//--------------------------------------------------------------------------------------
function changeHeaderFontColor () {
	console.log ("Header Font Color Changed");
	var col = dataStruct.hFontColor.value;
	var headers = document.getElementsByTagName("th");
	
	for (var i=0; i<headers.length;i++){
		headers[i].style.color=col;
	}


}

//-------------------------------------------------------------------------------------------------------------
// This Function changes the background color of the headers of the table
//-------------------------------------------------------------------------------------------------------------
function changeHeaderBackgroundColor() {
	console.log("Header Background Color changed");
	var col = dataStruct.hColor.value;
	var headers = document.getElementsByTagName("th");
	
	for (var i=0; i<headers.length;i++){
		headers[i].style.backgroundColor=col;
		console.log("test");
	}

}

//--------------------------------------------------------------------------------------------------------
// This function changes the font color of the data in the table
//--------------------------------------------------------------------------------------------------------
function changeDataFontColor () {
	console.log("Data Font Color changed");
	var col = dataStruct.tdFontColor.value;
	//console.log (col);
	var data = document.getElementsByTagName("td");

	for (var i=0; i<data.length; i++){
		//console.log("looping");
		data[i].style.color = col;
	}
}

//--------------------------------------------------------------------------------------------------------
// This Changes the background color of data in the table
//--------------------------------------------------------------------------------------------------------
function changeDataBackgroundColor () {
	console.log ("Data Background Color Changed");
	var col = dataStruct.tdColor.value;
	var data = document.getElementsByTagName("td");

	for (var i=0; i<data.length; i++){
		data[i].style.backgroundColor=col;
	}
}


	
 


}// End of window.onload()





