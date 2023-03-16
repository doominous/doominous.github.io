document.getElementById("button1").onclick = function(){
 changeStyle();
};
document.getElementById("button2").onclick = function(){
 changeStyle0();
};

function changeStyle(){
  document.getElementById("change").href="style.css";
  
  var cssLink = document.createElement("link");
  cssLink.href = "style.css"; 
  cssLink.rel = "stylesheet"; 
  frames['iframe0'].document.head.appendChild(cssLink);  
  
  		document.getElementById("iframe0").onload = function() {myFunction()};
		
		function myFunction (){
		  var cssLink = document.createElement("link");
		  cssLink.href = "style.css"; 
		  cssLink.rel = "stylesheet"; 
		  frames['iframe0'].document.head.appendChild(cssLink); 
		  
		  
		};
	frames['iframe0'].document.location.reload(true);
};




function changeStyle0(){
  document.getElementById("change").href="style0.css";
	
  var cssLink = document.createElement("link");
  cssLink.href = "style0.css"; 
  cssLink.rel = "stylesheet"; 
  frames['iframe0'].document.head.appendChild(cssLink);  
  
  
		document.getElementById("iframe0").onload = function() {myFunction()};
		
		function myFunction (){
		  var cssLink = document.createElement("link");
		  cssLink.href = "style0.css"; 
		  cssLink.rel = "stylesheet"; 
		  frames['iframe0'].document.head.appendChild(cssLink);  
		  
		};
};


