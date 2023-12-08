//Create a mouse object that has four properties and three methods
 let mouse = {}
// properties of the mouse
 mouse.brand = 'Logitech';
 mouse.color = 'black';
 mouse.model = 'MX Ergo';
 mouse.wireless = true; 
// methods of the mouse 
mouse.leftClick = function (){
    console.log('left click')
}
mouse.rightClick = function (){
    console.log('right click')
}
mouse.scroll = function(){
    console.log('scroll scroll scroll')
}