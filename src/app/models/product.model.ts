export class Product {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public imageUrl: string,
    public price: Array<number>,
    public date: Date,
    )
  {}
}
