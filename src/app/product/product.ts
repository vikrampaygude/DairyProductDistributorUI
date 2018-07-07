import { ProductQuantityPrice } from "../product-quantity-price/product-quantity-price";

export class Product {

    constructor(
        public id : number,
        public name : string,
        public brandId : string,
        public brandName : String,
        public unitOfMeasure: String,
        public sellingPrice : number ,
        public purchasePrice : number,
        public productQuantityPriceList: ProductQuantityPrice[]
      ) {  }
  
  }