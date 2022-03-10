import { Injectable } from '@angular/core';
import { Product }    from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product[] = [

    new Product(
      1,
      "DRAGON HARRY POTTER AVEC HARRY, RON ET HERMIONE FUNKO POP ! RIDE",
      "C'est un MUST have les gars ! Ce Funko Pop ! Ride of the Gringott's Dragon est FANTASTIQUE ! Il porte sur son dos Harry Potter, Hermione Granger et Ronald Weasley et il a été utilisé par le trio magique pour échapper à leur frein de la Gringotts Wizarding Bank. Nous nous souvenons tous d'avoir lu la scène dans Les Reliques de la Mort, septième et dernier livre de la saga, et de l'avoir revue au cinéma. Nous pouvons enfin avoir un Pop Ride qui reprend cette scène* ! Ajoutez un autre dragon à votre collection !",
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12545671-1054792982630748.jpg",
      [32,95],
      new Date('2022-03-01'),
      0,
      false
    ),
    new Product(
      2,
      "FIGURINE POP! HARRY POTTER 18 POUCES (46CM) - HARRY POTTER",
      "La pop parfaite pour les grands fans du monde de Harry Potter et de J.K. Rowling a été annoncé à la New York Toy Fair 2020! Cette figurine Pop Harry Potter mesure environ 46cm.",
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12321764-6174764270590286.jpg",
      [119,99],
      new Date('2022-03-05'),
      0,
      false
    ),
    new Product(
      3,
      "HARRY POTTER NEVILLE AVEC LIVRE DE MONSTRES POP! FIGURINE EN VINYLE",
      "- Neville w/Monster Book Le livre des monstres a été créé par Edwarus Lima. Il s'agit d'un manuel scolaire intelligent que Hagrid offre à Harry pour son 13e anniversaire. Nous voyons que les livres doivent être verrouillés avec une ceinture et du spello-tape. Et pourtant, le livre réussit à attaquer Neville Longbottom ! La figurine mesure environ 3 3/4 pouces de haut et est emballée dans une boîte à fenêtre. Veuillez noter que les images présentées sont des illustrations et que le produit final peut varier. ",
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12360132-4164742445816918.jpg",
      [12,95],
      new Date('2022-03-04'),
      0,
      false
    ),
    new Product(
      4,
      "HARRY POTTER RON WEASLEY VOMISSEMENTS DE LIMACES AVEC SEAU POP! FIGURINE EN VINYLE",
      "Après avoir essayé d'exécuter le charme 'Slugulus Eructo' sur Malfoy, mais avec une baguette cassée, le sort lui a été renvoyé, ce qui l'a fait vomir des limaces ! La figurine mesure environ 3 3/4 pouces de haut et est emballée dans une boîte à fenêtre. Veuillez noter que les images présentées sont des illustrations et que le produit final peut varier. ",
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12360130-4744742445903276.jpg",
      [12,95],
      new Date('2022-03-08'),
      0,
      false
    ),
    new Product(
      5,
      "FIGURINE POP! HERMIONE GRANGER NOËL - HARRY POTTER",
      "Préparez les fêtes à Poudlard avec la nouvelle vague de figurines Funko Pop! Harry Potter Noël! Cette figurine Pop mesure environ 9cm et vient dans sa boîte-fenêtre Funko.  ",
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12514945-2024786825139361.jpg",
      [11,95],
      new Date('2022-03-08'),
      0,
      false
    ),
    new Product(
      6,
      "HARRY POTTER PROFESSEUR SYBILL TRELAWNEY POP! FIGURINE EN VINYLE",
      "D'une hauteur d'environ 3 3/4 pouces, cette figurine Harry Potter Professeur Sybill Trelawney Pop ! La figurine en vinyle est emballée dans une boîte à fenêtre et mesure environ 10 cm de haut. ",
      "https://static.thcdn.com/images/large/webp/productimg/1600/1600/12055088-2784675871968359.jpg",
      [12,95],
      new Date('2022-03-09'),
      0,
      false
    ),
    new Product(
      7,
      "HARRY POTTER FAWKES POP! FIGURINE EN VINYLE",
      "Mesurant environ 3 3/4 pouces, ce Harry Potter Fawkes Pop ! La figurine en vinyle est emballée dans une boîte à fenêtre et mesure environ 10 cm de haut. ",
      "https://static.thcdn.com/images/large/webp/productimg/1600/1600/12055089-3034675872147261.jpg",
      [12,95],
      new Date('2022-03-09'),
      0,
      false
    ),
    new Product(
      8,
      "HARRY POTTER VOLDEMORT AVEC NAGINI 25 CM POP! FIGURINE EN VINYLE",
      "Le tout nouveau Harry Potter Funko Pop ! Les vinyles sont là ! Voldemort avec Nagini est là pour rejoindre votre collection ! 'Viens, Nagini. J'ai besoin de te garder en sécurité.' - Voldemort avec Nagini Celui qui ne doit pas être nommé présente son fidèle compagnon devenu Horcruxe, Nagini, drapé autour de lui, prêt à reprendre tout ce qui lui a été pris. La figurine mesure environ 10 pouces de haut et est emballée dans une boîte à fenêtre. Veuillez noter que les images présentées sont des illustrations et que le produit final peut varier.",
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12321762-1254742446365903.jpg",
      [32,95],
      new Date('2022-03-09'),
      0,
      false
    ),
    new Product(
      9,
      "HARRY POTTER SORTING HAT EXCLUSIVE POP! VINYL FIGURE",
      "Vos personnages préférés d’Harry Potter sont maintenant disponibles en Funko Pop ! Vinyl ! Cette figurine mesure environ 9cm et elle est livrée en boîte-fenêtre.   ",
      "https://static.thcdn.com/images/large/webp/productimg/1600/1600/11247309-8282145045741833.jpg",
      [13,95],
      new Date('2022-03-10'),
      0,
      false
    ),
    new Product(
      10,
      "FIGURINE POP! TOM JEDUSOR SEPIA - HARRY POTTER - EXC",
      "Cette Figurine Pop! Tom Jedusor Sepia - Harry Potter - EXC (VIP Seulement) est une Figurine Funko Pop! Vinyl officielle. Elle mesure environ 9cm et est présentée dans la boîte-fenêtre classique par Funko! ",
      "https://static.thcdn.com/images/large/webp/productimg/1600/1600/12003867-1194649899962417.jpg",
      [30,95],
      new Date('2022-03-10'),
      0,
      false
    )
  ];
  getAllProducts(): Product[] {
    return this.products;
  }

  onFavoriteProduct(product:Product): void {
    if(product.isFavorite) {
        product.favorite--;
      } else {
        product.favorite++;
      }
      product.isFavorite = !product.isFavorite;
  }
}
