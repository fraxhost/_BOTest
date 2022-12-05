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
	public void test_aZ5tytApyoTi_null() {
		String testResultId = "test_aZ5tytApyoTi_null";

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
	public void test_hwTEJRheCZWX_null() {
		String testResultId = "test_hwTEJRheCZWX_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 1803689571,\"name\": \"XXwJld\"}")
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
	public void test_ZjFzoOIXHKy0_null() {
		String testResultId = "test_ZjFzoOIXHKy0_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": -364504519,\"name\": \"BlX\"}")
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
	public void test_vomctv8Mu9e3_null() {
		String testResultId = "test_vomctv8Mu9e3_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-496989936")
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
	public void test_S13xGyNA2XGT_null() {
		String testResultId = "test_S13xGyNA2XGT_null";

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
	public void test_J4eGD3wkrQdZ_null() {
		String testResultId = "test_J4eGD3wkrQdZ_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-1545171236")
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
	public void test_KxI3wIqIqdtz_null() {
		String testResultId = "test_KxI3wIqIqdtz_null";

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
	public void test_2sF7BTPbXE3p_null() {
		String testResultId = "test_2sF7BTPbXE3p_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": -1232856273,\"url\": \"PERcR\"}")
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
	public void test_J5JtSo3PS8Vv_null() {
		String testResultId = "test_J5JtSo3PS8Vv_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 1654954478,\"url\": \"QP\"}")
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
	public void test_6oIAj860xOaW_null() {
		String testResultId = "test_6oIAj860xOaW_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-1304425081")
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
