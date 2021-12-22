describe('My First Test', () => {
  it('Visits the initial project page', () => {

    const userMock = {
      avatar_url: "test://url",
      login: "testlogin",
      type: "user"
    }
    const userMock2 = {
      avatar_url: "test://url",
      login: "testlogin2",
      type: "user"
    }
    const data = [
      userMock, userMock2
    ] 
    cy.intercept('https://api.github.com/users',data).as("getUsers")
    cy.visit('/')
    cy.wait("@getUsers")
    // We should have as many data items as our array of mock data
    cy.get("#users").find(".user").should('have.length',data.length)
    cy.get("#users .user").first().should('have.text', "testlogin")
  })
})
