//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "desierto",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Click/tap to move",
};

//miscellaneous assets to preload
module.exports.IMAGES = [
];


//miscellaneous sounds to preload
// music cc-by-nc Dragan Espenschied https://freemusicarchive.org/music/Dragan_Espenschied#contact-artist
module.exports.SOUNDS = [
    ["intro", "Dragan Espenschied - Iced Earth.mp3"],
    ["polca", "Dragan Espenschied - Procrastination Polka.mp3"],
    ["zombie", "Dragan Espenschied - Zombie & Mummy Theme.mp3"]
];

module.exports.ROOMS = {
    hall: {
        bg: "/rooms/entrada-spritesheet.png",
        frames: 4,
        animations: { 
            bg0000: [0, 4], 
            bg0001: [4, 4], 
            bg0010: [8, 4], 
            bg0011: [12, 4], 
            bg0100: [16, 4], 
            bg0101: [20, 4], 
            bg0110: [24, 4], 
            bg0111: [30, 4], 
            bg1000: [32, 4], 
            bg1001: [36, 4], 
            bg1010: [40, 4], 
            bg1011: [44, 4], 
            bg1100: [48, 4], 
            bg1101: [52, 4], 
            bg1110: [56, 4], 
            bg1111: [60, 4],
        },
        frameDelay: 60,
        avatarScale: 3,
        pageBg: "#1c2016",
        area: "/rooms/entrada-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [80, 80, 120, 98],
        areaColors: {
            //h will be replaced by #
            // #ff77a8
            hff77a8: { cmd: "enter", room: "classroom", label: "classroom", point: [10, 84], enterPoint: [118, 87], obstacle: false },
            // #ce9600
            hce9600: { cmd: "enter", room: "cave", label: "cave", point: [34, 70], enterPoint: [30, 19], obstacle: false },
            // #15ce00
            h15ce00: { cmd: "enter", room: "calle", label: "Calle Ave María", point: [112, 71], enterPoint: [64, 50], obstacle: false },
            // #00ffff
            h00ffff: { cmd: "action", label: "classroom switch", point: [43, 70], actionId: 'ClassroomLight', obstacle: false },
            // #ff00ff
            hff00ff: { cmd: "action", label: "cave switch", point: [47, 70], actionId: 'CaveLight', obstacle: false },
            // #ffff00
            hffff00: { cmd: "action", label: "hall switch", point: [51, 70], actionId: 'HallLight', obstacle: false },
            // #0066ff
            h0066ff: { cmd: "text", label: "La Barricuda", point: [88, 63], iframe: false, txt: 'La Barricuda fue la escuela de\ncreación audiovisual del colectivo\nAventuras Visuales de 2006 a 2009', lines: 3, url: "https://labarricuda.blogspot.com/2006/10/instalaciones.html", obstacle: false }
        },
        things: {
            columna: { file: "/rooms/barri_entrada-columna.png", id: "columna", position: [53, 35], frames: 1, frameDelay: 60, visible: true },
            mesa: { file: "/rooms/barri_entrada-mesa.png", id: "mesa", offset: 10, position: [59, 46], frames: 1, frameDelay: 60, visible: true, label: "Cursos y talleres", command: { cmd: "text", iframe: false, txt: "En este local se realizaron cursos y talleres de practicamente todas las disciplinas cinematográficas", align: "left", lines: 3, url: "https://labarricuda.blogspot.com/2006/10/presentacin.html", point: [82, 75] } },
            // survey: { file: "/rooms/interruptor.png", id: "poolswitch", frames: 1, frameDelay: 60, visible: true, label: "survey sample", position: [124, 68], command: { cmd: "text", txt:"texto", lines: 1, point: [110, 79], pool: "pool", section: 'pool-section', obstacle: false } },
            examen: { file: "/rooms/examen.png", id: "examen", label: "examen", scale: 1, offset: 25, position: [35, 75], frames: 1, frameDelay: 60, visible: true, command: { cmd: "text", txt: "Examen", lines: 2, pool: "pool", section: "pool-section", label: "encuesta", point: [57, 78], obstacle: false } }
        }
    },
    classroom: {
        bg: "/rooms/aula-spritesheet.png",
        frames: 4,
        animations: { 
            bg0000: [0, 4], 
            bg0001: [4, 4], 
            bg0010: [8, 4], 
            bg0011: [12, 4], 
            bg0100: [16, 4], 
            bg0101: [20, 4], 
            bg0110: [24, 4], 
            bg0111: [30, 4], 
            bg1000: [32, 4], 
            bg1001: [36, 4], 
            bg1010: [40, 4], 
            bg1011: [44, 4], 
            bg1100: [48, 4], 
            bg1101: [52, 4], 
            bg1110: [56, 4], 
            bg1111: [60, 4],
        },
        frameDelay: 60,
        avatarScale: 3,
        pageBg: "#765f52",
        area: "/rooms/aula-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [14, 84, 119, 92],
        areaColors: {
            //h will be replaced by #
            // #ff77a8
            hff77a8: { cmd: "enter", room: "hall", label: "hall", point: [118, 87], enterPoint: [20, 84], obstacle: false },
            // #0066ff
            h0066ff: { cmd: "text", iframe: true, label: "Cortometrajes", point: [62, 67], txt: 'Entre 2003 y 2009 los aventureros visuales realizaron casi un centenar de cortometrajes y piezas audiovisuales', lines: 4, url: "https://www.youtube.com/embed/videoseries?list=PLFF29FEE8F9D192C9", obstacle: false },
            // #00ff00
            h00ff00: { cmd: "action", label: "Medvedkin", actionId: "Medvedkin", point: [84, 69], obstacle: false },
        },
        things: {
            silla1: { file: "/rooms/sillas2.png", id: "silla1", scale: 1.4, position: [10, 55], frames: 1, frameDelay: 60, visible: true },
            silla2: { file: "/rooms/sillas.png", id: "silla2", scale: 1.6, position: [10, 65], frames: 1, frameDelay: 60, visible: true },
            silla3: { file: "/rooms/sillas.png", id: "silla3", scale: 2, position: [10, 80], frames: 1, frameDelay: 60, visible: true },
        }
    },
    cave: {
        bg: "/rooms/cueva-spritesheet.png",
        frames: 4,
        animations: { 
            bg0000: [0, 4], 
            bg0001: [4, 4], 
            bg0010: [8, 4], 
            bg0011: [12, 4], 
            bg0100: [16, 4], 
            bg0101: [20, 4], 
            bg0110: [24, 4], 
            bg0111: [30, 4], 
            bg1000: [0, 4], 
            bg1001: [4, 4], 
            bg1010: [8, 4], 
            bg1011: [12, 4], 
            bg1100: [16, 4], 
            bg1101: [20, 4], 
            bg1110: [24, 4], 
            bg1111: [30, 4],
        },
        perspective: "cuevaPerspective",
        frameDelay: 60,
        avatarScale: 5,
        pageBg: "#765f52",
        area: "/rooms/cueva-areas.png",
        tint: "#fdeac8",
        bubblesY: 14,
        spawn: [68, 60, 82, 70],
        areaColors: {
            //h will be replaced by #
            // #ce7b00
            hce7b00: { cmd: "enter", room: "hall", label: "hall", point: [30, 19], enterPoint: [34, 70], obstacle: false }
        },
        things: {
            techo: { file: "/rooms/techo-sotano.png", id: "techo", position: [0, 0], offset: 100, frames: 1, frameDelay: 60, visible: true },
        }
    },
    desierto: {
        // desert images from https://cocomaterial.com/
        bg: "/rooms/desierto.png",
        frames: 1,
        animations: { 
            anim: [0, 1],
        },
        bgScale: 1,
        bgResolution: [256, 200],
        frameDelay: 60,
        avatarScale: 5,
        perspective: "desiertoPerspective",
        pageBg: "#000",
        area: "/rooms/desierto-areas.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [30, 35, 98, 35],
        areaColors: {
            //h will be replaced by #
            // #ff0000
            hff0000: { cmd: "enter", room: "hall", label: "ESPEJISMOS", point: [117, 95], enterPoint: [120, 82], obstacle: false },
            // #00ff00
            h00ff00: { cmd: "text", lines: 3, txt: "", label: "esqueleto", point: [109, 42], obstacle: false },
            // #00ffff
            h00ffff: { cmd: "text", lines: 3, txt: "", label: "reflejos dorados", point: [33, 50], obstacle: false },
        },
        things: {
            dromedario: { file: "/rooms/desierto-dromedario.png", id: "dromedario", scale: 1, position: [-2, 51], frames: 1, frameDelay: 60, visible: true }
        }
    },
};