import { getPokemonsDocument, getPokemonDocument } from '../../../src/graphql/queries';
import { capitalizeFirstLetter } from '../../../src/helper';
describe('login', () => {
  let pokemons;
  let totalPokemons = 0;
  let fixturePokemons;
  let detailPokemon;
  let countPokemon = 0;

  const getPokemon = () => {
    const alias = getPokemonDocument.definitions[0].name.value;
    cy.intercept('POST', '/api/graphql', req => {
      if (req.body.operationName === alias) {
        req.alias = req.body.operationName;
      }
    });
    cy.wait(`@${alias}`).then(result => {
      if (result.response.statusCode === 200) {
        
      }
    });
  };

  const getPokemons = () => {
    const alias = getPokemonsDocument.definitions[0].name.value;
    cy.intercept('POST', '/api/graphql', req => {
      if (req.body.operationName === alias) {
        req.alias = req.body.operationName;
      }
    });
    cy.wait(`@${alias}`).then(result => {
      if (result.response.statusCode === 200) {
        pokemons = result.response.body.data.pokemons;
        totalPokemons = pokemons.results.length;
      }
    });
  };

  before(() => {
    cy.visit('/');
    getPokemons();
    cy.waitForReact();
    cy.fixture('pokemons.json').then(value => {
      fixturePokemons = value.pokemons;
      detailPokemon = value.pokemon;
    });
  });

  it('View Dashboard', () => {
    if (fixturePokemons.length === totalPokemons) {
      cy.get('[data-cy=card-pokemon]').should('have.length', totalPokemons);
      cy.get(`[data-cy=${totalPokemons}]`);

      // data integration with fixture
      fixturePokemons.map(name => {
        cy.get('[data-cy=card-pokemon]').contains('p', name);
      });
      cy.get('[data-cy=card-pokemon]').eq(3)
        .contains('p', capitalizeFirstLetter(detailPokemon.name))
        .click();
    }
  });

  it('View Detail Pokemon', () => {
    cy.wait(3000);
    cy.get('.name-pokemon');
    cy.get(`[data-cy=img-${detailPokemon.name}]`);
    cy.get('[data-cy=thumb]');
    cy.get('[data-cy=thumb]').should('have.length', detailPokemon.types.length);
    cy.get('[data-cy=height]').should('have.text', detailPokemon.height);
    cy.get('[data-cy=weight]').should('have.text', detailPokemon.weight);
    cy.get('[data-cy=abilities]').should('have.length', detailPokemon.abilities.length);
    cy.get('[data-cy=attributes]').eq(1)
      .should('have.text', capitalizeFirstLetter('moves'))
      .click();
    cy.get('[data-cy=moves]').should('have.length', detailPokemon.moves.length);

    for (let i = 0; i < 10; i++) {
      cy.get('.pokeball').click({ force: true });
        
    }
    cy.get('#modal').should('be.visible');
    cy.get('.mt-1').click()
      .then(() => {
        countPokemon = countPokemon + 1;
      });
    
  });

  it(('My pokemon'), () => {
    cy.get('[data-cy=card-pokemon]').should('have.length', countPokemon);
    cy.get('[data-cy=burger]').click();
    cy.get(('[data-cy=navigate-dashboard]')).click();
    cy.get('[data-cy=card-pokemon]').eq(3)
      .contains('p', capitalizeFirstLetter(detailPokemon.name))
      .click();
  });

  it(('Catch same pokemon'), () => {
    for (let i = 0; i < 10; i++) {
      cy.get('.pokeball').click({ force: true });
        
    }
    cy.get('#modal').should('be.visible');
    cy.get('#text-input-name').click()
      .type('Hello Pokemon');
    cy.get('.mt-1').click()
      .then(() => {
        countPokemon = countPokemon + 1;
      });
  });

});