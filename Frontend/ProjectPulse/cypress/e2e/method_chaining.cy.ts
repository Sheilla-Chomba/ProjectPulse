describe("Method chaining",()=>{
    it("Uses values and aliases",(()=>{
        cy.visit('http://localhost:4200/');

        const registerLink=cy.get('[data-cy="register-link"]')

        registerLink.click()
        
        // cy.get('.no-account-href').as('loginLink');
        // cy.get("@loginLink").click()
        // cy.get('[data-cy="create-account-href"]')

    }))
})