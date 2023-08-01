var names=prompt("enter your names ");
var  engsubject= Number(prompt(" enter english number"));
var urdusubject= Number(prompt("enter urdu number"));
var mathsubject= Number(prompt("enter math number"));
var totalnumber= 300
console.log( names, engsubject , urdusubject, mathsubject );
document.write(names +"percentage")
document.write( engsubject + urdusubject+mathsubject/totalnumber*100);
