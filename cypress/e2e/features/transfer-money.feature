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
            | Account            | Value | Description   |
            | b_account@test.com | 10    | Transfering 1 |
            | b_account@test.com | 20    | Transfering 2 |
            | b_account@test.com | 35.23 | Transfering 3 |
        Then The final result should be
            | Account            | Balance  |
            | a_account@test.com | 934.77   |
            | b_account@test.com | 1065.23 |
