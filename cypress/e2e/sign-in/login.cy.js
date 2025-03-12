import dados from '../../fixtures/dados_login.json';


describe('Login - Validação do fluxo de autenticação', () => {
    beforeEach(() => {
        cy.entrar()
    });
    it('Deve permitir que um usuário válido faça login com sucesso', () => {
      cy.login(dados.email,dados.senha)
      cy.get('.page-heading').contains('My account')
        
    });
    it('Deve aparecer a mensagem de falha na autenticação| e-mail errado', () => {
        cy.login(dados.emailerrado,dados.senha)
        cy.get('ol > li').contains('Authentication failed.')
        
    });
    it('Deve aparecer a mensagem de falha na autenticação | senha errada', () => {
        cy.login(dados.email,dados.senhaerrada)
        cy.get('ol > li').contains('Authentication failed.')
    });
});