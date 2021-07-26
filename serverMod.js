/*
WARNING: THIS IS STILL EXPERIMENTAL STUFF
I want to have the ability to assign specific behaviors to each room without messing with the main engine
So I'm creating a module for server-side modifications (mods). There is one also for the client.
Their naming convention is roomIdFunction.
The functions are called by the engine at crucial points, only if they exist.
*/

//called at the beginning
module.exports.initMod = function (io, gameState, DATA) {
    console.silentLog("MOD: Initialized");

    //EVERYTHING GLOBALLLLL
    global.gameState = gameState;
    global.io = io;
    global.DATA = DATA;

    // lightState on and off 
    // projector, hall ,class, cave
    global.lightState = [0, 0, 0, 0];

    //global function ffs
    global.random = function (min, max) {
        return Math.random() * (max - min) + min;
    }

    // this turns on and off the projector every minute
    // setInterval(function () {
    //     global.lightState[0] =  global.lightState[0] === 1 ? 0 : 1;
    //     // emit change to all clients
    //     io.sockets.emit('changeBgAnim', 'bg' + global.lightState.join(""))
    // }, 60 * 1000); //every minute changes

    global.VIPList = [];

    global.roomStates = {
        cave: {
            talk: false,
            talkCounter: 0
        }
    }

    global.truffautTalk = [
        "Soy François Truffaut",
        "me conoceras por...",
        "los 400 golpes, la nouvelle vague,",
        "y toda esa mandanga.",
        "Está chulo esto,",
        "Es un buen sitio...",
        "para una sala de montaje.",
        "aquí cabrían muchas mesas",
        "Y hackintosh con FCP",
        "y con premiere",
        "premiere es igual de malo que FCP",
        "esto de aventuras visuales esta muy bien",
        "¿se puede uno apuntar?",
        "Una vez comiendo con Hitch",
        "le dije la frase de Jan Desmut:",
        "<<El equipo que come unido...",
        "permanece unido.>>",
        "y que eso luego se nota en las pelis.",
        "¿sabes lo que me contesto?",
        "que el espectador es gilipollas",
        "¿como te quedas?",
        "con moita calma, eso le dije a Hitch",
        "bueno, vamos a lo que vamos...",
        "pospo a tope!!!",
        "¿que nos impide?",
        "tal vez la impresora, que no funciona.",
        "¿que donde están las llaves? ",
        "en el viriato, me han dicho",
        "no se lo que es",
        "creo que es la Jane d'arc zamorana",
        "pero no se como salir de aquí",
        "ahora, si me permites",
        "tengo que hacer una introspección."
    ];

    global.increaseTalkCounter = function() {
        global.roomStates['cave'].talkCounter++;
        if (global.roomStates['cave'].talkCounter > global.truffautTalk.length - 1) {
            global.roomStates['cave'].talkCounter = 0;
            global.roomStates['cave'].talk = false;
        }
    }

    global.resetTruffaut = function() {
        global.roomStates['cave'].talk = false;
        global.roomStates['cave'].talkCounter = 0;
        global.roomStates['cave'].followPlayer = false;
    }

    //Example of NPC creation and behavior
    var truffaut = new NPC(
        {
            id: "truffaut",
            nickName: "truffaut",
            room: "cave",
            x: 23,
            y: 189,
            avatar: 1,
            colors: [2, 2, 1, 5],
            labelColor: "#1e839d"
        });

    
    truffaut.behavior = setTimeout(function ramble() {
        var dice = random(0, 100);
        var talkCounter = global.roomStates['cave'].talkCounter;
        var talk = global.roomStates['cave'].talk;
    
        if (dice < 70) {
            if (talk) {
                truffaut.talk(global.truffautTalk[talkCounter]);
                global.increaseTalkCounter();
                truffaut.behavior = setTimeout(ramble, random(2000, 3000));
            } else {
                truffaut.move(random(10, 90) * 2, random(70, 78) * 2);
                truffaut.behavior = setTimeout(ramble, random(2000, 3000));
            }
        } else if (dice < 90) {
            truffaut.move(random(10, 90) * 2, random(70, 98) * 2);
            truffaut.behavior = setTimeout(ramble, random(2000, 3000));
        } else {
            truffaut.behavior = setTimeout(ramble, random(2000, 3000));
        }
    }, random(2000, 3000));
}

