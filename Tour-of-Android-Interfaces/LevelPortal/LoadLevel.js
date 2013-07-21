#pragma strict
     
function OnTriggerEnter (col : Collider)
      {
          Application.LoadLevel(1); //loads level 1 when some object collides with this object's box-collider (added via the physics sub-menu)
      }
