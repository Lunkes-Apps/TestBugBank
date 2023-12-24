export class TransferPage {
    fillAccountNumber = (accountNumber: string, digit: string): TransferPage => {
        cy.get('[type="accountNumber"]').clear().type(accountNumber)
            .get('[type="digit"]').clear().type(digit)
        return this
    }

    fillValue = (value: string): TransferPage => {
        cy.get('[type="transferValue"]').clear().type(value)
        return this
    }

    fillDetails = (details: string): TransferPage => {
        cy.get('[type="description"]').clear().type(details)
        return this
    }

    sendTransation = (): TransferPage => {
        cy.get('[type="submit"]').click()
            .get('#btnCloseModal').click()
        return this
    }
}