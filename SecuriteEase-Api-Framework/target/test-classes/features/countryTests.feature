Feature: Schema Validation
  As a consumer of the API
  I want to ensure that the data returned from the API conforms to published schema
  So that my application can reliably consume and process the data returned

  Scenario: Validate schema
    Given the API endpoint is "https://restcountries.com/v3.1/all/"
    When I send a GET request
    Then the response should be 200
    And the response should contain "name"
    And the response should contain "capital"
    And the response should contain "region"
