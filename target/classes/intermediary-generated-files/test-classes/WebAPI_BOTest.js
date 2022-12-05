import io.restassured.response.Response;
import io.restassured.http.ContentType;
import io.restassured.RestAssured;
import org.junit.Assert;
import org.junit.Before;

import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertEquals;

import static org.junit.Assert.assertTrue;

public class WebAPIBOTest {

	@Before
	public void setUp() {
		RestAssured.baseURI = "https://localhost:7166";
	}

	@Test
	public void test_pv8ZQyUUZ3ph_null() {
		String testResultId = "test_pv8ZQyUUZ3ph_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Category");

			response.then().log().all();
			assertTrue("Status Code is less than 500", response.statusCode() < 500);
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assert.fail(ex.getMessage());
		}
	}

	@Test
	public void test_QLZFoOKh8Qrw_null() {
		String testResultId = "test_QLZFoOKh8Qrw_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": -102330788,\"name\": \"InGKKLuEV\"}")
					.when()
						.post("/api/Category");

			response.then().log().all();
			assertTrue("Status Code is less than 500", response.statusCode() < 500);
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assert.fail(ex.getMessage());
		}
	}

	@Test
	public void test_1D0hRJgsJyWS_null() {
		String testResultId = "test_1D0hRJgsJyWS_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 664930309,\"name\": \"JCqQ\"}")
					.when()
						.put("/api/Category");

			response.then().log().all();
			assertTrue("Status Code is less than 500", response.statusCode() < 500);
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assert.fail(ex.getMessage());
		}
	}

	@Test
	public void test_L0WMHVTlCM2i_null() {
		String testResultId = "test_L0WMHVTlCM2i_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "629147793")
					.when()
						.get("/api/Category/{id}");

			response.then().log().all();
			assertTrue("Status Code is less than 500", response.statusCode() < 500);
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assert.fail(ex.getMessage());
		}
	}

	@Test
	public void test_5yIm59OwlrvQ_null() {
		String testResultId = "test_5yIm59OwlrvQ_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Pet");

			response.then().log().all();
			assertTrue("Status Code is less than 500", response.statusCode() < 500);
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assert.fail(ex.getMessage());
		}
	}

	@Test
	public void test_gZ0hThQ5q7c4_null() {
		String testResultId = "test_gZ0hThQ5q7c4_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-1417408757")
					.when()
						.get("/api/Pet/{id}");

			response.then().log().all();
			assertTrue("Status Code is less than 500", response.statusCode() < 500);
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assert.fail(ex.getMessage());
		}
	}

	@Test
	public void test_S7adXC9ofTzE_null() {
		String testResultId = "test_S7adXC9ofTzE_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/PhotoUrl");

			response.then().log().all();
			assertTrue("Status Code is less than 500", response.statusCode() < 500);
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assert.fail(ex.getMessage());
		}
	}

	@Test
	public void test_CekSa4MHlulQ_null() {
		String testResultId = "test_CekSa4MHlulQ_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": -1346236527,\"url\": \"aFJROcT\"}")
					.when()
						.post("/api/PhotoUrl");

			response.then().log().all();
			assertTrue("Status Code is less than 500", response.statusCode() < 500);
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assert.fail(ex.getMessage());
		}
	}

	@Test
	public void test_mid4yMOrIZdP_null() {
		String testResultId = "test_mid4yMOrIZdP_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 1275333069,\"url\": \"hBdgJf\"}")
					.when()
						.put("/api/PhotoUrl");

			response.then().log().all();
			assertTrue("Status Code is less than 500", response.statusCode() < 500);
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assert.fail(ex.getMessage());
		}
	}

	@Test
	public void test_o8wBkfDmlzdm_null() {
		String testResultId = "test_o8wBkfDmlzdm_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "522722107")
					.when()
						.get("/api/PhotoUrl/{id}");

			response.then().log().all();
			assertTrue("Status Code is less than 500", response.statusCode() < 500);
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assert.fail(ex.getMessage());
		}
	}

}
