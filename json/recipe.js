const recipes = [
    {
        id: 1,
        img: require("../assets/pudding_breakfast.jpg"),
        name: "Pudding",
        category: "breakfast",
        ingredients: "\u2022 1 cup rice\n\u2022 5 1/2 -6 cups water\n\u2022 1 teaspoon salt\n\u2022 1/2 teaspoon nutmeg\n\u2022 honey/sugar any sweetener of choice\n\u2022 powdered or evaporated milk to serve\n\u2022 Dash of nutmeg for garnish optional",
        instructions: "1. Wash rice and pour in a large saucepan with 5 cups of water and put on high heat\n2. Boil for about 20 minutes till the rice has soaked the water and its soft. Add the salt and the other one cup water if needed. Using a ladle, beat the rice against the saucepan to form a smooth pudding of consistency.\n3. Add the nutmeg and sweetner of choice let it simmer for about five minutes.\n4. Serve with milk of choice and sprinkle with tiny dash of nutmeg for garnish."
    },
    {
        id: 2,
        img: require("../assets/rice_porridge_breakfast.jpg"),
        name: "Rice water",
        category: "breakfast",
        ingredients: "",
        instructions: ""
    },
    {
        id: 3,
        img: require("../assets/oats.jpg"),
        name: "Oats",
        category: "breakfast",
        ingredients: "\u2022 1/2 cup instant oats\n\u2022 1 cup water or milk\n\u2022 Pinch of salt\n\u2022 Optional: sweetener,fruit,nuts,or other toppings ",
        instructions: "1. In a microwave-safe bowl, combine the oats, water or milk, and salt.\n2. Microwave on high for 1-2 minutes, stirring occasionally, until the oats are cooked and the liquid is absorbed.\n3. Add sweetener or other toppings as desired."
    },
    {
        id: 4,
        img: require("../assets/corn_porridge_breakfast.jpg"),
        name: "Corn Porridge",
        category: "breakfast",
        ingredients: "",
        instructions: ""
    },
    {
        id: 5,
        img: require("../assets/jollof_lunch.jpg"),
        name: "Jollof",
        category: "lunch",
        ingredients: "",
        instructions: ""
    },
    {
        id: 6,
        img: require("../assets/waakye_supper.jpg"),
        name: "Waakye",
        category: "supper",
        ingredients: "",
        instructions: ""
    },
    {
        id: 7,
        img: require("../assets/attieke_lunch.jpg"),
        name: "Attieke",
        category: "Lunch",
        ingredients: "For Grilled Tilapia:\n\u2022 Fresh tilapia (cleaned and washed)\n\u2022 An onion\n\u2022 Salt\n\u2022 Garlic\u2022 Ginger\n\u2022 Spring onion\n\u2022 Few chillies\n\u2022 Bell pepper\n\u2022All purpose seasoning\n\u2022 Maggi cube\n\nFor Attieke:\n\u2022 Store bought attieke\n\u2022 Onions\n\u2022 Tomatoes\n\u2022 Bell pepper\n\u2022 Maggi cube\n\u2022 Vegetable oil\n\u2022 Salt",
        instructions: "1. Cut and blend all the vegetables with the seasoning to make a marinade.\n2. Cut slits on the tilapia and cover it in the marinade, making sure it gets in all the crevices and leave in a fridge  to marinate.\n3. Preheat oven to 180 degrees Fahrenheit before putting the tilapia in it for 35 minutes\n4. Pour  attieke into a bowl and sprinkle water into it. Warm it in a microwave to absorb the water and soften.\n5. Pour a little oil in a frying pan and add chopped onions to fry for 2 minutes\n6. Add the warm attieke into the pan and stir it.\n7. Add Maggi and salt and continue stirring till evenly mixed.\nThe attieke is now ready, serve with fresh chopped tomatoes and onions and chopped and steamed bell pepper, with the grilled tilapia and enjoy with pepper sauce."
    },
    {
        id: 8,
        img: require("../assets/ebunuebunu_supper.jpg"),
        name: "Ebunuebunu",
        category: "Supper",
        ingredients: "\u2022 Snails or any meat of your choice\n\u2022 Herrings/dry or smoked fish\n\u2022 Salt\n\u2022 Onions\n\u2022 Tomatoes\n\u2022 Garlic\n\u2022 Ginger\n\u2022 Kontomire\n\u2022 prekese\n\u2022 Optional:\n        peanut butter",
        instructions:"1. Wash the kontomire leaves in a clean bowl and put into a saucepan\n2. Add a little amount of water and boil under a medium heat\n3. Remove after 5 minutes when it softens\n4. Wash the meat and put into another saucepan.\n5. Wash and cut onions into pieces.\n6. Add diced onions to meat, add seasoning and salt to taste. Place over medium heat.\n7. Chop some onions and pour into a blender, add ginger, pepper and garlic and blend into a smooth mixture.\n8. Pour the blended mixture into the meat on fire.\n9. Add about 4 pieces of fresh tomatoes and fresh onions\n10. Add a teaspoon of peanut butter\n11. Blend the cocoyam leaves and pour it into the soup\n12. Add about 4 cups of water. you can add more depending on how thick you want your soup to be.\n13. Remove the cooked onions and cooked tomatoes and blend together.\n14. Pour the blended mixture back into the soup\n15. Add this point, you can add the herrings or smoked fish. Allow the soup to boil for about 15 minutes.\n16. Add salt or maggie cube to taste\n17. Add the prekese and allow it to diffuse in the soup for about 5 minutes.\nThe soup is ready. Serve with fufu."
        }
  ,
    {
        id: 9,
        img: require("../assets/wheat_porridge_breakfast.jpg"),
        name: "Wheat",
        category: "breakfast",
        //Ingredients for  Wheat
        ingredients: "\u20221 cup of whole wheat \n\u20226 cups of water \n\u2022Salt(to taste) \n\u2022Milk Sugar(optional)",
        //Instructions for Wheat
        instructions: "1. Boil two cups of water in a saucepan.\n 2. Pour in the wheat. \n3. Cover it with the lid and remove it form the heat source. \n4. Leave it to soak for about six hours. After that, drain the water form the wheat using a colander.\n 5. Add the wheat soaked early on with the four cups of water left and boil for about 15 minutes. Let it be on medium heat.\n 6. After 15 minutes, trun off the fire and wait till the wheat berries open up. \n7. Serve. You and add sugar and milk to your taste."
    },
    {
        id: 10,
        img: require("../assets/pudding_breakfast.jpg"),
        name: "Tigernut Pudding",
        category: "breakfast",
        //ingredients for tigernut pudding
        ingredients: "\u2022Tigernuts \n\u2022Rice \n\u2022Salt \n\u2022Vanilla Essence \n\u2022Water \n\u2022Sugar \n\u2022Milk",
        //instructions for tigernut pudding
        instructions: "1. Soak tigernuts and uncooked rice separately overnight. \n2. Discard soaking water and wash both rice and tigernuts.\n 3. Blend the soaked rice and tigernut with enough water until smooth. \n4. Strain the blended mixture into a bowl, makign sure there is no pulp in the strained tigernut milk. \n5. Blend the pulp with enough water and strain a few more times to extract more milk form it.\n 6. Pour the milk into a pot over low medium heat and whisk in one direction till it thickens.\n 7. Add a pinch of salt, vanilla essence and sugar and continue whisking till evenly mixed.\n 8. The tigernut pudding is ready.Serve while hot and enjoy with milk."
    }
]

export default recipes