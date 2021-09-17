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
    //             console.silentLog('event happend');
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
                text: '¿sabes emplear comandos de búsquedas para obtener resultados más acertados?',
                image: 'assets/fruits/banana.jpg',
                options: [
                    {
                        label: 'Conozco todos esos comandos y muchos más',
                    },
                    {
                        label: 'Conozco algunos, otros no',
                    },
                    {
                        label: 'No conocía ninguno',
                    },
                ]
            },
            question3: {
                type: 'radio',
                text: 'Hace unos meses viste un video que te encantó en twitter y quieres enseñárselo a un amigo/a ¿cómo lo buscas?',
                options: [
                    {
                        label: 'Lo tengo en una carpeta de videos en mis marcadores'
                    },
                    {
                        label: 'buscando en twitter por el tema del video para volverlo a encontrar'
                    },
                    {
                        label: 'ufff, no creo que lo vuelva a encontrar, pero se lo cuento'
                    },
                    {
                        label: 'Con las opciones de búsqueda avanzada en el buscador'
                    },
                ]
            },
            question4: {
                type: 'checkbox',
                text: 'Selecciona todas las imágenes que son falsas',
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
