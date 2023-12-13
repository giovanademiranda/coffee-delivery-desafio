describe('tela Home', () => {
  it('Passou Uhuu!', () => {
    cy.visit('/home')
    cy.dataCy('logo').click()
  })
})