#pragma strict

var gui : GUIText;
var initSize : int  = 20;
var toggle : boolean = false;



function Start(){
  yield WaitForSeconds(3);
	toggle = true; 
}

function Update()
{
	if (toggle)
	{
		InscreaseSize();
	}

}


//"get closer"
function IncreaseSize()
{
gui.fontSize = initSize++;
}
