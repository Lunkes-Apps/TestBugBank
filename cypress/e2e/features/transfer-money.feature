Feature: Transfering the money amount to the other account

    As user
    Want to be able to transfer the money amount
    To other account receive the money amount

    Scenario: Transfer the money amount the there is in balance
        Given We have two accounts with balance
            | Account | email              | name               | password |
            | A       | a_account@test.com | Account A for Test | teste123 |
            | B       | b_account@test.com | Account B for Test | testeABC |
        
        When Access the account "a_account@test.com" "teste123"
        And Transfer money from account A to account B
            | Value | Description   |
            | 10    | Transfering 1 |
            | 20    | Transfering 2 |
            | 35.23 | Transfering 3 |
        Then The final result should be
            | Account | Balance |
            | A       | 934,77  |
            | B       | 1.065,23 |
