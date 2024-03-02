import { data } from "cypress/types/jquery"

describe("working with fixtures",()=>{
    it("logs in user using fixture data",()=>{
        cy.visit('http://localhost:4200/login')

        cy.fixture("login.json").then((data)=>{
            
        })
    })
})