#pragma strict

var speed: int = 50;
var toggle: boolean = false;

function Start () {
  yield WaitForSeconds(5);
	toggle = true;
	yield WaitForSeconds(1); 
	Application.LoadLevel(1);
}

function Update () {
	if (toggle)
	{
	moveForward();	
	}
}

//Function that encapsulates moving forward
function moveForward() {
        transform.Translate(Vector3.forward * Time.deltaTime*speed);
}
