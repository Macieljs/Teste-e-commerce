class SalePage {


    adicionandoProduto(index,color){
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click()
        cy.get(`:nth-child(${index}) > .product-container > .right-block > .button-container > .lnk_view > span`).click()
        cy.get(`#color_to_pick_list > :nth-child(${color}`).click()
        cy.get('#quantity_wanted').type('5')
        cy.get('.exclusive > span').click()
        
       
        
        
    }
    pagamentoDinheiro(){
        cy.get('.button-medium > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cheque').click()
        cy.get('#cart_navigation > .button > span').click()

    
    }
    pagamentoCartão(){
        cy.get('.button-medium > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()

    
    }




}

export default new SalePage()