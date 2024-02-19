console.log("grh");


function miseEnMouvement() {
  console.log("htrh");

 
for (let i = 0; i <=9; i++) {
    const arrayOfPerso = document.getElementById("idPerso"+[i]);
    console.log(arrayOfPerso);
    
    arrayOfPerso[Math.floor(Math.random()*4)];

}
const randomValue = Math.floor(arrayOfPerso.length * Math.random());
console.log(arrayOfPerso);

// for (let i = 0; i < arrayOfPerso.length; i++) {
    
//     randomValue.classList.remove('invisible');
//     console.log();
// }


  
 
   

 setInterval(() => {
    idImage.classList.add("invisible")
 }, 2000);

    
};

miseEnMouvement();


    // for (let i = 0; i < 9; i++) {
        //     arrayOfPerso.push("idPerso" + [i]);
        //     console.log(arrayOfPerso);
          


// for (let i = 0; i <= 9; i++) {
//     const exemple = document.getElementById("idPerso"+[i]);
//     exemple.classList.remove("invisible");
//     // console.log(exemple);
// }


//     //    const randomValue = Math.floor(arrayOfPerso.length * Math.random());
//     for (let i = 0; i < arrayOfPerso.length; i++) {
//         const element = arrayOfPerso[i];
        
//     }
//     console.log(arrayOfPerso);


// setInterval(() => {
//     ex.classList.add("invisible");
//     console.log("Cache " + randomValue);
//   }, 2000);
  

  

  


//   var randomPerso = arrayOfPerso[randomValue];

//   randomPerso.classList.remove("invisible");

//   console.log(randomValue);
//   console.log(randomPerso);

//   console.log(typeof randomPerso);
  
  

  

  


// }


// miseEnMouvement();


// setInterval(() => {
//     miseEnMouvement();
// }, 18000);

// // Arrêter l'exécution après 30 secondes
// setTimeout(function() {
//     clearTimeout(timeoutID);
//     console.log("Fin de l'exécution de la fonction après 30 secondes.");
// }, 30000);




// setTimeout(() => {
//     console.log("startTimeOut");
//     setInterval(() => {
//         console.log("set Interval");
//         miseEnMouvement()
//     }, 100);
// }, 0);

// // Appeler la fonction pendant 30 secondes
// var timeoutID = setTimeout(function() {
//     miseEnMouvement();
//     // Si vous avez besoin de rappeler la fonction périodiquement pendant les 30 secondes
//     // vous pouvez inclure ici un autre setTimeout avec la fonction maFonction.
// }, 0); // Pour que la fonction soit exécutée immédiatement

// // Arrêter l'exécution après 30 secondes
// setTimeout(function() {
//     clearTimeout(timeoutID);
//     console.log("Fin de l'exécution de la fonction après 30 secondes.");
// }, 30000);
