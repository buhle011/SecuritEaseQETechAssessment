@test
Feature: Product Interaction

  Background:
    Given I navigate to the login page

  @product 
  Scenario Outline: Add random products to the cart and proceed to checkout
    When I login with "<username>" and "<password>"
    And I add random products to the cart
    Then I verify the cart count updates to "<cartCount>"
    And I proceed to checkout
    Then I should be taken to the checkout page

    Examples:
      | username      | password     | cartCount |
      | standard_user | secret_sauce |         3 |
      

  @product
  Scenario Outline: Complete the order after proceeding to checkout
    When I login with "<username>" and "<password>"
    And I add random products to the cart
    Then I verify the cart count updates to "<cartCount>"
    And I proceed to checkout
    And I enter checkout details with first name "<firstName>", last name "<lastName>", and zip code "<zipCode>"
    Then I complete the order
    And I should see the order confirmation page

    Examples:
      | username      | password     | cartCount | firstName | lastName | zipCode |
      | standard_user | secret_sauce |         3 | John      | West     |   12345 |
 

