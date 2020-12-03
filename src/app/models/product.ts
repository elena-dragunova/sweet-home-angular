import {ProductOption} from './product-option';

/**
 * Product model.
 * */
export class Product {
  /**
   * ID.
   */
  public id: number;

  /**
   * Product name.
   */
  public name: string;

  /**
   * Product price.
   */
  public price: number;

  /**
   * Product rating.
   */
  public rating: number;

  /**
   * Product description.
   */
  public description: string;

  /**
   * Optional: Product dimentions.
   * Product width, height and depth.
   */
  public dimentions?:
    {
      /**
       * Product's width.
       */
      width: number;
      /**
       * Product's height.
       */
      height: number;
      /**
       * Product's depth.
       */
      depth: number;
    };

  /**
   * Product vendor.
   */
  public vendor: string;

  /**
   * Whether the product is trending or not.
   */
  public trending: boolean;

  /**
   * Whether the product is best-seller or not.
   */
  public best_seller: boolean;

  /**
   * Product's options.
   * Can contain products options of different colors or at least one standard option.
   */
  public options: ProductOption[];

  /**
   * Product category.
   */
  public category: string;

  /**
   * Product subcategory.
   */
  public subcategory?: string;
}
