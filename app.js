let _=require('underscore')

let fs=require('fs')
let rusult = fs.readFileSync('./flower.txt')
let arr =[]
//console.log(rusult.toString())//يحول من باينري الى سترنك
 arr = rusult.toString().split("\n");

console.log(arr);
let count =0
for(let i=0;i<=arr.length;i++){
    count++;
}



console.log(count);// no1
 
for(let i=0;i<=arr.length;i++){
   
    for(let j=1;j<=arr[i].length;j++){
    

        if(arr[i][1]=='S')

        
        console.log(arr[i]);// no2
        break
    
}
    

}
















let count2=0;
for(let i=0;i<=arr.length;i++){
    for(let j=0;j<=arr[i].length;j++){
    

        if(arr[i][0]!='S')
        count2=count2+1;
        break;
        
    }
}
console.log(count2)// no


for(let i=0;i<=arr.length;i++){
   
    for(let j=1;j<=arr[i].length;j++){
    

        if(arr[i][1]=='A')

        
        console.log(arr[i]);// no2
        break
    
}
    

}



for(let i=0;i<=arr.length;i++){
   
    for(let j=1;j<=arr[i].length;j++){
    

        if(arr[i].length==5)

        
        console.log(arr[i]);// no2
        break
    
}
    

}