@test
Feature: Login Functionality

  Background:
    Given I navigate to the login page
    
  @login 
  Scenario: Standard User Login
    When I login with "standard_user" and "secret_sauce"
    Then I should see the "Products" page

  Scenario: Problem User Login
    When I login with "problem_user" and "secret_sauce"
    Then I should see the "Products" page

  Scenario: Blocked User Login
    When I login with "locked_out_user" and "secret_sauce"
    Then I should see an error message "Epic sadface: Sorry, this user has been locked out."


