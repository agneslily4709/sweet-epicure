const navIcon = document.getElementById("navIcon")
const navOptions  = document.getElementById("navOptions")
navIcon.addEventListener("click", () => {
        navOptions.style.display = navOptions.style.display === "block" ? "none" : "block";
        navIcon.innerHTML = (navOptions.style.display === "block") ? "&#10006;" : "&#9776;";
});

const recipes = [
        {
          name: "Chocolate Truffle Delight",
          desc: "Indulge in the velvety richness of chocolate truffles, a delightful confectionery treat for any sweet tooth.",
          type: "Confectionery",
          difficulty: "Medium",
          img: "./Assets/Chocolate_Truffle_Delight.png"
        },
        {
          name: "Raspberry Almond Fudge",
          desc: "A delectable fusion of sweet raspberries and crunchy almonds, creating a mouthwatering confectionery fudge.",
          type: "Confectionery",
          difficulty: "Medium",
          img: "./Assets/Raspberry_Almond_Fudge.png"
        },
        {
          name: "Vanilla Bean Marshmallow",
          desc: "Fluffy vanilla-infused marshmallows that melt in your mouth, creating a dreamy confectionery experience.",
          type: "Confectionery",
          difficulty: "Easy",
          img: "./Assets/Vanilla_Bean_Marshmallow.png"
        },
        {
                name: "Caramel Bliss Bonbons",
                desc: "Experience the heavenly combination of smooth caramel and crunchy nuts in these blissful confectionery bonbons.",
                type: "Confectionery",
                difficulty: "Easy",
                img: "./Assets/Caramel_Bliss_Bonbons.png"
        },
        {
          name: "Pistachio White Chocolate",
          desc: "Savor the nutty goodness of pistachios combined with the sweetness of white chocolate in this irresistible confectionery bark.",
          type: "Confectionery",
          difficulty: "Hard",
          img: "./Assets/Pistachio_White_Chocolate.png"
        },
        {
          name: "Lemon Meringue Drops",
          desc: "Tangy lemon-flavored meringue drops that offer a burst of citrusy sweetness, a perfect confectionery delight for any occasion.",
          type: "Confectionery",
          difficulty: "Medium",
          img: "./Assets/Lemon_Meringue_Drops.png"
        }
      ];

const recipesContainer = document.getElementById("recipesContainer")
for (const recipe of recipes) {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
      
        const title = document.createElement("h3");
        title.textContent = recipe.name;

        const img = document.createElement("img");
        img.classList.add("recipe-img")
        img.src = recipe.img;
        img.alt = recipe.name;
      
        const description = document.createElement("p");
        description.textContent = recipe.desc;
      
        const info = document.createElement("div")

        const type = document.createElement("p");
        type.textContent = `🏷️ ${recipe.type}`;
      
        const difficulty = document.createElement("p");
        difficulty.textContent = `📶 ${recipe.difficulty}`;
        
        info.classList.add("recipe-info")

        info.appendChild(type)
        info.appendChild(difficulty)
        recipeCard.appendChild(title);
        recipeCard.appendChild(img);
        recipeCard.appendChild(description);
        recipeCard.appendChild(info);
      
        recipesContainer.appendChild(recipeCard);
}