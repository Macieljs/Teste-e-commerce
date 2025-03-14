import dados from '../../fixtures/dados_login.json';
import salePage from '../../support/page-objects/sale.page';



describe('Validando a Página de Compra - Login/Endereço Válidos', () => {
    beforeEach(() => {
        cy.entrar()
        cy.login(dados.email, dados.senha)
    });

    it('Testando o fluxo de produtos para o carrinho', () => {
        salePage.adicionandoProduto(2,1)
        cy.contains('Product successfully added to your shopping cart').should('be.visible')
    });
});