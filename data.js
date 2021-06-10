//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "hall",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Click/tap to move",
};

//miscellaneous assets to preload
module.exports.IMAGES = [
];

//miscellaneous sounds to preload
module.exports.SOUNDS = [
    ["beat1", "beat1.ogg"], //credit https://www.youtube.com/watch?v=ugLVpZm69DE
    ["beat2", "beat2.ogg"], // credit https://www.youtube.com/watch?v=dPdoxIz0w24
    ["beat3", "beat3.ogg"], //credit https://www.youtube.com/watch?v=XShEWT4MwJs
    ["DJStop", "DJStop.mp3"]
];

module.exports.ROOMS = {

    hall: {
        bg: "/barricuda/entrada-spritesheet.png",
        frames: 4,
        animations: { bg0000: [1, 4], bg0001: [5, 8], bg0010: [9, 12], bg0011: [13, 16], bg0100: [15, 20], bg0101: [19, 24], bg0110: [25, 28], bg0111: [29, 32], bg1000: [33, 36], bg1001: [37, 40], bg1010: [41, 44], bg1011: [45, 48], bg1100: [49, 52], bg1101: [53, 56], bg1110: [57, 60], bg1111: [61, 64]
        },
        frameDelay: 60,
        avatarScale: 3,
        pageBg: "#1c2016",
        area: "/barricuda/entrada-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [80, 80, 120, 98],
        areaColors: {
            //h will be replaced by #
            // #ff77a8
            hff77a8: { cmd: "enter", room: "classroom", label: "classroom", point: [10, 84], enterPoint: [118, 84], obstacle: false },
            // #ce9600
            hce9600: { cmd: "enter", room: "cave", label: "cave", point: [34, 70], enterPoint: [30, 19], obstacle: false },
            // #15ce00
            h15ce00: { cmd: "enter", room: "calle", label: "Calle Ave María", point: [112, 71], enterPoint: [64, 50], obstacle: false },
        },
        things: {
            columna: { file: "/barricuda/barri_entrada-columna.png", id: "columna", position: [53, 35], frames: 1, frameDelay: 60, visible: true },
            mesa: { file: "/barricuda/barri_entrada-mesa.png", id: "mesa", offset: 10, position: [59, 46], frames: 1, frameDelay: 60, visible: true },
            caveLight: {  file: "/barricuda/interruptor.png", label: "Interruptor", command: { cmd: "action", actionId: 'CaveLight' }, position: [14, 95], visible: true },
            hallLight: {  file: "/barricuda/interruptor.png", label: "Interruptor", command: { cmd: "action", actionId: 'HallLight' }, position: [21, 95], visible: true },
            classroomLight: {  file: "/barricuda/interruptor.png", label: "Interruptor", command: { cmd: "action", actionId: 'ClassroomLight' }, position: [7, 95], visible: true },
        }
    },
    classroom: {
        bg: "/barricuda/aula-spritesheet.png",
        frames: 4,
        animations: { bg0000: [1, 4], bg0001: [5, 8], bg0010: [9, 12], bg0011: [13, 16], bg0100: [15, 20], bg0101: [19, 24], bg0110: [25, 28], bg0111: [29, 32], bg1000: [33, 36], bg1001: [37, 40], bg1010: [41, 44], bg1011: [45, 48], bg1100: [49, 52], bg1101: [53, 56], bg1110: [57, 60], bg1111: [61, 64]
        },
        frameDelay: 60,
        avatarScale: 3,
        pageBg: "#765f52",
        area: "/barricuda/aula-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        areaColors: {
            //h will be replaced by #
            // #ff77a8
            hff77a8: { cmd: "enter", room: "hall", label: "hall", point: [118, 84], enterPoint: [20, 84], obstacle: false },
        },
        things: {
            silla1: { file: "/barricuda/sillas.png", id: "silla1", scale: 1.4, position: [10, 55], frames: 1, frameDelay: 60, visible: true },
            silla2: { file: "/barricuda/sillas.png", id: "silla2", scale: 1.6, position: [10, 65], frames: 1, frameDelay: 60, visible: true },
            silla3: { file: "/barricuda/sillas.png", id: "silla3", scale: 2, position: [10, 80], frames: 1, frameDelay: 60, visible: true },
        }
    },

    cave: {
        bg: "/barricuda/cueva-spritesheet.png",
        frames: 4,
        animations: { bg0000: [1, 4], bg0001: [5, 8], bg0010: [9, 12], bg0011: [13, 16], bg0100: [15, 20], bg0101: [19, 24], bg0110: [25, 28], bg0111: [29, 32], bg1000: [1, 4],bg1001: [5, 8],bg1010: [9, 12],bg1011: [13, 16],bg1100: [15, 20],bg1101: [19, 24],bg1110: [25, 28],bg1111: [29, 32]},
        perspective: "cuevaPerspective",
        frameDelay: 60,
        avatarScale: 5,
        pageBg: "#765f52",
        area: "/barricuda/cueva-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [68, 60, 82, 70],
        areaColors: {
            //h will be replaced by #
            // #ce7b00
            hce7b00: { cmd: "enter", room: "hall", label: "hall", point: [30, 19], enterPoint: [34, 70], obstacle: false }
        },
        things: {
            techo: { file: "/barricuda/techo-sotano.png", id: "techo", position: [0, 0], offset: 100, frames: 1, frameDelay: 60, visible: true },
        }
    }
};