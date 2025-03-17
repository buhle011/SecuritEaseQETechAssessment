Feature: Country Confirmation
  As a map builder
  I want to confirm that there are 195 countries in the world
  So that my maps are accurate and reflect current geopolitical boundaries

  Scenario: Confirm number of countries
    Given the API endpoint is "https://restcountries.com/v3.1/all/"
    When I send a GET request
    Then the response should be 200
    And the response should contain exactly 195 countries
