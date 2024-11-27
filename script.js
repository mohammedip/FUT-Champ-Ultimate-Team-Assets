const btnAdd = document.getElementById("add")
const bonTouch =document.querySelector(".bontouch")

let plyr=0


 function addPlayer(){
    const player =
    {
      "name": document.getElementById("name").value,
      "photo": document.getElementById("playerPhotoSelect").value,
      "position": document.getElementById("Position").value,
      "flag": document.getElementById("flagSelect").value,
      "logo": document.getElementById("clubSelect").value,
      "rating": document.getElementById("rating").value,
      "pace": document.getElementById("pace").value,
      "shooting": document.getElementById("shooting").value,
      "passing": document.getElementById("passing").value,
      "dribbling": document.getElementById("dribbling").value,
      "defending": document.getElementById("defending").value,
      "physical": document.getElementById("physical").value
    }
    
    return player;
 }

 function addHtml(player){

    
    bonTouch.innerHTML+=`
    <div class="card chgm${plyr} p-10 relative grid place-items-center">
       <div
        class="flex text-center flex-col  absolute top-11 left-6"
      >
        <span class="font-bold text-[25px]">${player.rating}</span>
        <span class="font-medium">${player.position}</span>
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
          <span class="text-[10px]">PAC</span>
          <span class="text-[12px]">${player.pace}</span>
        </div>
        <div class="flex flex-col text-center">
          <span class="text-[10px]">SHO</span>
          <span class="text-[12px]">${player.shooting}</span>
        </div>
        <div class="flex flex-col ">
          <span class="text-[10px]">PAS</span>
          <span class="text-[12px]">${player.passing}</span>
        </div>
        <div class="flex flex-col ">
          <span class="text-[10px]">DRI</span>
          <span class="text-[12px]">${player.dribbling}</span>
        </div>
        <div class="flex flex-col ">
          <span class="text-[10px]">DEF</span>
          <span class="text-[12px]">${player.defending}</span>
        </div>
        <div class="flex flex-col ">
          <span class="text-[10px]">PHY</span>
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

 
btnAdd.addEventListener("click",()=>{
    plyr++;
  if(plyr>12){
    alert("the dakka is full");
    return
  }else{
   addHtml(addPlayer())
}
})      