class CartPage {
  cartTitle = ".page-title";
  cartItem = "td.product-name";

  validateOnCartPage() {
    cy.get(this.cartTitle).should("contain", "Carrinho");
  }

  validateProductInCart(productName) {
    cy.get(this.cartItem).should("contain", productName);
  }
}

export default new CartPage();
