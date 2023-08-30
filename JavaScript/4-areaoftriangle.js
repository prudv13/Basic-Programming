/*
right angled triangle
formula : (base*height)/2
*/
function areaOfRightAngledTriangle(base, height){
    let area = (base*height)/2;
    console.log(`Base: ${base}`);
    console.log(`Height: ${height}`);
    return area;
}

console.log(areaOfRightAngledTriangle(20,30));

/*
regulat triangle
formula : 
s = (a+b+c)/2
value = s*(s-a)*(s-b)*(s-c)
area = Math.sqrt(value)
*/

function areaOfRegularTriangle(a,b,c){
    let s = (a+b+c)/2;
    let value = s*(s-a)*(s-b)*(s-c);
    let area = Math.sqrt(value);
    return area;
}

console.log(areaOfRegularTriangle(10,10,5));
