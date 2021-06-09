# BARRICUDA LIKELIKE Online

The tiniest MMORPG. Choose an avatar and hang out with your friends in a virtual version of [La Barricuda](http://labarricuda.blogspot.com/2006/10/instalaciones.html). 

![](Panorama_barricuda.jpg) 


<a href="http://barricuda-likelike.glitch.me" target="_blank">>>>Try it here<<<</a>

Aventuras visuales is an avant garde cinema school and collective in Madrid (Spain). This is a virtual tribute to 'La Barricuda', their beloved local where the workshops took place, which closed years ago, in 2009.

This project is an extension of original [likelike](https://github.com/molleindustria/likelike-online) by [molleindustria](molleindustria.org). 

Look [here](https://github.com/molleindustria/likelike-online#readme) for basic usage instructions.


# New features:  

* force scale and offset to modify the appearance of things in the room.

    I found a bug in the depthOffset calculation and fixed it to make it scale dependant. Now depth drawing will work with sprites in different scales. 

    In 'barriEntrada' room, look how i set the 'mesa' thing with a fixed offset of 10. Also the depth with the column will work at different avatarScales.

    Look at 'sillas' things in the 'barriAula' room. Each one uses a different scale and the scene profit from the bug fixed. You can change avatarScale and the depth calculation still works fine.

* perspective mode. 

    You can define a special function to calculate player scales for each room.

    Walk into 'barriCueva' room to see it working.

* animated background.  Background become a sprite and can be animated.

    If you enter with admin (use 'admin|pass' as name) you can change bg animation by calling this command:

    /on 1001

    or any combination of 4 binary digits, related to:   projector, hall lights, aula lights, cave lights

    TODO: store lights condition globally


This is a Work In Progress. 




Code licensed under a GNU Lesser General Public License v2.1.

