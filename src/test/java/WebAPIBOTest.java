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
		RestAssured.baseURI = "null";
	}

	@Test
	@Story("/api/Category")
	@DisplayName("GET /api/Category")
	public void test_2EDO1XiER2wg_null() {
		String testResultId = "test_2EDO1XiER2wg_null";

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
	public void test_a8pxlWXxfrdh_null() {
		String testResultId = "test_a8pxlWXxfrdh_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 1866636770,\"name\": \"H\"}")
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
	public void test_6FpKUmCRbFY6_null() {
		String testResultId = "test_6FpKUmCRbFY6_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": -1463773086,\"name\": \"RTmYBz\"}")
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
	public void test_G8QRbdgqMen7_null() {
		String testResultId = "test_G8QRbdgqMen7_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-521892454")
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
	public void test_8M8IkUbRha7H_null() {
		String testResultId = "test_8M8IkUbRha7H_null";

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
	public void test_uzo11uXXw961_null() {
		String testResultId = "test_uzo11uXXw961_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "1065621695")
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
	public void test_BwJkXOkP8isI_null() {
		String testResultId = "test_BwJkXOkP8isI_null";

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
	public void test_kJxVMlBmhWE9_null() {
		String testResultId = "test_kJxVMlBmhWE9_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 1592037208,\"url\": \"JGt\"}")
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
	public void test_uGKOqlJkN8A7_null() {
		String testResultId = "test_uGKOqlJkN8A7_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 648022785,\"url\": \"yHF\"}")
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
	public void test_z0sAFL8ibW8I_null() {
		String testResultId = "test_z0sAFL8ibW8I_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-819327397")
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
