#pragma strict

var gui : GUIText;
var initSize : int  = 20;
var toggle : boolean = false;
var growthSpeed : int = 2;



function Start(){
  yield WaitForSeconds(5);
	toggle = true; 
}

function Update()
{
	if (toggle)
	{
		IncreaseSize();
	}

}


//"get closer"
function IncreaseSize()
{
initSize += growthSpeed;
gui.fontSize = initSize++;
}
