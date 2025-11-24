// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import home from "../pages/homePage";
import product from "../pages/productPage";
import cart from "../pages/cartPage";

Cypress.Commands.add("addProductToCart", (productName) => {
  home.searchProduct(productName);

  product.validateProductPage(productName);
  product.selectSizeAndColor();
  product.validateDescription();
  product.addToCart();
  product.validateItemPop(productName);
  product.clickViewCart();

  cart.validateOnCartPage();
  cart.validateProductInCart(productName);
});
