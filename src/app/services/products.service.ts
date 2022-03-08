import { Injectable } from '@angular/core';
import { Product }    from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product[] = [

    new Product(
      1,
      "la classique",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "https://static.fnac-static.com/multimedia/Images/5F/5F/5A/42/4348511-1505-1540-1/tsp20190910154120/Baguette-magique-35-cm-acceoire-magicien-sorcier.jpg",
      [20],
      new Date('2022-03-01'),
    ),
    new Product(
      2,
      "la croustillante (bio)",
      "Pratique en cas de petit creux ",
      "https://i.gifer.com/9Bzx.gif",
      [20],
      new Date('2022-03-05'),
    ),
    new Product(
      3,
      "la rainbow",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-04'),
    ),
    new Product(
      4,
      "la rainbow",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-04'),
    ),
    new Product(
      5,
      "la rainbow",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-04'),
    ),
    new Product(
      6,
      "la nazale",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-08'),
    ),
    new Product(
      7,
      "la célèbre",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-08'),
    ),
    new Product(
      8,
      "l’aléatoire ",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-09'),
    ),
    new Product(
      9,
      "l'animée'",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-09'),
    ),
    new Product(
      10,
      "l'ultime'",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-09'),
    ),
    new Product(
      11,
      "l'efficace'",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-10'),
    ),
    new Product(
      12,
      "la lowcost'",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-10'),
    )
  ];
  getAllProducts(): Product[] {
    return this.products;
  }
}
