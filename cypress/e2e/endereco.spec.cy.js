///<reference types = "cypress" />
""
import EnderecoPage from "../support/page-objects/endereco.page"

const { faker, en } = require('@faker-js/faker');
const perfil = require('../fixtures/perfil.json')
const endereco =require('../fixtures/endereco.json')

context('Funcionalidade Enderecos -Faturamento e Entrega',() => {

    beforeEach(() => {
        cy.visit("minha-conta")
        cy.login(perfil.usuario, perfil.senha)
    });
    
it('Deve fazer cadastro de Faturamento - Usando arquivo externo(Page-Objetcs)', () => {
    EnderecoPage.editarEnderecoFaturamento(endereco.nome,endereco.sobrenome,
        endereco.empresa,endereco.pais,endereco.logradouro,endereco.numero,endereco.cidade,
        endereco.estado,endereco.cep, endereco.telefone,endereco.email)
        cy.get(':nth-child(2) > .button').click()
        cy.get('.woocommerce-message').should( 'contain','Endereço alterado com sucesso.')
       
});

});

