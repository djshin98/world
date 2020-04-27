var a = [1,2,3,4,5,6,7,8,9,10];
var sum = a.reduce(function(prev,curr){
    return prev + curr;
});

a.reduce(function(prev,curr){
    console.log(prev+","+curr);
    return curr;
});

a.reduce((prev,curr)=>{
    console.log(prev+","+curr);
    return curr;
});



console.log( "sum = " + sum );

function sumf( array, callback){
    var sum = 0;
    array.forEach(function(value){
        sum += callback(value);
    });
    return sum;
} 

console.log( "my sum = " + sumf(a,function(v){ return v*2;}) );
