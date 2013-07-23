#pragma strict

var levelNumber : int = 1;

     
function OnTriggerEnter (col : Collider)
      {
          Application.LoadLevel(levelNumber); //loads level 1 when some object collides with this object's box-collider (added via the physics sub-menu)
      }
