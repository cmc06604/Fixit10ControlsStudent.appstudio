
hmbMenu.onclick=function(s){
  if (typeof(s) == "object"){ 
    return
  } else {
    
  switch(s) {
  case "Login":
      ChangeForm(loginCU)
      break
  case "Fav Foods":
      ChangeForm(favFoods)
      break
  case "Dessert Voting":
      ChangeForm(dessertVoting)
      break
  case "Describe You":
      ChangeForm(describeYou)
      break
  case "Fav ExercisesAB":
      ChangeForm(favExercisesAB)
      break
}
}
}
