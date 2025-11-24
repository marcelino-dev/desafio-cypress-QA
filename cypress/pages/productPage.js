class ProductPage {
  productTitle = "h1.product_title";
  addToCartBtn = "button.single_add_to_cart_button";
  viewCartBtn = ".woocommerce-message a";
  itemDescription = "div.woocommerce-variation-description";

  //.variations_form .value > ul[aria-label="Size"] > li[title="XL"]
  //.variations_form .value > ul[aria-label="Color"] > li[title="Blue"]
  //div.woocommerce-variation-description

  validateProductPage(productName) {
    cy.get(this.productTitle).should("contain", productName);
  }

  selectSizeAndColor(size = "XL", color = "Blue") {
    cy.intercept("POST", "/wp-admin/admin-ajax.php").as("randomXHR");
    cy.wait("@randomXHR");
    cy.get(
      `.variations_form .value > ul[aria-label="Size"] > li[title="${size}"]`
    ).click();
    cy.get(
      `.variations_form .value > ul[aria-label="Color"] > li[title="${color}"]`
    ).click();
  }

  validateDescription() {
    cy.get(this.itemDescription).should("be.visible");
  }

  addToCart() {
    cy.get(this.addToCartBtn).click();
  }

  validateItemPop(productName) {
    cy.contains(`“${productName}” foi adicionado no seu carrinho`).should(
      "be.visible"
    );
  }

  clickViewCart() {
    cy.get(this.viewCartBtn).click();
  }
}

export default new ProductPage();
