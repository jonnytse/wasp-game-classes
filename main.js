let hitPoints = 80;

const queenGetsHit = () => {
    hitPoints = hitPoints - 7;
    document.getElementById('1').innerHTML = hitPoints;
}
document.getElementById('HitButton').addEventListener('click', queenGetsHit);




// let hitPoints = 80;

// let random = (Math.ceil(Math.random() * 14));
// console.log(random);

// const getsHit = () => {
//     if (random < 2) {
//         hitPoints = hitPoints - 7;
//     } else if (random < 10) {
//             hitPoints = hitPoints - 12;
//         } else {
//             hitPoints = hitPoints -10;
//         }
//         document.getElementById('random').innerHTML = hitPoints;

    // }

    
   
// document.getElementById('HitButton').addEventListener('click', getsHit);
