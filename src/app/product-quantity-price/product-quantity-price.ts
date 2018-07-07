export class ProductQuantityPrice{
    
    constructor(
    public id : number,
    public sellingPrice: number,
    public purchasePrice: number,
    public quantity: number,
    public productId: number,
    public productName: string
    ){}
}