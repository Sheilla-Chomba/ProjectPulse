describe('Working with fixtures', () => {
  let data: { email: string; password: string };

  before(() => {
    cy.fixture('login').then((info) => {
      data = info;
    });
  });

  it('logs in user using fixture data', () => {
    cy.visit('/login');

    cy.get('.email-input').type(data.email);
    cy.get('.password-input').type(data.password);
    cy.get('.login-btn')
      .click()
      .then((el) => {
        cy.location('pathname').should('not.eq', '/login');
        cy.location('pathname').should('equal', '/home');
      });
  });
});

describe('Working with fixtures with multiple data', () => {
  let data: { email: string; password: string };

  before(() => {
    cy.fixture('login').then((info) => {
      data = info;
    });
  });

  it('iterates through login2 data and tries to login', () => {
    cy.visit('/login');

    cy.fixture('login2.json').then((dataarray) => {
      dataarray.forEach((data: { email: string; password: string }) => {
        cy.get('.email-input').type(data.email);
        cy.get('.password-input').type(data.password);

        if (data.email == 'admin@mail.com' && data.password == '12345678') {
          cy.get('.login-btn')
            .click()
            .then((el) => {
              cy.location('pathname').should('equal', '/home');
              cy.visit('/login');
            });
        } else if (
          data.email == 'admin@mail.com' &&
          data.password !== '12345678'
        ) {
          cy.get('.login-btn').click();
          cy.contains('Incorrect password');
        }
      });
    });
  });
});

describe('Requests without hitting the backend', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should handle login post request', () => {
    cy.intercept('POST', 'http://localhost:4100/auth/login', {
      body: {
        message: 'Logged in successfully',
      },
    }).as('loginRequest');

    cy.get('.login-btn').click();

    cy.wait('@loginRequest').then((interception) => {
      expect(interception.request.body).to.exist;

      cy.get('.success-msg').should('contain', 'Logged in successfully');
    });
  });
});