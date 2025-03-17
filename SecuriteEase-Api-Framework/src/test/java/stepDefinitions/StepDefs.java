package stepDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

public class StepDefs {
	
	private Response response;

    @Given("the API endpoint is {string}")
    public void theAPIEndpointIs(String endpoint) {
        RestAssured.baseURI = endpoint;
    }

    @When("I send a GET request")
    public void iSendAGETRequest() {
    	try {
        response = RestAssured.get();
        } catch (Exception e) {
            throw new RuntimeException("API request failed: " + e.getMessage());
        }
    }

    @Then("the response should be {int}")
    public void theResponseShouldBe(int statusCode) {
        response.then().statusCode(statusCode);
    }

    @Then("the response should contain {string}")
    public void theResponseShouldContain(String expectedResponse) {
    	
        try {
            JsonPath jsonPath = response.jsonPath();

            // Verify that the key exists in at least one of the response objects
            boolean keyExists = jsonPath.getList("$").stream()
                    .anyMatch(obj -> ((java.util.Map<?, ?>) obj).containsKey(expectedResponse));

            assertTrue("Key not found in response: " + expectedResponse, keyExists);

        } catch (Exception e) {
            throw new RuntimeException("Error while parsing JSON or checking key: " + e.getMessage(), e);
        }
        
    }
    @Then("the response should contain exactly {int} countries")
    public void theResponseShouldContainExactlyCountries(int expectedCount) {
    	
        try {
            // Parse the response JSON
            JsonPath jsonPath = response.jsonPath();

            // Get the list of countries and verify the count
            int actualCount = jsonPath.getList("$").size();

            // Assert if the expected count matches the actual count
            assertEquals("Expected " + expectedCount + " countries but got " + actualCount, expectedCount, actualCount);

        } catch (Exception e) {
            // Handle and throw a custom runtime exception if something goes wrong
            throw new RuntimeException("Error while parsing the JSON response or verifying the count: " + e.getMessage(), e);
        }
    }

}
