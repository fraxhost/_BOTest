import io.qameta.allure.Story;
import io.restassured.response.Response;
import io.restassured.http.ContentType;
import io.restassured.RestAssured;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.DisplayName;

public class WebAPIBOTest {

	@BeforeEach
	public void setUp() {
		RestAssured.baseURI = "https://localhost:7166";
	}

	@Test
	@Story("/api/Category")
	@DisplayName("GET /api/Category")
	public void test_wfUN0BQV0FWX_null() {
		String testResultId = "test_wfUN0BQV0FWX_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Category");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, "Status Code is less than 500");
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Category")
	@DisplayName("POST /api/Category")
	public void test_NyjBn6KaTDuU_null() {
		String testResultId = "test_NyjBn6KaTDuU_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 787122974,\"name\": \"\"}")
					.when()
						.post("/api/Category");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, "Status Code is less than 500");
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Category")
	@DisplayName("PUT /api/Category")
	public void test_PlaOltGHVq0e_null() {
		String testResultId = "test_PlaOltGHVq0e_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": -761225754,\"name\": \"cUNfW\"}")
					.when()
						.put("/api/Category");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, "Status Code is less than 500");
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Category/{id}")
	@DisplayName("GET /api/Category/{id}")
	public void test_Nb3Gu7WeGEJ1_null() {
		String testResultId = "test_Nb3Gu7WeGEJ1_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-285042010")
					.when()
						.get("/api/Category/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, "Status Code is less than 500");
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Pet")
	@DisplayName("GET /api/Pet")
	public void test_4mygbuLViM2B_null() {
		String testResultId = "test_4mygbuLViM2B_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/Pet");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, "Status Code is less than 500");
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/Pet/{id}")
	@DisplayName("GET /api/Pet/{id}")
	public void test_7s6QsQgEeWJE_null() {
		String testResultId = "test_7s6QsQgEeWJE_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-1012659555")
					.when()
						.get("/api/Pet/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, "Status Code is less than 500");
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/PhotoUrl")
	@DisplayName("GET /api/PhotoUrl")
	public void test_3lHqDA95ve6Z_null() {
		String testResultId = "test_3lHqDA95ve6Z_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
					.when()
						.get("/api/PhotoUrl");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, "Status Code is less than 500");
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/PhotoUrl")
	@DisplayName("POST /api/PhotoUrl")
	public void test_MlMPcnHKtood_null() {
		String testResultId = "test_MlMPcnHKtood_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 870881592,\"url\": \"OC\"}")
					.when()
						.post("/api/PhotoUrl");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, "Status Code is less than 500");
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/PhotoUrl")
	@DisplayName("PUT /api/PhotoUrl")
	public void test_mOBsMJjyt1z8_null() {
		String testResultId = "test_mOBsMJjyt1z8_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": -232611872,\"url\": \"fEaTaIaHoJ\"}")
					.when()
						.put("/api/PhotoUrl");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, "Status Code is less than 500");
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

	@Test
	@Story("/api/PhotoUrl/{id}")
	@DisplayName("GET /api/PhotoUrl/{id}")
	public void test_rscVWsXCb6UF_null() {
		String testResultId = "test_rscVWsXCb6UF_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "1405259152")
					.when()
						.get("/api/PhotoUrl/{id}");

			response.then().log().all();
			Assertions.assertTrue(response.statusCode() < 500, "Status Code is less than 500");
			System.out.println("Test passed.");
		} catch (RuntimeException ex) {
			System.err.println(ex.getMessage());
			Assertions.fail(ex.getMessage());
		}
	}

}
