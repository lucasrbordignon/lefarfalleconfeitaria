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
          {
            "id": "4",
            "name": "Leite Ninho com morango",
            "ingredients": "Creme suave de Leite Ninho com pedaços frescos de morango.",
            "description": "Leite Ninho com Morango é uma combinação deliciosa de creme suave de Leite Ninho com pedaços frescos de morango. A cremosidade do leite se mistura perfeitamente com a doçura e o toque refrescante dos morangos, criando um doce irresistível e equilibrado.",
            "prices": [
              {
                "name": "standard",
                "price": 80.00
              }
            ],
            "imageUrl": "https://revistadestaquemais.com.br/wp-content/uploads/2019/08/DSC_0192.jpg",
            "bestSeller": false
          },
          {
            "id": "5",
            "name": "Leite Ninho com geléia",
            "ingredients": "Creme suave de Leite Ninho com a geléia da sua preferência.",
            "description": "Desfrute da cremosidade irresistível do Leite Ninho combinada com a sua geléia preferida. Seja morango, framboesa, ou outra de sua escolha, a mistura cria um doce perfeito, onde a suavidade do Leite Ninho encontra o sabor frutado e vibrante da geléia, proporcionando uma experiência única e deliciosa.",
            "prices": [
              {
                "name": "standard",
                "price": 80.00
              }
            ],
            "imageUrl": "https://www.mavalerio.com.br/wp-content/uploads/2021/06/11-bolo-no-pote-de-morango-005-min-500x340.jpg",
            "bestSeller": false
          },
          {
            "id": "6",
            "name": "Leite Ninho com creme de avelã",
            "ingredients": "Creme suave de Leite Ninho com creme de avelã.",
            "description": "Delicie-se com a combinação perfeita de Leite Ninho e creme de avelã. A suavidade e cremosidade do Leite Ninho se unem ao sabor rico e intenso do creme de avelã, criando um doce irresistível e sofisticado. ",
            "prices": [
              {
                "name": "standard",
                "price": 80.00
              }
            ],
            "imageUrl": "https://s2-receitas.glbimg.com/Pya3NoS53nN_bY1P986EbDt-99E=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/u/j/LgDADlTuaDlb9epVtMvw/mousse-de-leite-ninho-com-nutella.jpg",
            "bestSeller": false
          },
          {
            "id": "7",
            "name": "Leite Ninho com uvas s/sementes",
            "ingredients": "Creme suave de Leite Ninho com uvas s/ sementes.",
            "description": "Experimente a deliciosa combinação de Leite Ninho com uvas sem sementes. A cremosidade suave do Leite Ninho se harmoniza perfeitamente com a doçura e a textura suculenta das uvas, criando um doce refrescante e irresistível.",
            "prices": [
              {
                "name": "standard",
                "price": 80.00
              }
            ],
            "imageUrl": "https://cdn0.tudoreceitas.com/pt/posts/8/2/9/copo_da_felicidade_de_uva_verde_11928_600.jpg",
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