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
      "",
      [20],
      new Date('2022-03-04'),
    ),
    new Product(
      2,
      "la croustillante (bio)",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-04'),
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
      new Date('2022-03-04'),
    ),
    new Product(
      7,
      "la célèbre",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-04'),
    ),
    new Product(
      8,
      "l’aléatoire ",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-04'),
    ),
    new Product(
      9,
      "l'animée'",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-04'),
    ),
    new Product(
      10,
      "l'ultime'",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-04'),
    ),
    new Product(
      11,
      "l'efficace'",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-04'),
    ),
    new Product(
      12,
      "la lowcost'",
      "Simple, éfficace se range facilement dans une poche l'outil indispenseable pour impressionner en faisant aparaitre un lapin une coulombe ou des fleurs ...  ",
      "",
      [20],
      new Date('2022-03-04'),
    )
  ]
}
