/// <reference types= "cypress" />

const { faker } = require('@faker-js/faker');

beforeEach(() => {
    cy.visit("minha-conta")
});

describe('Funcionalidade Pre cadastro', () => {

   
    let nomeFaker =faker.name.firstName();
    let sobrenomeFaker =faker.name.lastName();
    let emailFaker =faker.internet.email(nomeFaker,sobrenomeFaker);
    let emailFaker2 =faker.internet.email(nomeFaker,sobrenomeFaker);

    it('Deve completar o pre-cadastro com sucesso', () => {
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(faker.number + "@.com")
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker) 
        cy.get('.woocommerce-Button').click()
        //cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')


        
    });

    it('Deve fazer preCadastro -Usando Comando Customizados', () => {
        cy.preCadastro(emailFaker2,faker.number +"@.com",nomeFaker,sobrenomeFaker,)
        
    });


    
});



