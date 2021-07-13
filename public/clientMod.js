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
    // if (!socket.hasListeners('event')) {
    //     socket.on("event", function (msg) {
    //         if (socket.id) {
    //             console.log('event happend');
    //         }
    //     });
    // }
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
    console.log("Answers ", data);
}

const POOLS = {
    pool1: {
        actionId: "sendPoolfromSection",
        postAction: "afterPool",
        questions: {
            question1: {
                type: 'input',
                text: 'question1',
                label: 'label question1'
            },
            question2: {
                type: 'checkbox',
                text: 'select some of this',
                options: [
                    {
                        text: "option1",
                        label: 'label option1',
                        class: 'aaa'
                    },
                    {
                        text: "option2",
                        label: 'label option2',
                        class: 'bbb'
                    },
                    {
                        text: "option3",
                        label: 'label option3',
                        class: 'ccc'
                    },
                ]
                
            },
            question3: {
                type: 'radio',
                text: 'select one of this',
                options: [
                    {
                        text: "option1",
                        label: 'label option1'
                    },
                    {
                        text: "option2",
                        label: 'label option2'
                    },
                    {
                        text: "option3",
                        label: 'label option3'
                    },
                ]
                
            },
        }
    },
    pool2: {
        actionId: "sendPoolfromSection",
        postAction: "afterPool",
        questions: {
            question1: {
                type: 'input',
                inputType: 'password',
                text: 'text question1',
                label: 'label question1'
            },
            question2: {
                type: 'radio',
                text: 'select one of this options',
                options: [
                    {
                        text: "option 1",
                        label: 'label option1',
                        class: 'aaa'
                    },
                    {
                        text: "option 2",
                        label: 'label option2',
                        class: 'bbb'
                    },
                    {
                        text: "option 3",
                        label: 'label option3',
                        class: 'ccc'
                    },
                ]
                
            },
            question3: {
                type: 'checkbox',
                text: 'select some of this options',
                options: [
                    {
                        text: "option 1",
                        label: 'label option1'
                    },
                    {
                        text: "option 2",
                        label: 'label option2'
                    },
                    {
                        text: "option 3",
                        label: 'label option3'
                    },
                ]
                
            },
            question4: {
                type: 'checkbox',
                text: 'which fruit do you prefer?',
                images: true,
                options: [
                    {
                        text: "banana",
                        label: 'banana',
                        class: 'image-checkbox',
                        image: 'assets/fruits/banana.jpg',
                    },
                    {
                        text: "blueberries",
                        label: 'blueberries',
                        class: 'image-checkbox',
                        image: './assets/fruits/blueberry.jpg',
                    },
                    {
                        text: "watermelon",
                        label: 'watermelon',
                        class: 'image-checkbox',
                        image: './assets/fruits/watermelon.jpg',
                    },
                ]
                
            },
        }
    }
}
