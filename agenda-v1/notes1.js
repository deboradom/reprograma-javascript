// Anotações de aula no console.log() -->

var obj = {
    prop1 = 0,
    prop2 = 1,
    prop3 = 2,
    prop4 = 3,
    prop5 = 4,
    prop6 = 5,
    prop7 = 6
}

// Diferentes formas de chamar o 'for':


for (var prop in obj){
    console.log(obj[prop])
}

for (var prop in obj){
    console.log(obj(prop))
}

var k = Object.keys(obj)
for (var i = 0; i< k.length; i++){
    console.log(obj[k[i]])
}

var x = Object.keys(obj)
for (var i = 0; i< x.length; i++){
    console.log(x[i], obj[x[i]])
}