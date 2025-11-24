before(() => {
  cy.visit("/");
});

describe("Feature: Add product to cart", () => {
  const productName = "Augusta Pullover Jacket";

  it("Should successfully add a specific product to the cart", () => {
    cy.addProductToCart(productName);
  });
});
