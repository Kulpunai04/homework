// function getName(name){
//     if (name) {
//         console.log('hi1,${name}');
//     }else{
//         console.log('Hello1,gost');
//     }
// }
// function getName2(name ='gost'){
//     console.log('hello2,${name}');
// }else




//////////////////////////////////////////////Стрелочные функции/////////////////////////////////////////////////
//1 способ////
/*
const sum=(x,y)=>{
    console.log(x+y);
}
sum(5,10);
*/
//2способ///
/*
const sum =(x,y)=> x+y;
const result = sum(5,19);
console.log(result);
*/


/*
const showMessege=msg=>{
    alert(msg)
}
showMessege('hello baby:)')
*/


//////////////////////////////////////////////////////////MAP////////////////////////////////////////////////////////
/*
const num =[10,20,30];
const new_num = num.map(
    function (elem,index) {
      return elem * 2;
    }
)
console.log(new_num);
*/
////////////////////////////////////////////////////////через => функцию//////////////////////////////////
/*
const num =[10,20,30];
const new_num =num.map(elem=>elem *2)
console.log(new_num);
*/

/*
1)
new_num =[20,40,60]
  function (elem=10,index) {
      return 20;
    }
2)
function (elem=20,index) {
      return 40;
    }
3)
function (elem=30,index) {
      return 60;
    }
*/






/*
1)
 function (elem=10,index=0) {
        console.log(elem);
        console.log(index);
        
    }
2)
 function (elem=20,index=1) {
        console.log(elem);
        console.log(index);
        
    }
3)
 function (elem=30,index2) {
        console.log(elem);
        console.log(index);
        
    }
*/


// const users=[
//     {name:'lisa',age:23},
//     {name:'lina',age:23},
//     {name:'lira',age:25}

// ]
// console.log(users);


// const users=[
//     {name:'lisa',age:23},
//     {name:'lina',age:23},
//      {name:'lira',age:25}
// ]


const users=[
    {name:'lisa',age:23},
    {name:'lina',age:23},
     {name:'lira',age:25}
];
const new_user =users.map(elem=>elem )
console.log(new_user);


// const num =[10,20,30];
// const new_num =num.map(elem=>elem *2)
// console.log(new_num);