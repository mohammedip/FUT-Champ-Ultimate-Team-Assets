const btnAdd = document.getElementById("add")
const bonTouch =document.querySelector(".bontouch")
const forma =document.querySelector(".stadium1")
const formaselect = document.getElementById("formaselect")
const card11 = document.querySelector(".card11")
const card10 = document.querySelector(".card10")
const card9 = document.querySelector(".card9")
const card8 = document.querySelector(".card8")
const card7 = document.querySelector(".card7")
const card6 = document.querySelector(".card6")

let players = JSON.parse(localStorage.getItem("players")) || [];

let plyrM=1
let plyrBT=1

 // geting data from localstorage---------------------------------------------------------------------------

getTask_count(players);

function getTask_count(players) {  
  if (!(players.length === 0)) {
    players.forEach((player) => {
      if(player.role==="M"){
       addMainplayer(player);
       plyrM++
      }else{
    const cardplayer =document.querySelector(`.chgm${plyrBT}`)
    cardplayer.classList.remove("hidden")
    addBonTouchPlayer(player)
    plyrBT++
      }
    });
  }
}

   // add player to localstorage---------------------------------------------------------------------------

 function addPlayer(){

     const player =
    {
      "name": document.getElementById("name").value,
      "photo": document.getElementById("playerPhotoUrl").value,
      "position": document.getElementById("Position").value,
      "flag": document.getElementById("flagSelect").value,
      "logo": document.getElementById("clubSelect").value,
      "role": document.getElementById("main-bontouch").value,
      "rating": document.getElementById("rating").value,
      "pace": document.getElementById("pace").value,
      "shooting": document.getElementById("shooting").value,
      "passing": document.getElementById("passing").value,
      "dribbling": document.getElementById("dribbling").value,
      "defending": document.getElementById("defending").value,
      "physical": document.getElementById("physical").value
    }

    let playerExiste = false;
  
  
      for (let i = 0; i < players.length; i++) {
          const joueur = players[i];
          if (joueur.position === player.position && joueur.role === "M") {
              playerExiste = true;
              plyrM -= 1;
              break; 
          }
      }
  

        players.push(player);
    localStorage.setItem("players", JSON.stringify(players));
    return player;
  
     }
      
   
   // add main player to html---------------------------------------------------------------------------

function addMainplayer(player){
  let statistique=["PAC","SHO","PAC","DRI","DEF","PHY"]
  var id=""
  switch(player.position) {
    case "RW":
    id= "RW"
      break;
    case "ST":
      id= "ST"
      break;
      case "LW":
      id= "LW"
      break;
      case "CM1":
      id= "CM1"
      break;
      case "CM2":
      id= "CM2"
      break;
      case "CM3":
      id= "CM3"
      break;
      case "LB":
      id= "LB"
      break;
      case "CB1":
      id= "CB1"
      break;
      case "CB2":
      id= "CB2"
      break;
      case "RB":
      id= "RB"
      break;
      case "GK":
      id= "GK"
      statistique=["DIV","HAN","KIC","REF","SPD","POS"]
      break;
  } 
  
  const cardplayer =document.getElementById(id)
  cardplayer.innerHTML=`
  <div class="card p-10 relative grid place-items-center">
     <div
      class="flex text-center flex-col  absolute top-11 left-6"
    >
      <span class="font-bold text-[25px]">${player.rating}</span>
      <span class="position font-medium">${player.position}</span>
    </div>
    <img
      src="${player.photo}"
      alt=""
      class="absolute top-12 left-8 "
    /> 
    <div
      class="absolute bottom-16  font-semibold player-name-card "
    >
    ${player.name}
    </div>
    <div
      class="flex flex-row gap-2 absolute bottom-10 left-5 font-semibold leading-3"
    >
      <div class="flex flex-col ">
        <span class="text-[10px]">${statistique[0]}</span>
        <span class="text-[12px]">${player.pace}</span>
      </div>
      <div class="flex flex-col text-center">
        <span class="text-[10px]">${statistique[1]}</span>
        <span class="text-[12px]">${player.shooting}</span>
      </div>
      <div class="flex flex-col ">
        <span class="text-[10px]">${statistique[2]}</span>
        <span class="text-[12px]">${player.passing}</span>
      </div>
      <div class="flex flex-col ">
        <span class="text-[10px]">${statistique[3]}</span>
        <span class="text-[12px]">${player.dribbling}</span>
      </div>
      <div class="flex flex-col ">
        <span class="text-[10px]">${statistique[4]}</span>
        <span class="text-[12px]">${player.defending}</span>
      </div>
      <div class="flex flex-col ">
        <span class="text-[10px]">${statistique[5]}</span>
        <span class="text-[12px]">${player.physical}</span>
      </div>
  </div>
  <div
      class=" flex flex-row justify-self-center gap-2 absolute bottom-4 left-16 player-name-card font-semibold "
    > 
    <img
      src="${player.logo}"
      alt=""
      class="h-5 w-7 "
    />
    <img
      src="${player.flag}"
      alt=""
      class="h-4 w-6 "
    /> 
      
      </div>
  </div>`
}

   // add Bon touch player to html---------------------------------------------------------------------------

 function addBonTouchPlayer(player){

    const cardplayer =document.querySelector(`.chgm${plyrBT}`)
    cardplayer.classList.remove("hidden")
    cardplayer.querySelector(".rating").textContent=player.rating
    cardplayer.querySelector(".position").textContent=player.position
    cardplayer.querySelector(".photo").src=player.photo
    cardplayer.querySelector(".name").textContent=player.name
    cardplayer.querySelector(".pace").textContent=player.pace
    cardplayer.querySelector(".shooting").textContent=player.shooting
    cardplayer.querySelector(".passing").textContent=player.passing
    cardplayer.querySelector(".dribbling").textContent=player.dribbling
    cardplayer.querySelector(".defending").textContent=player.defending
    cardplayer.querySelector(".physical").textContent=player.physical
    cardplayer.querySelector(".logo").src=player.logo
    cardplayer.querySelector(".flag").src=player.flag
 }


      
   // statistique validation---------------------------------------------------------------------------

