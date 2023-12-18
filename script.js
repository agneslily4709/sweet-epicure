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

const reviews = [
        {
          "id": 1,
          "author": "John Doe",
          "picture": "https://randomuser.me/api/portraits/men/3.jpg",
          "comment": "Irresistible sweetness! Sweet Epicure's creations are a culinary masterpiece, leaving me enchanted with every delectable bite.",
          "date": "2023-08-25"
        },
        {
          "id": 2,
          "author": "Jane Smith",
          "picture": "https://randomuser.me/api/portraits/men/1.jpg",
          "comment": "A journey into sweetness! Sweet Epicure's desserts are a delightful blend of quality and flavor, making every moment a sweet celebration.",
          "date": "2023-08-24"
        },
        {
          "id": 3,
          "author": "David Johnson",
          "picture": "https://randomuser.me/api/portraits/men/4.jpg",
          "comment": "Epicurean delight! Sweet Epicure's treats are worth savoring—each bite is an experience of pure joy and culinary excellence.",
          "date": "2023-08-23"
        },
        {
          "id": 4,
          "author": "Trevor Wilson",
          "picture": "https://randomuser.me/api/portraits/men/5.jpg",
          "comment": "Satisfyingly sweet! Sweet Epicure's creations, while good, open opportunities for even more delightful enhancements.",
          "date": "2023-08-22"
        },
        {
          "id": 5,
          "author": "Michael Brown",
          "picture": "https://randomuser.me/api/portraits/men/6.jpg",
          "comment": "Sweetness with patience! While Sweet Epicure's service is excellent, the anticipation for delivery is a small price for great taste.",
          "date": "2023-08-21"
        },
        {
          "id": 6,
          "author": "Stanley Anderson",
          "picture": "https://randomuser.me/api/portraits/men/7.jpg",
          "comment": "Pure sweetness! Sweet Epicure's products are beyond amazing, bringing immense joy to my taste buds. A purchase that truly delights.",
          "date": "2023-08-20"
        },
        {
          "id": 7,
          "author": "Matthew Davis",
          "picture": "https://randomuser.me/api/portraits/men/8.jpg",
          "comment": "Consistently sweet! Overall, Sweet Epicure provides a solid experience with delectable desserts that never fail to impress.",
          "date": "2023-08-19"
        },
        {
          "id": 8,
          "author": "Mark Thompson",
          "picture": "https://randomuser.me/api/portraits/men/9.jpg",
          "comment": "Sweet with a minor twist! While the product had some scratches, Sweet Epicure's offerings are decent and enjoyable.",
          "date": "2023-08-18"
        },
        {
          "id": 9,
          "author": "Adam White",
          "picture": "https://randomuser.me/api/portraits/men/10.jpg",
          "comment": "Unbelievably sweet! Sweet Epicure's product exceeded all expectations, leaving me utterly impressed. Highly recommended!",
          "date": "2023-08-17"
        },
        {
          "id": 10,
          "author": "Chris Taylor",
          "picture": "https://randomuser.me/api/portraits/men/11.jpg",
          "comment": "Sweet value! Sweet Epicure delivers a product that does exactly what it's supposed to do—a great addition to any sweet lover's collection.",
          "date": "2023-08-16"
        }
      ];
      
let reviewAuthor = document.getElementById("reviewAuthor")
let reviewDate = document.getElementById("reviewDate")
let reviewProfile = document.getElementById("reviewProfile")
let reviewComment = document.getElementById("reviewComment")
let reviewBox = document.getElementById("reviewBox")


setInterval(() => {
        var idx = parseInt(reviewBox.getAttribute('idx'));
        reviewBox.classList.add('fade-out'); // Add a CSS class for the fade-out effect
    
        setTimeout(() => {
            reviewAuthor.innerText = reviews[idx + 1].author;
            reviewProfile.src = reviews[idx + 1].picture;
            reviewDate.date = reviews[idx + 1].date;
            reviewComment.innerText = reviews[idx + 1].comment;
    
            reviewBox.classList.remove('fade-out'); // Remove the fade-out class
            if (idx === 8) reviewBox.setAttribute("idx", 0);
            else reviewBox.setAttribute("idx", idx + 1);
        }, 500); // Adjust the time to match the CSS transition duration
    }, 7000);
    