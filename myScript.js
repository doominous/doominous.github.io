document.getElementById("button1").onclick = function(){
 changeStyle();
};

document.getElementById("button2").onclick = function(){
 changeStyle0();
};

onload = function(){ 
toChild();
};


function toChild(){
  let cssLink0 = document.createElement("link");
  cssLink0.href = "style.css"; 
  cssLink0.rel = "stylesheet"; 
  frames['iframe0'].document.head.appendChild(cssLink0);
  
  document.getElementById("iframe0").onload = function() {myFunction0()};
		
		function myFunction0 (){
		  frames['iframe0'].document.head.appendChild(cssLink0); 
		};
		
		
};




function changeStyle(){
  document.getElementById("change").href="style.css";
  
  let cssLink1 = document.createElement("link");
  cssLink1.href = "style.css"; 
  cssLink1.rel = "stylesheet"; 
  frames['iframe0'].document.head.appendChild(cssLink1);  
  
  		document.getElementById("iframe0").onload = function() {myFunction1()};
		
		function myFunction1 (){
		  frames['iframe0'].document.head.appendChild(cssLink1); 
		};
		
		frames['iframe0'].document.location.reload(true);
};





function changeStyle0(){
  document.getElementById("change").href="style0.css";
	
  let cssLink = document.createElement("link");
  cssLink.href = "style0.css"; 
  cssLink.rel = "stylesheet"; 
  frames['iframe0'].document.head.appendChild(cssLink);  
  
  
		document.getElementById("iframe0").onload = function() {myFunction2()};
		
		function myFunction2 (){
		  frames['iframe0'].document.head.appendChild(cssLink);  
		};
		
		frames['iframe0'].document.location.reload(true);
};