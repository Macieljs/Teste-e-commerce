import { faker } from '@faker-js/faker';
import registerPage from '../support/page-objects/register.page';
import dados from '../fixtures/dados_login.json'

describe('Registro - Validação do fluxo de registro', () => {

    beforeEach(() => {
        cy.visit("controller=authentication&back=my-account")
        cy.get('.login').click()
    });

    it('Deve efetuar o registro com sucesso', () => {
        const firstname = faker.person.firstName()
        const email = faker.internet.email({ firstName: firstname }).replace("@", `+${Date.now()}@`)

        registerPage.createAccount(email)

        registerPage.funcionalidadeRegistro(
            email,
            firstname,
            faker.person.lastName(),
            faker.internet.password(),
            faker.number.int({ min: 1, max: 31 }),
            faker.number.int({ min: 1, max: 12 }),
            faker.number.int({ min: 1980, max: 2010 }))

        cy.contains('Your account has been created.').should('be.visible')


    });

    it('Deve aparecer a mensagem de conta já existente', () => {
        registerPage.createAccount(dados.email)

        cy.contains('An account using this email address has already been registered. Please enter a valid password or request a new one.').should('be.visible')



    });

});