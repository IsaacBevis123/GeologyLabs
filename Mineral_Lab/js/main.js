import Mineral from './mineral.js';

var aDiv = document.createElement('div');
aDiv.setAttribute('id', 'myDrawing');
aDiv.setAttribute('style', 'text-align:center');
document.body.append(aDiv);
var draw = SVG('myDrawing').size(1200, 300);

// var draw = SVG().addTo('body').size(500, 130);

// var image_1 = draw.image('../minerals/Apatite/Apatite_1.jpg');
// image_1.size(400, 300);
// var image_2 = draw.image('../minerals/Apatite/Apatite_2.jpg');
// image_2.size(400, 300).move(400, 0);
// var image_3 = draw.image('../minerals/Apatite/Apatite_3.jpg');
// image_3.size(400, 300).move(800, 0);

let mineral = new Mineral();

console.log(mineral.mineral);
mineral.drawMineral(draw);
//mineral.testMineral(0, draw);
