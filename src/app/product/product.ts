import { ProductQuantityPrice } from "../product-quantity-price/product-quantity-price";
import { DistributorArea } from "../distributor-area/distributor-area";

export class Product {

    constructor(
        public id : number,
        public name : string,
        public brandId : string,
        public brandName : String,
        public unitOfMeasure: String,
        public sellingPrice : number ,
        public purchasePrice : number,
        public productQuantityPriceList: ProductQuantityPrice[],
        public distributorAreaDTOList: DistributorArea[]
      ) {  }
  
      public static getEmptyObject(): Product{
        return new Product(0,null,null,null,null,0,0,null,null)
      }
  
  }