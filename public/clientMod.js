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
    },
    pool3: {
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
            question5: {
                type: 'radio',
                text: 'Tus contraseñas…',
                options: [
                    {
                        label: 'Son algo como 1234'
                    },
                    {
                        label: 'Son algo como VTYf3bsu36@mp_34'
                    },
                    {
                        label: 'fechas, lugares o algo que tiene que ver con mi vida'
                    },
                    {
                        label: 'Uso la misma contraseña en todo, así no se me olvida'
                    },
                    {
                        label: 'No me preocupo por recordar contraseñas, tengo un gestor de contraseñas que lo hace por mi.'
                    },
                ]
            },
            question6: {
                type: 'radio',
                text: '¿Qué significa esta imagen? ',
                image: 'assets/fruits/watermelon.jpg',
                options: [
                    {
                        label: 'Es una licencia que dice que puedo usarlo siempre que diga de quién es',
                    },
                    {
                        label: 'Ni idea',
                    },
                    {
                        label: 'Es una licencia que dice que puedo usarlo sin modificarlo',
                    },
                ]
                
            },
        }
    },
}
