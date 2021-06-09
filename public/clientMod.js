/*
WARNING: THIS IS STILL EXPERIMENTAL STUFF
I want to have the ability to assign specific behaviors to each room without messing with the main engine
So this is a file for client-side modifications (mods). There is one for the server side as well.
Their naming convention is roomIdFunction.
The functions are called by the engine at crucial points, only if they exist. 
*/

//when my players joins the game for the first time, after everything in the room is initialized
//called also for lurk mode (nickName == "")

// BARRICUDA functions

function cuevaPerspective(sprite) {
    let s;
    let pos = round(sprite.position.y + sprite.depthOffset);
    if (pos < 117) {
        s = map(sprite.depth, 0 , 116, 1, 3);
    } else {
        s = map(sprite.depth, 117 , height, 3, 10);
    }
    return s;
}