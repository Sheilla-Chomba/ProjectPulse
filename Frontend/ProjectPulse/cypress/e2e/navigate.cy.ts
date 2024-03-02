describe("navigate the user",()=>{
    it("should navigate back and forth",()=>{
        cy.visit('http://localhost:4200/');
        cy.get('li').contains('Login').click();

        cy.location("pathname").should("equal","/login")
        cy.go("back")
        cy.location("pathname").should("equal","/")
    })
})