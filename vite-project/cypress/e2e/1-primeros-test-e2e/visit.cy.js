describe('Primeros test E2E', () => {
  it('visualizar web', () => {
    cy.visit('http://localhost:5173/')
    cy.wait(1000)
    cy.get('[data-testid="btn0"]').click()
    cy.get('[data-testid="btn1"]').should('have.text', 'counts is 1')
    cy.get('[data-testid="btn-customButton"]').click()
    cy.get('[data-testid="p-customButton"]').should('have.text', 1)
    cy.get('[data-testid="textarea-test"]').type(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur urna velit, varius eget eros vel....'
    )
    cy.get('[data-testid="textarea-test"]').should(
      'have.value',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur urna velit, varius eget eros vel.'
    )
  })
})
