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
        img: require("../assets/omotu_lunch.jpg"),
        name: "Omotuo",
        category: "lunch",
        ingredients: "\u2022 1 cup rice\n\u2022 3-4 cups water or as required\n\u2022 salt as required",
        instructions: "1. Rinse rice and put in a medium cooking pot. Add water and salt to taste.\n2. Put rice on high and bring to ball. When rice boils over, reduce heat to medium and let cook till all water is absorbed and very soft when pressed between your fingers. Turn off heat.\n3. With the rice in the cooking pot, use a wooden ladle to beat or mash the rice against the sides of the pot for it to be glutinous. Divide the glutinous rice into balls according to required serving. Serve with soup of choice."
    },
    {
        id: 8,
        img: require("../assets/ampesi_lunch.jpg"),
        name: "Ampesi",
        category: "lunch",
        ingredients: "\u2022 Yam\n\u2022 Cocoyam leaves (Kontomire)\n\u2022 Onion\n\u2022 Tomatoes\n\u2022 Palm oil\n\u2022 Salt\n\u2022 Pepper\n\u2022 Optional flavourings:\n Seasonings, Fish or meat",
        instructions: "1. Peel and cut the yam into medium-sized pieces. Rinse the yam under running water to remove any dirt or impurities.\n 2. Wash the cocoyam leaves (kontomire) thoroughly.Remove the tough stems and chop the leaves into smaller pieces.\n 3. In a large pot, add water and bring it to a boil. Add the yam pieces to the boiling water and cook until they are soft and easily pierced with a fork.\n 4. While the yam is cooking, prepare the kontomire stew. Heat some palm oil in a separate pot over medium heat.\n 5. Chop the onions and tomatoes. Add the chopped onions to the heated oil and sauté until they become translucent.\n 6. Add the chopped tomatoes to the pot and cook until they soften and release their juices. Stir occasionally to prevent burning.\n 7. If using fish or meat, clean and season them with salt, pepper, and any desired seasonings. Add the fish or meat to the pot and cook until they are done.\n 8. Add the chopped kontomire (cocoyam leaves) to the pot and stir well. Cover the pot and allow the stew to simmer for about 10-15 minutes, or until the kontomire is tender.\n 9. Season the stew with salt, pepper, and any desired seasonings to taste. Adjust the flavors according to your preference.\n 10. Once the yam is cooked, remove it from the pot and drain any excess water.\n 11. Serve the cooked yam with the kontomire stew.You can either place the stew on top of the yam or serve it in a separate bowl.",
        ingredients: "\u2022 1 cup dried black eyed beans/ peas soaked overnight\n\u2022 2 cups rice\n\u2022 8-10 dried millet stalk leaves\n\u2022 salt as required ",
        instructions: "1. Pour over a litre of water into a saucepan together with the millet leaf stalks. Put on a high heat to boil. The millet stalk leaves will start omitting its colour and the water will start turning into a deep wine colour.\n2. Rinse the soaked beans and add to the boiling water. Cover and let it cook till tender. Mean while rinse the rice till the water is cleared. Add the washed rice into the saucepan together with salt to taste. (You might need to add more water.) Add water if needed. Stir and cover tightly.\n3. Do not remove the millet stalk leaves. When the rice boils over, reduce heat and simmer till the water is absorbed and the rice is cooked through. Rent for three to five minutes, remove millet stalk leaves and fluff with a fork."
    },
    {
        id: 9,
        img: require("../assets/oblayo_breakfast.jpg"),
        name: "Oblayo",
        category: "breakfast",
        ingredients: "\u2022 Roughly ground corn\n\u2022 Water\n\u2022 Sugar\n\u2022 Milk",
        instructions: "1.Pour some corn in a bowl and add water to it.\n2.Stir and wait for the corn to settle, the chaff will surface, then pour away the chaff from it.\n3. Put water on fire in the saucepan, pour in your corn and stir from time to time and leave it to cook for a while.\n4.Cook until you can squash the corn.\n 5.If you want it lighter, you can add more water, stir and let it cook for a little more time.\n 6.Pour it into a bowl and its ready. Add your sugar and milk as you want."
        
    },
    {
        id: 10,
        img: require("../assets/tuozafi_supper.jpg"),
        name: "Tuozafi",
        category: "Supper",
        ingredients: "For Tuo:\n\u2022 2-3 largre yams\n\u2022 Water\n For Soup:\n\u2022 Onion (1 large chopped)\n\u2022 Tomatoes(2-3 medium-sized, chopped)\n\u2022 Scotch bonnet pepper (1-2 chopped)\n\u2022 Ginger(thumb-sized piece, grated)\n\u2022 Garlic cloves(2-3 minced) \n\u2022 Stock cube(optionable) \n\u2022 Vegetables(such as spinach, kale or collard greens) \n\u2022 Salt \n\u2022 Palm oil \n\u2022 Spices",
        instructions: "1.Peel the yams and cut them into chunks Rinse them under running water to remove any dirt or impurities.\n2.In a large pot, add enough water to cover the yam chunks.Bring it to a boil over medium-high heat and cook until the yam is tender and easily mashed with a fork\n 3. Once the yam is cooked, remove it from the pot and place it in a large bowl or mortar. Use a pestle or a masher to pound and mash the yam until it becomes a smooth, dough-like consistency. You can also use a food processor or blender to achieve the same result.\n4.  Wet your hands with water and shape the mashed yam into small round balls or dumplings. Set them aside.\n5.In a separate pot, heat some palm oil over medium. Heat. Add the chopped onions and sauté until they become translucent.\n 6.Add the chopped tomatoes, scotch bonnet pepper,grated ginger, and minced garlic to the pot. Stir and cook until the tomatoes soften and release their juices.\n 6.Pour it into a bowl and its ready. add your sugar and milk as you want. .\n 6.Pour it into a bowl and its ready. add your sugar and milk as you want.\n7. If using meat, add the meat to the pot and cook until it is browned and cooked through. If using fish, add it later in the cooking process to prevent it from overcooking.\n8. Add spices and seasonings according to your preference You can use a stock cube for added flavor if desired. Stir well to combine all the ingredients.\n 9. Add enough water to create a soup consistency. Cover the pot and let the soup simmer for about 20-30 minutes to allow the flavors to meld together.\n10. Add the vegetables to the pot and cook until they are tender. Adjust the seasoning and salt according to your taste.\n11. In a separate pot, bring water to a boil. Add the shaped yam balls (Tuo) to the boiling water and cook for about 10-15 minutes or until they float to the surface, indicating they are cooked.\n12. Remove the cooked Tuo from the water and serve them alongside the prepared soup. To serve Tuo Zaafi, place the cooked Tuo in a bowl or plate and pour the soup over it. You can garnish with additional chopped vegetables or herbs if desired. Enjoy your delicious and hearty Tuo Zaafi!"
    },
    {
        id: 11,
        img: require("../assets/attieke_lunch.jpg"),
        name: "Attieke",
        category: "Lunch",
        ingredients: "For Grilled Tilapia:\n\u2022 Fresh tilapia (cleaned and washed)\n\u2022 An onion\n\u2022 Salt\n\u2022 Garlic\u2022 Ginger\n\u2022 Spring onion\n\u2022 Few chillies\n\u2022 Bell pepper\n\u2022All purpose seasoning\n\u2022 Maggi cube\n\nFor Attieke:\n\u2022 Store bought attieke\n\u2022 Onions\n\u2022 Tomatoes\n\u2022 Bell pepper\n\u2022 Maggi cube\n\u2022 Vegetable oil\n\u2022 Salt",
        instructions: "1. Cut and blend all the vegetables with the seasoning to make a marinade.\n2. Cut slits on the tilapia and cover it in the marinade, making sure it gets in all the crevices and leave in a fridge  to marinate.\n3. Preheat oven to 180 degrees Fahrenheit before putting the tilapia in it for 35 minutes\n4. Pour  attieke into a bowl and sprinkle water into it. Warm it in a microwave to absorb the water and soften.\n5. Pour a little oil in a frying pan and add chopped onions to fry for 2 minutes\n6. Add the warm attieke into the pan and stir it.\n7. Add Maggi and salt and continue stirring till evenly mixed.\nThe attieke is now ready, serve with fresh chopped tomatoes and onions and chopped and steamed bell pepper, with the grilled tilapia and enjoy with pepper sauce."
    },
    {
        id: 12,
        img: require("../assets/ebunuebunu_supper.jpg"),
        name: "Ebunuebunu",
        category: "Supper",
        ingredients: "\u2022 Snails or any meat of your choice\n\u2022 Herrings/dry or smoked fish\n\u2022 Salt\n\u2022 Onions\n\u2022 Tomatoes\n\u2022 Garlic\n\u2022 Ginger\n\u2022 Kontomire\n\u2022 prekese\n\u2022 Optional:\n        peanut butter",
        instructions:"1. Wash the kontomire leaves in a clean bowl and put into a saucepan\n2. Add a little amount of water and boil under a medium heat\n3. Remove after 5 minutes when it softens\n4. Wash the meat and put into another saucepan.\n5. Wash and cut onions into pieces.\n6. Add diced onions to meat, add seasoning and salt to taste. Place over medium heat.\n7. Chop some onions and pour into a blender, add ginger, pepper and garlic and blend into a smooth mixture.\n8. Pour the blended mixture into the meat on fire.\n9. Add about 4 pieces of fresh tomatoes and fresh onions\n10. Add a teaspoon of peanut butter\n11. Blend the cocoyam leaves and pour it into the soup\n12. Add about 4 cups of water. you can add more depending on how thick you want your soup to be.\n13. Remove the cooked onions and cooked tomatoes and blend together.\n14. Pour the blended mixture back into the soup\n15. Add this point, you can add the herrings or smoked fish. Allow the soup to boil for about 15 minutes.\n16. Add salt or maggie cube to taste\n17. Add the prekese and allow it to diffuse in the soup for about 5 minutes.\nThe soup is ready. Serve with fufu."
        }
  ,
    {
        id: 13,
        img: require("../assets/wheat_porridge_breakfast.jpg"),
        name: "Wheat",
        category: "breakfast",
        //Ingredients for  Wheat
        ingredients: "\u20221 cup of whole wheat \n\u20226 cups of water \n\u2022Salt(to taste) \n\u2022Milk Sugar(optional)",
        //Instructions for Wheat
        instructions: "1. Boil two cups of water in a saucepan.\n 2. Pour in the wheat. \n3. Cover it with the lid and remove it form the heat source. \n4. Leave it to soak for about six hours. After that, drain the water form the wheat using a colander.\n 5. Add the wheat soaked early on with the four cups of water left and boil for about 15 minutes. Let it be on medium heat.\n 6. After 15 minutes, trun off the fire and wait till the wheat berries open up. \n7. Serve. You and add sugar and milk to your taste."
    },
    {
        id: 14,
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