// the cave uses the VIPRoom rules in original likelike
module.exports.caveJoin = function (playerObject, roomId) {
    // console.silentLog(playerObject.nickName + " enters the VIP room");
    //...
    this.setLightState();

    setTimeout(function() {
        global.gameState.NPCs['truffaut'].talk('Hola aventurero');
        setTimeout(function() {
            global.roomStates['cave'].talk = true;
        }, 1000)
    }, 1000)
    
    global.VIPList.push(playerObject.id);
    if (global.VIPList.length > 2) {
        var expelled = global.VIPList.shift();

        //force leave
        if (io.sockets.sockets[expelled] != null) {
            this.transferPlayer(expelled, "cave", "hall", 34 * 2, 70 * 2);
            io.to(expelled).emit('godMessage', "Sorry, we had to expel you to make room for " + playerObject.nickName);
        }

    }

    if (global.VIPList.length === 1) {
        global.resetTruffaut();
    }

}

// the cave uses the VIPRoom rules in original likelike
module.exports.caveIntro = function (newComerId, introObj) {
    //the problem with the auto expulsion in cave is that the intro is sent before it's the other person is expelled
    //so the intros arrive too late creating ghosts.
    //since the server has the real list I can override the intro after the fact and expel the ghost. Ugly but necessary.

    // console.silentLog("Obsolete intro? " + gameState.players[introObj.id].room);

    this.setLightState();

    if (gameState.players[introObj.id].room != "Cave")
        io.to("Cave").emit("playerLeft", { id: introObj.id, room: "Cave", disconnect: false });

}

//force change room
module.exports.transferPlayer = function (playerId, from, to, x, y) {
    console.silentLog(playerId + " is transfered to " + to);

    var s = io.sockets.sockets[playerId];
    var p = gameState.players[playerId];

    if (s != null)
        if (p.room != null) {

            //var from = p.room;
            s.leave(from);
            s.join(to);

            //broadcast the change to everybody in the current room
            //from the client perspective leaving the room is the same as disconnecting
            io.to(from).emit("playerLeft", { id: playerId, room: from, disconnect: false });

            //same for joining, sending everybody in the room the player state

            p.room = to;
            p.x = p.destinationX = x;
            p.y = p.destinationY = y;
            p.new = false;


            //check if there is a custom function in the MOD to call at this point
            if (this[from + "Leave"] != null) {
                //call it!
                this[from + "Leave"](p, from);
            }

            io.to(to).emit("playerJoined", p);


            //check if there is a custom function in the MOD to call at this point
            if (this[to + "Join"] != null) {
                //call it!
                this[to + "Join"](p, to);
            }

            //check if there are NPCs in this room and make them send info to the player
            for (var NPCId in gameState.NPCs) {
                var npc = gameState.NPCs[NPCId];

                if (npc.room == to) {
                    npc.sendIntroTo(playerId);
                }
            }

        }
}

//if a player leaves the room on their own accord make sure they are removed from the list as well
module.exports.caveLeave = function (playerObject, roomId) {
    //console.silentLog(playerObject.nickName + " exits the VIP room");

    var index = global.VIPList.indexOf(playerObject.id);
    if (index !== -1) {
        global.VIPList.splice(index, 1);
    }

    if (global.VIPList.length === 1) {
        global.resetTruffaut();
    }

}


module.exports.hallJoin = function(player, roomId) {
    // console.silentLog("MOD: " + player.nickName + " entered room " + roomId);
    this.setLightState();
}


module.exports.classroomJoin = function(player, roomId) {
    // console.silentLog("MOD: " + player.nickName + " entered room " + roomId);
    this.setLightState();
}


// LIGHTS

module.exports.onHallLight = function (pId) {
    // console.silentLog('switch hall');
    global.lightState[1] = global.lightState[1] ? 0 : 1 
    this.setLightState();
}

module.exports.onClassroomLight = function (pId) {
    // console.silentLog('switch classroom');
    global.lightState[2] = global.lightState[2] ? 0 : 1 
    this.setLightState();
}

module.exports.onCaveLight = function (pId) {
    // console.silentLog('switch cave');
    global.lightState[3] = global.lightState[3] ? 0 : 1 
    this.setLightState();
}


//
module.exports.setLightState = function (pId) {
    // emit to all clients
    io.sockets.emit('changeBgAnim', 'bg' + global.lightState.join(""));
}

module.exports.onMedvedkin = function (pId) {
    global.lightState[0] =  global.lightState[0] === 1 ? 0 : 1;
    // emit change to all clients
    io.sockets.emit('changeBgAnim', 'bg' + global.lightState.join(""))
}

