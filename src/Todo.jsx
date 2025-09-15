// export default function ToDO ({task, isDone}){
//     if (isDone === true) {
//         return<li>Done : {task}</li>
//     }
//     else{
//         return<li>panding : {task}</li>
//     }
// }





// export default function ToDO ({task, isDone, time = 0}){
//     return isDone ? 
//     <li>Done : {task} time:
//      {time}</li> : <li> {task}</li>
// }


// condition rendering : 4 &&

// export default function ToDO ({task, isDone, time = 0}){
//     return isDone && 
//     <li>Done : {task} time:
//      {time}</li>
// }

// conditional rendarring : 6 ||

// export default function ToDO ({task, isDone, time = 0}){
//     return isDone ||
//     <li>Not Done : {task} time:
//      {time}</li>
// }

// conditional rendaring : 6 null


// export default function ToDO ({task, isDone}){
//     if (isDone === true) {
//         return null;
//     }
//     else{
//         return<li>panding : {task}</li>
//     }
// }



// conditional reandaring : 7 use variable

export default function ToDO ({task, isDone}){

    let listItem ;

    if (isDone === true) {
        listItem = <li>Done : {task} ✅</li>
    }
    else{
        listItem = <li>panding : {task} ❌</li>
    }

    return listItem;
}
