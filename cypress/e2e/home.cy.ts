describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3002/home')
    cy.get('h1').click()
  })
})