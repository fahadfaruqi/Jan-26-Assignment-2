var a = prompt("Enter the first number");
var b = prompt("Enter the second number");
var c = prompt("Enter the third number");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);


if(a<b && a<c)
{
	alert(a+" "+"is smallest among all");
}
else if(b<a && b<c)
{
	alert(b+" "+"is smallest among all");
}
else
{
	alert(c+" "+"is smallest among all");
}