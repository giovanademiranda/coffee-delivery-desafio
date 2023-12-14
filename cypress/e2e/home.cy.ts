describe('tela Home', () => {
  it('Passou Uhuu!', () => {
    cy.visit('/home')
    cy.dataCy('logo').click()
    // cy.dataCy('plus').click()
    // cy.dataCy('add-cart').click()
  })
})