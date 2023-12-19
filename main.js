let inputBox=document.getElementById("inputBox")
let btn=document.getElementById("btn")
let cards=document.getElementById("cards")
let popup=document.getElementById("popup")




 const getApikey=async (query)=>{
    cards.innerHTML=`<h1>Search YOur Meal</h1>`
    let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
  let response= await data.json()
  // console.log(response.meals[6])
  cards.innerHTML=""
response.meals.forEach(meal => {

    let createCard=document.createElement("div")
    createCard.classList.add("card")
    createCard.innerHTML=`
    <img src=${meal.strMealThumb}>
    <h1>${meal.strMeal}</h1>
<span class="catagaries">Category: ${meal.strCategory}</span>
<span class="Area"> Area: ${meal.strArea}</span>

    
    `
let button=document.createElement("button")
button.textContent="View Instruction"
button.classList.add('view')
createCard .appendChild(button)



cards.appendChild(createCard)

  
});


 }

//  const popupfun=(meal)=>{
//   popup.innerHTML=`   <h1>Instrcutoin</h1>
//   <p>${meal.strInstructions}</p>
// `
// popup.style.display="block"
//   }

btn.addEventListener("click",()=>{
const searchInput=inputBox.value.trim()

  getApikey(searchInput)
  inputBox.value=""
})

