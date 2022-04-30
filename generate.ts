//@ts-nocheck
module.exports = function () {
  const { faker } = require("@faker-js/faker");
  var _ = require("lodash");

  return {
    products: _.times(100, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        image: faker.image.fashion(300, 200, true),
        coverPhoto: faker.image.image(),
        featured: faker.random.boolean(),
        children: faker.datatype.number({ min: 0, max: 5 }),
        address: faker.address.streetAddress(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past(),
        year: faker.date.past().getFullYear(),
        category: faker.random.arrayElement(["web", "mobile", "desktop"]),
        shipping: faker.random.arrayElement(["free", "paid"]),
        price: faker.commerce.price(),
        status: faker.random.arrayElement(["pending", "approved", "rejected"]),
        rating: faker.random.number({ min: 1, max: 5 }),
        reviews: faker.random.number({ min: 0, max: 100 }),
        popularity: faker.random.arrayElement(["high", "medium", "low"]),
        brand: faker.company.companyName(),
      };
    }),
  };
};
