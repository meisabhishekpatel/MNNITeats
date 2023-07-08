const pizzas = [
    {
        name: "Aloo-paratha",
        variants: [ "Medium"],
        prices: [
            {
                Small: 45,
               
            },
        ],
        category: "veg",
        image: "/images/Aloo-Paratha-4.jpg",
        description: "Classic paratha with 100% wheat flour",
    },
    {
        name: "BoiledEggs",
        variants: ["Small", "Medium", "large"],
        prices: [
            {
                Small: 30,
                Medium: 45,
                Large: 55,
            },
        ],
        category: "nonveg",
        image: "/images/boiledegg.jpg",
        description:
            "Healthy option for protein lovers",
    },
    {
       
        name: "Tea",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 10,
                medium: 15,
                large: 20,
            },
        ],
        category: "Drink",
        image: "/images/tea",
        description:
            "Freshen up your mood with a sip of tea",
    },
    {
        name: "Sandwich",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 35,
                medium: 50,
                large: 75,
            },
        ],
        category: "veg",
        image: "/images/sandwich.jpg",
        description:
            "Quick snack to diminish your hunger",
    },
    {
        name: "Omlette",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 30,
                medium: 45,
                large: 60,
            },
        ],
        category: "nonveg",
        image: "/images/omlette.jpg",
        description:
            "A healthy and fulfilling option to grab",
    },
    {
        name: "Coffee",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 10,
                medium: 15,
                large: 25,
            },
        ],
        category: "Drink",
        description:
            "Caters your caffeine needs for sure",
        image: "/images/coffee.jpg",
    },
];
export default pizzas;