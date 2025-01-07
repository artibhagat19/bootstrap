let a = 5;
let b = 4;
let c = 6;
if(a>b){
    max = a;
    smax=b;
}else{
    max = b;
    smax = a;
}if(c > max){
    console.log(max);
}else{
    console.log(c);
}