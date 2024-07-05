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
        "description": "Você pode incluir dois recheios no seu bolo mas lembre-se será cobrado valor do recheio mais caro no total.",
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
          {
            "id": "8",
            "name": "Cream cheese (geléia opcional)",
            "ingredients": "Cream cheese com a geléia da sua preferência.",
            "description": "Experimente a combinação irresistível de um recheio cremoso de cream cheese com a sua geléia favorita. A suavidade e o sabor rico do cream cheese harmonizam perfeitamente com o toque doce e frutado da geléia, criando uma explosão de sabores a cada mordida. Perfeito para quem busca um toque sofisticado e delicioso no seu bolo.",
            "prices": [
              {
                "name": "standard",
                "price": 80.00
              }
            ],
            "imageUrl": "https://vitat.com.br/receitas/images/recipeshandler.jpg?id=4521&tipo=r&default=s&ims=fit-in/414x275/filters:quality(60)",
            "bestSeller": false
          },
          {
            "id": "9",
            "name": "Tropical (recheio de leite ninho c/ frutas)",
            "ingredients": "Creme suave de Leite Ninho com frutas.",
            "description": "Desfrute do sabor exótico do recheio Tropical, que combina a cremosidade do leite Ninho com pedaços suculentos de frutas frescas. Cada mordida traz a doçura e a leveza do leite, complementadas pela frescura vibrante das frutas, criando uma experiência única e deliciosa para o seu bolo. Perfeito para quem procura um toque tropical e refrescante.",
            "prices": [
              {
                "name": "standard",
                "price": 80.00
              }
            ],
            "imageUrl": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/6d095c02a568b053940d03519bc54216.jpg",
            "bestSeller": false
          },
          {
            "id": "10",
            "name": "Creme Belga com Pêssego",
            "ingredients": "Delicioso Creme Belga com pedaços de pêssegos.",
            "description": "A textura aveludada e o sabor sofisticado do creme belga se misturam harmoniosamente com a doçura e a leveza dos pêssegos, proporcionando uma experiência gastronômica inesquecível em cada fatia de bolo. Perfeito para momentos especiais e celebrações.",
            "prices": [
              {
                "name": "standard",
                "price": 75.00
              }
            ],
            "imageUrl": "https://cdn.portalrva.com.br/wp-content/uploads/2021/10/creme-pessego.png",
            "bestSeller": false
          },
          {
            "id": "11",
            "name": "Creme Belga com Abacaxi",
            "ingredients": "Delicioso Creme Belga com pedaços de abacaxi.",
            "description": "A textura suave e cremosa do creme belga se encontra com a doçura e a acidez refrescante do abacaxi, criando uma combinação perfeita de sabores e sensações. Ideal para transformar qualquer bolo em uma verdadeira obra-prima.",
            "prices": [
              {
                "name": "standard",
                "price": 75.00
              }
            ],
            "imageUrl": "https://guiadacozinha.com.br/wp-content/uploads/2019/10/pave-de-abacaxi-no-copinho-47488.jpg",
            "bestSeller": false
          },
          {
            "id": "12",
            "name": "Creme Belga com Morango",
            "ingredients": "Delicioso Creme Belga com pedaços de morango.",
            "description": "Aveludado e suave, o creme belga se mistura harmoniosamente com a doçura e a leve acidez dos morangos frescos, proporcionando uma experiência única e irresistível a cada mordida. Perfeito para bolos que encantam e surpreendem.",
            "prices": [
              {
                "name": "standard",
                "price": 75.00
              }
            ],
            "imageUrl": "https://www.sabornamesa.com.br/media/k2/items/cache/a9890e385e3991d4a934a6f9e908db80_XL.jpg",
            "bestSeller": false
          },
          {
            "id": "13",
            "name": "Mousse de Maracujá",
            "ingredients": "Leve mousse aerado de Maracujá.",
            "description": "A textura aerada e o sabor tropical e ligeiramente ácido do maracujá se combinam para criar uma experiência deliciosa e revigorante.",
            "prices": [
              {
                "name": "standard",
                "price": 70.00
              }
            ],
            "imageUrl": "https://static.itdg.com.br/images/360-240/8fed8f60d3c8e3990396e2478cbc7f2a/shutterstock-1905617575-1-.jpg",
            "bestSeller": false
          },
          {
            "id": "14",
            "name": "Mousse de Limão",
            "ingredients": "Leve mousse aerado de Limão.",
            "description": "Com uma textura aerada e um sabor cítrico e revigorante, essa mousse proporciona uma experiência deliciosa e equilibrada.",
            "prices": [
              {
                "name": "standard",
                "price": 70.00
              }
            ],
            "imageUrl": "https://img.cybercook.com.br/receitas/145/mousse-de-limao-trufado-3.jpeg",
            "bestSeller": false
          },
          {
            "id": "15",
            "name": "Mousse de Leite Ninho",
            "ingredients": "Leve mousse aerado de Leite Ninho.",
            "description": "Com uma textura leve e aerada, essa mousse traz o sabor clássico e irresistível do leite Ninho, proporcionando uma experiência doce e cremosa que vai encantar o paladar.",
            "prices": [
              {
                "name": "standard",
                "price": 70.00
              }
            ],
            "imageUrl": "https://cdn.casaeculinaria.com/wp-content/uploads/2023/03/05163747/Mousse-de-leite-ninho.webp",
            "bestSeller": false
          },
          {
            "id": "16",
            "name": "Mousse de Chocolate",
            "ingredients": "Leve mousse aerado de Chocolate.",
            "description": "Com uma textura leve e aerada, essa mousse oferece o sabor rico e intenso do chocolate, criando uma experiência deliciosa e sofisticada. ",
            "prices": [
              {
                "name": "standard",
                "price": 70.00
              }
            ],
            "imageUrl": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/369562012750bd46ceaeef5d59a23229.jpg",
            "bestSeller": false
          },
          {
            "id": "17",
            "name": "Floresta Negra",
            "ingredients": "Leve creme de chantilly com cerejas.",
            "description": "A suavidade e a doçura do chantilly se harmonizam perfeitamente com o sabor vibrante e ligeiramente ácido das cerejas. Ahh, e não se esqueça de escolher algumas de nossas massas de chocolate!!",
            "prices": [
              {
                "name": "standard",
                "price": 70.00
              }
            ],
            "imageUrl": "https://img.freepik.com/fotos-premium/delicioso-pave-de-chocolate-da-floresta-negra-com-cerejas-e-chantilly-em-uma-grande-tigela-de-vidro-guarnecido-com-chocolate-picado-cacau-em-po-e-bagas-sobremesa-decadente-indulgente_76014-390.jpg",
            "bestSeller": false
          },
          {
            "id": "18",
            "name": "Prestígio",
            "ingredients": "Leve cocada cremosa.",
            "description": "A textura macia e o sabor doce do coco se misturam de forma perfeita, proporcionando uma experiência irresistível e indulgente. Ahh, e não se esqueça de escolher algumas de nossas massas de chocolate!!",
            "prices": [
              {
                "name": "standard",
                "price": 70.00
              }
            ],
            "imageUrl": "https://catracalivre.com.br/wp-content/uploads/2023/11/cocada-cremosa.jpg",
            "bestSeller": false
          },
          {
            "id": "19",
            "name": "Brigadeiro 70% cacau",
            "ingredients": "Leve Brigadeiro 70% cacau.",
            "description": "Com uma textura suave e cremosa, esse brigadeiro oferece um sabor intenso e refinado de chocolate amargo, criando uma experiência gourmet e irresistível.",
            "prices": [
              {
                "name": "standard",
                "price": 70.00
              }
            ],
            "imageUrl": "https://i.panelinha.com.br/i1/228-bk-6392-blog-ayu1901.webp",
            "bestSeller": false
          },
        ]
      },
      {
        "name": "Massas",
        "description": "É sobre fazer parte dos momentos mais importantes, sobre eternizar sabores e memórias.",
        "items": [
          {
            "id": "20",
            "name": "Pão de ló: Chocolate",
            "ingredients": "Ovos, açúcar, farinha de trigo, chocolate em pó e fermento em pó.",
            "description": "Um delicado e aerado pão de ló de chocolate, preparado com ovos, açúcar e uma harmoniosa combinação de farinha de trigo e chocolate em pó. A massa é enriquecida com uma pitada de sal para realçar os sabores, além de óleo e água morna para garantir a textura perfeita. Leve e saboroso, é a base ideal para bolos que buscam um toque irresistível de chocolate.",
            "prices": [],
            "imageUrl": "https://receitinhas.com.br/wp-content/uploads/2022/09/Pao-de-lo-de-chocolate-1.png",
            "bestSeller": false
          },
          {
            "id": "21",
            "name": "Pão de ló: Baunilha",
            "ingredients": "Ovos, açúcar, farinha de trigo, essência de baunilha, fermento em pó.",
            "description": "Um pão de ló leve e aromático, elaborado com ovos, açúcar e uma suave essência de baunilha, que proporciona um sabor delicado e perfumado à massa. A combinação equilibrada de ingredientes inclui farinha de trigo para garantir a textura macia e o fermento em pó para a leveza característica. Ideal como base para bolos que desejam destacar o sabor clássico e reconfortante da baunilha.",
            "prices": [],
            "imageUrl": "https://cooknenjoy.com/wp-content/uploads/2017/08/pao-de-lo-01.jpg",
            "bestSeller": false
          },
          {
            "id": "21",
            "name": "Red Velvet",
            "ingredients": "Farinha de trigo, açúcar, óleo vegetal, ovos, cacau em pó, corante vermelho, vinagre branco, bicarbonato de sódio, baunilha.",
            "description": "Um pão de ló leve e aromático, elaborado com ovos, açúcar e uma suave essência de baunilha, que proporciona um sabor delicado e perfumado à massa. A combinação equilibrada de ingredientes inclui farinha de trigo para garantir a textura macia e o fermento em pó para a leveza característica. Ideal como base para bolos que desejam destacar o sabor clássico e reconfortante da baunilha.",
            "prices": [],
            "imageUrl": "https://i.ytimg.com/vi/i3LHmRv6PwY/maxresdefault.jpg",
            "bestSeller": false
          },
        ]
      }
    ]
  }
]