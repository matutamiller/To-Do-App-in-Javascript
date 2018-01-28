/* ---------------------------------------------- /*
* Created Jan, 4 2018 by Oksana Melnyk
/* ---------------------------------------------- */

var close = document.getElementsByClassName("close");               //getting elements with the span 'close'
var i;
for (i=0; i < close.length; i++){                                   //looping through elements and hiding them onclick using function
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}	
}

var list = document.querySelector('ul');                            //creating a collection of 'ul' elements
list.addEventListener('click', function(ev){                        //adding an event onclick
	if(ev.target.tagName === 'LI'){                                 //to make an element 'checked' 
		ev.target.classList.toggle('checked');
	}
}, false);                                                          //setting default to unchecked

function newElement(){                                              //creating  a function to add new elements from the input
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if(inputValue === ''){                                         //creating warning if the input is empty
		document.getElementById("warning").innerHTML = "The field cannot be empty";
	}else{
		document.getElementById("myUL").appendChild(li);           //adding new element from the input
		document.getElementById("warning").innerHTML = "";         //showing the warm message if the input field is empty
	}
	
document.getElementById("myInput").value = "";                    //adding span element to a new created element from the input
	
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);	
	
	for (i=0; i < close.length; i++){                             // creating funtion to remove element on the 'close' click 
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
		}	
	}	
}