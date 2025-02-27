import { faker } from '@faker-js/faker';
import registerPage from '../support/page-objects/register.page';

describe('Registro - Validação do fluxo de registro', () => {

    beforeEach(() => {
        cy.visit("controller=authentication&back=my-account")
        cy.get('.login').click()
    });

    it('Deve efetuar o registro com sucesso', () => {
        const firstname = faker.person.firstName()

        registerPage.funcionalidadeLogin(
            faker.internet.email({firstName:firstname}).replace("@", `+${Date.now()}@`),
            firstname,
            faker.person.lastName(),
            faker.internet.password(),
            faker.number.int({ min: 1, max: 31 }),
            faker.number.int({ min: 1, max: 12 }),
            faker.number.int({ min: 1980, max: 2010 }))

            cy.contains('Your account has been created.').should('be.visible');


    });

});