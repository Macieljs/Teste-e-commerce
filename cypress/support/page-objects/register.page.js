class RegisterPage{


    createAccount(email){
        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate > span').click()
    }

    funcionalidadeRegistro(email,firstname,lastname,password,day,month,years){
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(lastname)
        cy.get('#email').clear().type(email)
        cy.get('#passwd').type(password)
        cy.get('#days').select(day)
        cy.get('#months').select(month)
        cy.get('#years').select(`${years}`) //Gambiarra para funcionar o select
        cy.get('#submitAccount > span').click()
    }


}

export default new RegisterPage()