///<reference types= "cypress" />   

const produtos = require('../fixtures/produtos.json')

describe('Pagina de produtos', () => {

    beforeEach(() => {
        cy.visit("produtos")

    });

    it.only('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.last()
            .eq(3)
            .click()
    });

    it('Deve adicionar um item ao carrinho', () => {
        var quantidade = 10;

        cy.get('.next').click()
        cy.get('[class="product-block grid"]').eq(8).click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)

    });

    it('Deve adicionar produto ao carrinho utilizando Comandos Customizados', () => {
       
        cy.get('.next').click()
        cy.get('[class="product-block grid"]').eq(8).click()
        cy.addProduto(".button-variable-item-34", ".button-variable-item-Black" ,produtos.quantidade);
        
        
    });

});
