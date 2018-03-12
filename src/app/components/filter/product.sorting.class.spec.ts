import { ProductSortingClass } from './product.sorting.class';

describe('ProductSortingClass', () => {

  const ourValues = [{
    price: 33,
  }, {
    price: 11,
  }, {
    price: 2,
  }, {
    price: 55,
  }];

  it('should sort in descending', () => {
    expect(ourValues.sort(ProductSortingClass.sortPriceByDescending)).toEqual([{
      price: 55,
    }, {
      price: 33,
    }, {
      price: 11,
    }, {
      price: 2,
    }]);
  });
});
