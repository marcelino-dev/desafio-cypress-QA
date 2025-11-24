class HomePage {
  searchButton = ".search-form > button";
  modalSearchButton =
    "div.modal-body div.button-group.input-group-addon > button";
  searchInput = ".modal-body input.tbay-search";
  itemList = ".ui-menu-item div.name > a";

  searchProduct(productName) {
    cy.get(this.searchButton).eq(1).click();
    cy.get(this.searchInput).eq(1).type(productName);
    cy.get(this.itemList).eq(0).contains(productName);
    cy.get(this.modalSearchButton).eq(1).click();
  }
}

export default new HomePage();
