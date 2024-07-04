import { TRestaurant } from "@/types/dish";

export const data: TRestaurant[] = [
  {
    "name": "Le farfalle confeitaria",
    "description": "É sobre fazer parte dos momentos mais importantes, sobre eternizar sabores e memórias.",
    "address": {
      "street": "",
      "city": "",
      "state": "",
      "postalCode": "",
      "country": ""
    },
    "sections": [
      {
        "name": "Recheios",
        "description": "É sobre fazer parte dos momentos mais importantes, sobre eternizar sabores e memórias.",
        "items": [
          {
            "id": "0",
            "name": "Doce de leite com abacaxi",
            "ingredients": "Doce de leite cremoso com pedaços de abacaxi.",
            "description": "Imagine o sabor cremoso do doce de leite combinado com a doçura tropical e um toque refrescante de abacaxi. É uma mistura irresistível que equilibra perfeitamente o suave doce de leite com a vivacidade do abacaxi, criando uma experiência deliciosa e única.",
            "prices": [
              {
                "name": "standard",
                "price": 80.00
              }
            ],
            "imageUrl": "https://docescaseirospaulinho.com.br/wp-content/uploads/2021/11/doces-caseiros-paulinho-doce-de-leite-com-abacaxi-002-1-570x622.jpg",
            "bestSeller": true
          },
          {
            "id": "1",
            "name": "Doce de leite com morango",
            "ingredients": "Doce de leite cremoso com pedaços de morango.",
            "description": "Doce de leite com morango é uma combinação deliciosa que une a cremosidade suave do doce de leite com a frescura e a doçura dos morangos. Cada mordida oferece um equilíbrio perfeito entre o rico sabor do doce de leite e o toque refrescante dos morangos, criando uma experiência irresistível para o paladar.",
            "prices": [
              {
                "name": "standard",
                "price": 80.00
              }
            ],
            "imageUrl": "https://docescaseirospaulinho.com.br/wp-content/uploads/2021/11/doces-caseiros-paulinho-doce-de-leite-com-morango-001-1.jpg",
            "bestSeller": false
          },
          {
            "id": "2",
            "name": "Doce de leite com nozes",
            "ingredients": "Doce de leite cremoso com pedaços de nozes.",
            "description": "O doce de leite cremoso com pedaços de nozes é uma delícia que combina a suavidade do doce de leite com o crocante das nozes. Cada colherada oferece uma experiência única, misturando a textura cremosa com o sabor rico e levemente amargo das nozes, resultando em uma sobremesa irresistível e equilibrada.",
            "prices": [
              {
                "name": "standard",
                "price": 80.00
              }
            ],
            "imageUrl": "https://www.receiteria.com.br/wp-content/uploads/brigadeiro-de-doce-de-leite-com-nozes-01.jpg",
            "bestSeller": false
          },
          {
            "id": "3",
            "name": "Doce de leite com ameixas",
            "ingredients": "Doce de leite cremoso com ameixas.",
            "description": "O doce de leite cremoso com ameixas é uma combinação deliciosa que une a riqueza suave do doce de leite com o sabor agridoce das ameixas. Cada colherada oferece um equilíbrio perfeito entre a cremosidade e a doçura, criando uma experiência única e irresistível para o paladar.",
            "prices": [
              {
                "name": "standard",
                "price": 80.00
              }
            ],
            "imageUrl": "https://docescaseirospaulinho.com.br/wp-content/uploads/2021/11/doces-caseiros-paulinho-doce-de-leite-com-ameixa-001-1.jpg",
            "bestSeller": false
          },
        ]
      },
      // {
      //   "name": "Doces",
      //   "description": "Medley of fresh, crisp and colorful ingredients harmoniously combined to create a dish that's both refreshing and nutritious.",
      //   "items": [
      //     {
      //       "id": "6",
      //       "name": "Caesar Salad",
      //       "ingredients": "Romaine lettuce, parmeeesan cheese, croutons, aesar dressing, grilled chiken, bacon bits",
      //       "description": "Caesar salad is a beloved classic known for its simple yet flavorful components. Caesar salad is a beloved classic known for its simple yet flavorful components. This salad is assembled by tossing the romaine lettuce with the Caesar dressing, Parmesan cheese, and croutons. It can be served as a starter or as a main dish with the addition of protein. The combination of fresh lettuce, savory dressing, and crunchy elements makes it a popular and satisfying choice for any meal.",
      //       "prices": [
      //         {
      //           "name": "standard",
      //           "price": 19.99
      //         }
      //       ],
      //       "imageUrl": "https://img.freepik.com/free-photo/chicken-parmesan-caesar-salad-with-lettuce-cherry-tomatoes-inside-white-bowl-served-with-sauce-bread_114579-204.jpg?w=996&t=st=1685654701~exp=1685655301~hmac=d4f5e0e0843f2220c3d10250bbece26b7c426b7c13d88a210a8890bd924f6495",
      //       "bestSeller": false
      //     },
      //     {
      //       "id": "7",
      //       "name": "Green Salad",
      //       "ingredients": "Leaf lettuche, cucumbers, tomatoes, bell peppers, carrots, radishes, vinaigrette, creamy dreesing, salt, croutons, nuts, grated parmesan",
      //       "description": "Green salad is a versatile and refreshing dish typically composed of various fresh greens and a medley of vegetables. Its versatility allows for endless variations, making it a flexible and nutritious accompaniment to a wide range of meals or as a standalone light dish.",
      //       "prices": [
      //         {
      //           "name": "standard",
      //           "price": 18.99
      //         }
      //       ],
      //       "imageUrl": "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      //       "bestSeller": false
      //     },
      //     {
      //       "id": "8",
      //       "name": "Greek Salad",
      //       "ingredients": "Tomatoes, cucumbers, red onion, bell peppers, feta cheese, kalamata olives, extra virgin olive oil, red wine vinegar, herbs.",
      //       "description": "Greek salad is a classic dish celebrated for its vibrant colors and fresh Mediterranean flavors. The dressing, made with olive oil, vinegar, herbs, and seasonings, is then drizzled over the ingredients, creating a colorful and delectable dish known for its vibrant presentation and refreshing taste. It's a versatile side dish that perfectly complements various Mediterranean or grilled dishes.",
      //       "prices": [
      //         {
      //           "name": "standard",
      //           "price": 20.99
      //         }
      //       ],
      //       "imageUrl": "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      //       "bestSeller": true
      //     }
      //   ]
      // }
    ]
  }
]