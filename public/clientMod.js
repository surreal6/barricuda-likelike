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

function initMod(playerId, roomId) {
    print("Mod: " + players[playerId].nickName + " (you) joined the game at " + roomId);

    // add custom client listeners HERE

    // //prevent duplicate listeners
    if (!socket.hasListeners('loopMusic')) {
        socket.on("loopMusic", function (music) {
            loopMusic(music);
        });

        socket.on("polcaToggle", function (music) {
            if (SOUNDS["polca"]._playing) {
                loopMusic("intro");
            } else {
                loopMusic("polca");
            }

            
        });
    }
}

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

function afterPool(data) {
    console.silentLog("Answers ", data);
}

function desiertoPerspective(sprite) {
    let s;
    let pos = round(sprite.position.y + sprite.depthOffset);
    if (pos < 35) {
        s = map(sprite.depth, 0 , 34, 0.1, 0.2);
    } else {
        s = map(sprite.depth, 35 , height, 0.1, 3);
    }

    return s;
}


const POOLS = {
    pool: {
        actionId: "sendPoolfromSection",
        postAction: "afterPool",
        questions: {
            question1: {
                type: 'checkbox',
                text: 'Select some fruits',
                images: true,
                options: [
                    {
                        label: 'banana',
                        image: 'assets/fruits/banana.jpg',
                    },
                    {
                        label: 'blueberries',
                        image: './assets/fruits/blueberry.jpg',
                    },
                    {
                        label: 'watermelon',
                        image: './assets/fruits/watermelon.jpg',
                    },
                ]
            },
            question2: {
                type: 'radio',
                text: 'What fruit is this?',
                image: 'assets/fruits/banana.jpg',
                options: [
                    {
                        label: 'banana',
                    },
                    {
                        label: 'blueberries',
                    },
                    {
                        label: 'watermellon',
                    },
                ]
            },
            question3: {
                type: 'radio',
                text: 'Can you answer questions without images?',
                options: [
                    {
                        label: 'Yes'
                    },
                    {
                        label: 'of course yes'
                    },
                    {
                        label: 'of course no'
                    },
                    {
                        label: 'no'
                    },
                ]
            },
            question4: {
                type: 'checkbox',
                text: 'Can you draw inside the images?',
                images: true,
                options: [
                    {
                        text: "banana",
                        label: 'banana',
                        image: 'assets/fruits/banana.jpg',
                    },
                    {
                        text: "blueberries",
                        label: 'blueberries',
                        image: './assets/fruits/blueberry.jpg',
                    },
                    {
                        text: "watermelon",
                        label: 'watermelon',
                        image: './assets/fruits/watermelon.jpg',
                    },
                ]
            },
        }
    },
}
