import dados from '../../fixtures/dados_login.json';
import salePage from '../../support/page-objects/sale.page';



describe('Validando a Página de Compra - Login/Endereço Válidos', () => {
    beforeEach(() => {
        cy.entrar()
        cy.login(dados.email, dados.senha)
    });

    it('Deve adicionar produtos ao carrinho corretamente e pagar em dinheiro', () => {
        salePage.adicionandoProduto(2,1)
        cy.contains('Product successfully added to your shopping cart').should('be.visible')
        salePage.pagamentoDinheiro()
        cy.contains('Your order on My Shop is complete.').should('be.visible')
    });

    it('Deve adicionar produtos ao carrinho corretamente e pagar no cartão', () => {
        salePage.adicionandoProduto(2,1)
        cy.contains('Product successfully added to your shopping cart').should('be.visible')
        salePage.pagamentoCartão()
        cy.contains('Your order on My Shop is complete.').should('be.visible')
    });

});