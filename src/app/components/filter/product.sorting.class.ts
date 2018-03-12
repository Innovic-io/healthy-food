/**
 *
 */
export class ProductSortingClass {

  static sortPriceByDescending(a, b) {

    if (a.price > b.price) {
      return -1;
    } else {
      return 1;
    }

  }
}
