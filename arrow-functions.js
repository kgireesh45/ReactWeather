var names = ['gireesh', 'raj','sandy'];

names.forEach(function(name){
  console.log('forEach',name);
});

names.forEach((name) => {
  console.log('arrowFunc',name);
});

names.forEach((name)=>console.log(name));

var retrn = (name)=>name+'!';

console.log(retrn('gir'));


var c = (a,b)=> a+b;
console.log(c(1,2));
