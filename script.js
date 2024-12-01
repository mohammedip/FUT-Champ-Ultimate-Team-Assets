document.addEventListener("DOMContentLoaded", () => {
const btnAdd = document.getElementById("add")
const btnUpdate = document.getElementById("update")
const bonTouch =document.querySelector(".bontouch")
const forma =document.querySelector(".stadium1")
const formaselect = document.getElementById("formaselect")
const card11 = document.querySelector(".card11")
const card10 = document.querySelector(".card10")
const card9 = document.querySelector(".card9")
const card8 = document.querySelector(".card8")
const card7 = document.querySelector(".card7")
const card6 = document.querySelector(".card6")
const playerCards = document.querySelectorAll(".card")
const iconesChangement = document.querySelectorAll(".iconeChangement");
const btnsDelete=document.querySelectorAll(".btnDelete");
const iconesUpdate=document.querySelectorAll(".iconeUpdate");


const positionSelect =document.getElementById("Position")

let players = JSON.parse(localStorage.getItem("players")) || [];

let plyrM=1
let plyrBT=1
let idPlayer=1
let idPlayerToUpdate=0
let playerToReplaceId1=null
let playerToReplaceId2=null
 // geting data from localstorage---------------------------------------------------------------------------

get_players(players);

function get_players(players) {  
  if (!(players.length === 0)) {
    players.forEach((player) => {
      if(player.role==="M"){
       addMainplayer(player);
       plyrM++
       if(idPlayer>player.playerId){
        idPlayer=idPlayer
       }else{
       idPlayer=player.playerId+1
      }
      }else{
    const cardBontouchplayer =document.querySelector(`.chgm${plyrBT}`)
    cardBontouchplayer.classList.remove("hidden")
    addBonTouchPlayer(player)
    plyrBT++
    if(idPlayer>player.playerId){
      idPlayer=idPlayer
     }else{
     idPlayer=player.playerId+1
    }
      }
    });
  }
}

// go to form by clicking on the update icone--------------------------

function goToForm() {
   document.getElementById('formulaire').scrollIntoView({
     behavior: 'smooth' 
    }); 
  }

// get data from player card to the inputs------------------

function cardDataToInput(playerId){
  let player = players.find((joueur) => joueur.playerId == playerId);

      document.getElementById("name").value=player.name
      document.getElementById("playerPhotoUrl").value=player.photo
      document.getElementById("Position").value=player.position
      document.getElementById("flagSelect").value=player.flag
      document.getElementById("clubSelect").value=player.logo
      document.getElementById("main-bontouch").value=player.role
      document.getElementById("rating").value=player.rating
      document.getElementById("pace").value=player.pace
      document.getElementById("shooting").value=player.shooting
      document.getElementById("passing").value=player.passing
      document.getElementById("dribbling").value=player.dribbling
      document.getElementById("defending").value=player.defending
      document.getElementById("physical").value=player.physical
      idPlayerToUpdate=player.playerId
}

// get data from inputs --------------------------------------------------------------------
function getInputData(){
  const player =
    {
      "playerId":idPlayer,
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
    return player
}

   // add player to localstorage---------------------------------------------------------------------------

 function addPlayer(){

     const player = getInputData()
    

    let playerExiste = false;
    if(players.length>=1){
      for (let i = 0; i < players.length; i++) {
          const joueur = players[i];
          if (joueur.position === player.position && joueur.role === player.role && joueur.role === "M") {
              playerExiste = true;
             return null;
          }
      }
  }

      if (!playerExiste) {
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          idPlayer++
          return player;
      }
      
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
  
  const cardMainplayer =document.getElementById(id)
  cardMainplayer.innerHTML=`
  <div class="card p-10 relative grid place-items-center">
     <div
      class="flex text-center flex-col  absolute top-11 left-6"
    >
      <span class="rating font-bold text-[25px]">${player.rating}</span>
      <span class="position font-medium">${player.position}</span>
    </div>
    <img
      src="${player.photo}"
      alt=""
      class="photo absolute top-12 left-8 "
    /> 
    <div
           class="flex text-center flex-col  absolute top-14 right-5"
         >
          <button ><i class="iconeUpdate  fa-solid fa-pen-to-square" style="color: #0ca201;"></i></button>
           <button ><i class=" btnDelete  fa-solid fa-trash" style="color: #fe0101;"></i></button>
          <button ><i class="iconeChangement fa-solid fa-repeat" style="color: #2900f5;"></i></button>    
    </div>
    <div
      class="name absolute bottom-16  font-semibold player-name-card "
    >${player.name}</div><div
      class="hidden playerId absolute bottom-16  font-semibold player-name-card "
    >${player.playerId}</div>
    <div
      class="flex flex-row gap-2 absolute bottom-10 left-5 font-semibold leading-3"
    >
      <div class="flex flex-col ">
        <span class="text-[10px]">${statistique[0]}</span>
        <span class="pace text-[12px]">${player.pace}</span>
      </div>
      <div class="flex flex-col text-center">
        <span class="text-[10px]">${statistique[1]}</span>
        <span class="shooting text-[12px]">${player.shooting}</span>
      </div>
      <div class="flex flex-col ">
        <span class="text-[10px]">${statistique[2]}</span>
        <span class="passing text-[12px]">${player.passing}</span>
      </div>
      <div class="flex flex-col ">
        <span class="text-[10px]">${statistique[3]}</span>
        <span class="dribbling text-[12px]">${player.dribbling}</span>
      </div>
      <div class="flex flex-col ">
        <span class="text-[10px]">${statistique[4]}</span>
        <span class="defending text-[12px]">${player.defending}</span>
      </div>
      <div class="flex flex-col ">
        <span class="text-[10px]">${statistique[5]}</span>
        <span class="physical text-[12px]">${player.physical}</span>
      </div>
  </div>
  <div
      class=" flex flex-row justify-self-center gap-2 absolute bottom-4 left-16 player-name-card font-semibold "
    > 
    <img
      src="${player.logo}"
      alt=""
      class="logo h-5 w-7 "
    />
    <img
      src="${player.flag}"
      alt=""
      class="flag h-4 w-6 "
    /> 
      
      </div>
  </div>`
}

   // add Bon touch player to html---------------------------------------------------------------------------

 function addBonTouchPlayer(player){

    const cardBontouchplayer =document.querySelector(`.chgm${plyrBT}`)
    cardBontouchplayer.classList.remove("hidden")
    cardBontouchplayer.querySelector(".rating").textContent=player.rating
    cardBontouchplayer.querySelector(".position").textContent=player.position
    cardBontouchplayer.querySelector(".photo").src=player.photo
    cardBontouchplayer.querySelector(".name").textContent=player.name
    cardBontouchplayer.querySelector(".playerId").textContent=player.playerId
    cardBontouchplayer.querySelector(".pace").textContent=player.pace
    cardBontouchplayer.querySelector(".shooting").textContent=player.shooting
    cardBontouchplayer.querySelector(".passing").textContent=player.passing
    cardBontouchplayer.querySelector(".dribbling").textContent=player.dribbling
    cardBontouchplayer.querySelector(".defending").textContent=player.defending
    cardBontouchplayer.querySelector(".physical").textContent=player.physical
    cardBontouchplayer.querySelector(".logo").src=player.logo
    cardBontouchplayer.querySelector(".flag").src=player.flag
 }

// delete player---------------------------------------------------------------------------------
      

function deletePlayer(playerId) {

  let index = players.findIndex((joueur) => joueur.playerId == playerId);

  if (index !== -1) {
    players.splice(index, 1);
    localStorage.setItem("players", JSON.stringify(players));
  }
}


// modifier player---------------------------------------------------------------------------------
      

function modifierPlayer(){
  
  let player = players.find((joueur) => joueur.playerId == idPlayerToUpdate);
  if(!validation()){
    return;
  }
   let updatedPlayer=getInputData()
   updatedPlayer.playerId=idPlayerToUpdate
  

   deletePlayer(idPlayerToUpdate)
   let playerExiste = false;
     for (let i = 0; i < players.length; i++) {
         const joueur = players[i];
         if (joueur.position === updatedPlayer.position && joueur.role === updatedPlayer.role && joueur.role === "M") {
             playerExiste = true;
             Swal.fire({
              title: "Alert",
              text: "Position already taken",
              icon: "warning",
              confirmButtonText: "OK",
            })
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
           
            btnAdd.classList.remove("hidden")
            btnUpdate.classList.add("hidden")
            return false;
         }
     }
     if (!playerExiste) {
       
         players.push(updatedPlayer);
         localStorage.setItem("players", JSON.stringify(players));
         Swal.fire({
          title: "Update",
          text: "the player is Updated",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
     }
  

}

// changement players---------------------------------------------------------------------------------


function changementPlayers(playerId1,playerId2){
  
  let player1 = players.find((joueur) => joueur.playerId == playerId1);
  let player2 = players.find((joueur) => joueur.playerId == playerId2);

let changement=""
changement=player1.role
player1.role=player2.role
player2.role=changement

changement=player1.position
player1.position=player2.position
player2.position=changement

deletePlayer(playerId1)
deletePlayer(playerId2)
players.push(player1);
players.push(player2);

localStorage.setItem("players", JSON.stringify(players));
Swal.fire({
 title: "Success",
 icon: "success",
 confirmButtonText: "OK",
}).then((result) => {
 if (result.isConfirmed) {
   window.location.reload();
 }
});
}

   // statistique validation---------------------------------------------------------------------------

function statistiquesValidation(valid , inputId, megId){
  const statistique = document.getElementById(`${inputId}`).value;
  const statistiquesRegex = /^\d{2}$/;
  if (!statistiquesRegex.test(statistique) || statistique === "") {
      
      document.getElementById(`${megId}`).classList.remove("hidden");
      valid = false;
  } else {
      document.getElementById(`${megId}`).classList.add("hidden");
      
       
  }
return valid
}
     // validation ----------------------------------------------------------------------------

function validation(){

  
  let valid = true;
 
  const name = document.getElementById("name").value;
  const nameRegex = /^[a-zA-Z\s'-]{1,20}$/;
  if (!nameRegex.test(name) || name === "") {
      
      document.getElementById("nameError").classList.remove("hidden");
       valid = false;
       
  } else {
      document.getElementById("nameError").classList.add("hidden");
  }
  const playerPhotoUrl = document.getElementById("playerPhotoUrl").value;
  const playerPhotoUrlRegex = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?$/;
  if (!playerPhotoUrlRegex.test(playerPhotoUrl) || playerPhotoUrl === "") {
      
      document.getElementById("urlError").classList.remove("hidden");
      valid = false;
  } else {
      document.getElementById("urlError").classList.add("hidden");
  }

    
  statistiquesValidation(valid , "rating" , "ratingError")
  statistiquesValidation(valid , "pace" ,"paceError")
  statistiquesValidation(valid , "shooting" , "shootingError")
  statistiquesValidation(valid , "passing" , "passingError")
  statistiquesValidation(valid , "dribbling" , "dribblingError")
  statistiquesValidation(valid , "defending" , "defendingError")
  statistiquesValidation(valid , "physical" , "physicalError")

if(!statistiquesValidation(valid , "rating" , "ratingError") ||  !statistiquesValidation(valid , "pace" ,"paceError")|| !statistiquesValidation(valid , "shooting" , "shootingError")||!statistiquesValidation(valid , "passing" , "passingError") ||!statistiquesValidation(valid , "dribbling" , "dribblingError") ||!statistiquesValidation(valid , "defending" , "defendingError") ||!statistiquesValidation(valid , "physical" , "physicalError") ){
   valid = false
}

return valid
 
     
}

   //  button add---------------------------------------------------------------------------

btnAdd.addEventListener("click",()=>{
   
   if(!validation()){
    return;
  }
  const playerRoll=document.getElementById("main-bontouch")
   let existeplyr=addPlayer()
  if(existeplyr=== null){
    Swal.fire({
      title: "Alert",
      text: "Position already taken",
      icon: "warning",
      confirmButtonText: "OK",
    })
    return;
  }
  

  if(playerRoll.value==="M"){
        
        addMainplayer(existeplyr)
        plyrM++;
        if(plyrM>11){

          addBonTouchPlayer(existeplyr)
          plyrBT++;
          
        }
     }else if(playerRoll.value==="BT"){
   

        addBonTouchPlayer(existeplyr)
        plyrBT++;
        
        if(plyrBT>12){
          alert("Le bontouch est plain");
          return
      }
    
   }else{
        addMainplayer(existeplyr)
        plyrM++;

    if(plyrM>11){
  
      addBonTouchPlayer(existeplyr)
      plyrBT++;
      }
    }
   window.location.reload();
   
}) 

//  button update---------------------------------------------------------------------------


btnUpdate.addEventListener("click",(event)=>{
  event.preventDefault();
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, update it!",
        }).then((result) => {
          if (result.isConfirmed) {

              modifierPlayer()
            
          }
       });
})

// delete-iconeUpdate-iconeChangement cardPlayer----------------------------------


playerCards.forEach((playerCard)=>{
playerCard.addEventListener("mouseenter",()=>{
    
      const btnDelete=playerCard.querySelector(".btnDelete");
      btnDelete.addEventListener("click",(event)=>{
        event.preventDefault();
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#d33",
              cancelButtonColor: "#3085d6",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {

                deletePlayer(playerCard.querySelector(".playerId").textContent)

                Swal.fire({
                  title: "Delete",
                  text: "the player is Deleted",
                  icon: "success",
                  confirmButtonText: "OK",
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.reload();
                  }
                });
              }
          });
        })
      
      const iconeUpdate=playerCard.querySelector(".iconeUpdate");
      iconeUpdate.addEventListener("click",()=>{
      
        btnAdd.classList.add("hidden")
        btnUpdate.classList.remove("hidden")
        cardDataToInput(playerCard.querySelector(".playerId").textContent)
        goToForm()
        
      }) 

      const iconeChangement=playerCard.querySelector(".iconeChangement");
      iconeChangement.addEventListener("click",()=>{
        console.log(playerToReplaceId1)
        console.log(playerToReplaceId2)

        if(playerToReplaceId1=== null){

           playerToReplaceId1=playerCard.querySelector(".playerId").textContent
        }else if(playerToReplaceId1!== null && playerToReplaceId2=== null){

          playerToReplaceId2=playerCard.querySelector(".playerId").textContent
         if(playerToReplaceId1===playerToReplaceId2){

            Swal.fire({
              text: "It's the same player",
              icon: "warning",
            confirmButtonText: "OK",
            }).then((result) => {
              if (result.isConfirmed) {
            playerToReplaceId1= null
            playerToReplaceId2= null
            window.location.reload();
              }
            })
            }else{

            changementPlayers(playerToReplaceId1,playerToReplaceId2)
            playerToReplaceId1= null
            playerToReplaceId2= null
            }
      
        }
        
      })
   })
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
    if (card11.firstChild) {
      card11.querySelector(".position").textContent="RW"
  }
  if (card10.firstChild) {
    card10.querySelector(".position").textContent="ST"
  }
    if (card9.firstChild) {
    card9.querySelector(".position").textContent="LW"
    }
    if (card6.firstChild) {
    card6.querySelector(".position").textContent="CM3"
    }
    positionSelect.innerHTML=`<option value="" disabled selected hidden>
              Choose the position
            </option>
            <option value="RW">Right Winger</option>
            <option value="ST">Striker</option>
            <option value="CB2">Center Back2</option>
            <option value="CB1">Center Back1</option>
            <option value="LW">Left Winger</option>
            <option value="GK">Goalkeeper</option>
            <option value="CM1">Central Defensive Midfielder1</option>
            <option value="CM2">Central Defensive Midfielder2</option>
            <option value="CM3">Central Defensive Midfielder3</option>
            <option value="LB">Left Back</option>
            <option value="RB">Right Back</option>
            `
  }else if(formaselect.value==="4-4-2"){
    
    forma.classList ="grid stadium2 grid-cols-9 grid-rows-4 items-center place-items-center bg-cover h-[1100px]  "
    card11.classList= "card card11 ST1"
    card10.classList= "card card10 ST2"
    card9.classList= "card card9 LM"
    card6.classList=" card card6 RM"
    if (card11.firstChild) {
      card11.querySelector(".position").textContent="ST1"
  }
  if (card10.firstChild) {
    card10.querySelector(".position").textContent="ST2"
  }
    if (card9.firstChild) {
    card9.querySelector(".position").textContent="LM"
    }
    if (card6.firstChild) {
    card6.querySelector(".position").textContent="RM"
    }
    positionSelect.innerHTML=`<option value="" disabled selected hidden>
    Choose the position
  </option>
  <option value="ST2">Striker2</option>
  <option value="ST1">Striker1</option>
  <option value="CB2">Center Back2</option>
  <option value="CB1">Center Back1</option>
  <option value="LM">Left Midfielder</option>
  <option value="GK">Goalkeeper</option>
  <option value="CM1">Central Defensive Midfielder1</option>
  <option value="CM2">Central Defensive Midfielder2</option>
  <option value="RM">Right Midfielder</option>
  <option value="LB">Left Back</option>
  <option value="RB">Right Back</option>
  `

  }
  
})
})
