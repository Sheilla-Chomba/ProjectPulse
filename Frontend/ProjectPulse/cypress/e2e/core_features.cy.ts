/// <reference types="Cypress"/>

describe("Core features cypress",()=>{
    // beforeEach(()=>{
    //     cy.visit('http://localhost:4200/');
    // })

    it("uses contains keyword",()=>{
        cy.visit('http://localhost:4200/');
        cy.get('.content').contains('Project Pulse');
        cy.get('.content').find('p').should("have.length",1);
    })
    
    it("It simulates users action",()=>{
        cy.visit('http://localhost:4200/');
        cy.get("li").contains("Login").click()
    })

    it("logs in a user",()=>{
        cy.visit("http://localhost:4200/login")
        cy.get('.email-input').type("chomba@gmail.com");
        cy.get('.password-input').type("12345678");
        cy.get(".login-btn").click()
    })
})