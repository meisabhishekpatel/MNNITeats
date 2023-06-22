const pizzas = [
    {
        name: "Margherita",
        variants: ["Small", "Medium", "Large"],
        prices: [
            {
                Small: 99,
                Medium: 199,
                Large: 399,
            },
        ],
        category: "veg",
        image: "/images/margherita.jpg",
        description: "Classic delight with 100% real mozzarella cheese",
    },
    {
        name: "Farmhouse",
        variants: ["Small", "Medium", "large"],
        prices: [
            {
                Small: 229,
                Medium: 399,
                Large: 599,
            },
        ],
        category: "veg",
        image: "/images/farmhouse.jpg",
        description:
            "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    },
    {
        name: "Veggie Paradise",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 180,
                medium: 290,
                large: 460,
            },
        ],
        category: "veg",
        description:
            "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
        image: "/images/veggie_paradise.jpg",
    },
    {
        name: "Chicken Golden Delight",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 249,
                medium: 349,
                large: 599,
            },
        ],
        category: "nonveg",
        image: "/images/chicken_golden_delight.jpg",
        description:
            "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
    },
    {
        name: "Chicken Pepperoni",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 320,
                medium: 580,
                large: 800,
            },
        ],
        category: "nonveg",
        image: "/images/cheesepepperoni.jpg",
        description:
            "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
    },
    {
        name: "Indi Chicken Tikka",
        variants: ["small", "medium", "large"],
        prices: [
            {
                small: 250,
                medium: 380,
                large: 500,
            },
        ],
        category: "nonveg",
        image: "/images/IndianTandooriChickenTikka.jpg",
        description:
            "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    },
];
export default pizzas;