
var num1=13;
var num2=14;

console.log(num1+num2);

/*assignment operator*/

var a=8;
console.log(a+=6);

var a=10;
console.log(a-=6);

console.log(a*=6);

var a=8;
console.log(a/=6);

/*logical operator AND */
var b=50;
var c=50;
console.log((b>=c) && (c<=b)); 

/*logical operator OR */
var b=50;
var c=48;
console.log((b>=c) || (c<=b));
/*logical operator NOT*/

var b=50;
var c=50;
console.log((b>=c) && (c<=b));

var d=((b>=c) || (c<=b));
console.log(!d);







// nested if

var cars=prompt("enter cars names");
if(cars==1){
	document.write("rolls roys");
}
else if(cars==2){
	document.write("shift");
}
else{
	document.write("no");
}
