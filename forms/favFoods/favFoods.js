let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]


LstGroup1.onclick=function(choice){
  lblFavFoods.value = `You picked ${NSB.$("LstGroup1_" + choice).textContent} - That is a great choice!`
}


BtnDessertChange.onclick=function(){
  ChangeForm(dessertVoting)
}