function statistiquesValidation(valid , inputId, megId){
  const statistique = document.getElementById(`${inputId}`).value;
  const statistiquesRegex = /^\d{2}$/;
  if (!statistiquesRegex.test(statistique) || statistique === "") {
      
      document.getElementById(`${megId}`).classList.remove("hidden");
      return valid = false;
  } else {
      document.getElementById(`${megId}`).classList.add("hidden");
      return valid=true
  }

}
     // validation ----------------------------------------------------------------------------

function validation(){

  
  let valid = true;
 
  const name = document.getElementById("name").value;
  const nameRegex = /^[a-zA-Z\s'-]{1,20}$/;
  if (!nameRegex.test(name) || name === "") {
      
      document.getElementById("nameError").classList.remove("hidden");
      return valid = false;
       
  } else {
      document.getElementById("nameError").classList.add("hidden");
      valid=true
  }
  const playerPhotoUrl = document.getElementById("playerPhotoUrl").value;
  const playerPhotoUrlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?$/;
  if (!playerPhotoUrlRegex.test(playerPhotoUrl) || playerPhotoUrl === "") {
      
      document.getElementById("urlError").classList.remove("hidden");
      return valid = false;
       
  } else {
      document.getElementById("urlError").classList.add("hidden");
      valid=true
  }

    
  statistiquesValidation(valid , "rating" , "ratingError")
  statistiquesValidation(valid , "pace" ,"paceError")
  statistiquesValidation(valid , "shooting" , "shootingError")
  statistiquesValidation(valid , "passing" , "passingError")
  statistiquesValidation(valid , "dribbling" , "dribblingError")
  statistiquesValidation(valid , "defending" , "defendingError")
  statistiquesValidation(valid , "physical" , "physicalError")

if(!statistiquesValidation(valid , "rating" , "ratingError") ||  !statistiquesValidation(valid , "pace" ,"paceError")|| !statistiquesValidation(valid , "shooting" , "shootingError")||!statistiquesValidation(valid , "passing" , "passingError") ||!statistiquesValidation(valid , "dribbling" , "dribblingError") ||!statistiquesValidation(valid , "defending" , "defendingError") ||!statistiquesValidation(valid , "physical" , "physicalError") ){
  return valid = false
}

return valid
 
     
}

   //  button add---------------------------------------------------------------------------

btnAdd.addEventListener("click",()=>{
   const playerRoll=document.getElementById("main-bontouch")
  
   if(playerRoll.value==="M"){
          validation()
          if(validation()){
            
            addMainplayer(addPlayer())
        plyrM++;
        if(plyrM>11){
          validation()
          if(validation()){
          addBonTouchPlayer(addPlayer())
          plyrBT++;
          }
        }
     }
   }else if(playerRoll.value==="BT"){
    validation()
    if(validation()){

    addBonTouchPlayer(addPlayer())
    plyrBT++;
    }
    if(plyrBT>12){
      alert("Le bontouch est plain");
      return
  
    }
   }else{
    validation()
    if(validation()){
    
      addMainplayer(addPlayer())
  plyrM++;
  if(plyrM>11){
    validation()
    if(validation()){

    addBonTouchPlayer(addPlayer())
    plyrBT++;
    }
  }
}
   }
  
}) 

// Golkiper choosing ---------------------------------------------------------------------------

const playerSelec =document.getElementById("Position")
playerSelec.addEventListener("click",()=>{

if(playerSelec.value==="GK"){
  document.getElementById("paceLabel").textContent="Diving"
  document.getElementById("shootingLabel").textContent="Handling"
  document.getElementById("passingLabel").textContent="Kicking"
  document.getElementById("dribblingLabel").textContent="Reflexes"
  document.getElementById("defendingLabel").textContent="Speed"
  document.getElementById("physicalLabel").textContent="Positioning"


}else{
  document.getElementById("paceLabel").textContent="Pace"
  document.getElementById("shootingLabel").textContent="Shooting"
  document.getElementById("passingLabel").textContent="Passing"
  document.getElementById("dribblingLabel").textContent="Dribbling"
  document.getElementById("defendingLabel").textContent="Defending"
  document.getElementById("physicalLabel").textContent="Physical"

}
})

// forma choosing ---------------------------------------------------------------------------

formaselect.addEventListener("click",()=>{

  if(formaselect.value==="4-3-3"){

    forma.classList="grid stadium1 grid-cols-9 grid-rows-4 items-center place-items-center bg-cover h-[1100px] "
    card11.classList= "card card11 RW"
    card10.classList= "card card10 ST"
    card9.classList= "card card9 LW"
    card6.classList=" card card6 CM3"
    card11.querySelector(".position").textContent="RW"
    card10.querySelector(".position").textContent="ST"
    card9.querySelector(".position").textContent="LW"
    card6.querySelector(".position").textContent="CM3"

  }else if(formaselect.value==="4-4-2"){
    
    forma.classList ="grid stadium2 grid-cols-9 grid-rows-4 items-center place-items-center bg-cover h-[1100px]  "
    card11.classList= "card card11 ST1"
    card10.classList= "card card10 ST2"
    card9.classList= "card card9 LM"
    card6.classList=" card card6 RM"
    card11.querySelector(".position").textContent="ST1"
    card10.querySelector(".position").textContent="ST2"
    card9.querySelector(".position").textContent="LM"
    card6.querySelector(".position").textContent="RM"


  }
  
})

