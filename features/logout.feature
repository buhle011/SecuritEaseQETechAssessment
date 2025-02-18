@test
Feature: Logout Process

  @logout 
  Scenario Outline: User logs out successfully
    Given I navigate to the login page
    When I login with "<username>" and "<password>"
    And I add random products to the cart
    Then I verify the cart count updates to "<cartCount>"
    And I proceed to checkout
    And I enter checkout details with first name "<firstName>", last name "<lastName>", and zip code "<zipCode>"
    Then I complete the order
    And I should see the order confirmation page
    When I click the logout button
    Then I should be redirected to the login page

    Examples:
      | username      | password     | cartCount | firstName | lastName | zipCode |
      | standard_user | secret_sauce | 3         | Sam       | West     | 12345   |

   

