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
	public void test_5PwMVr0ENYed_null() {
		String testResultId = "test_5PwMVr0ENYed_null";

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
	public void test_CzhGU3PvawuD_null() {
		String testResultId = "test_CzhGU3PvawuD_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 1969491915,\"name\": \"Ib\"}")
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
	public void test_HvTw0LjNIyQG_null() {
		String testResultId = "test_HvTw0LjNIyQG_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 1992596158,\"name\": \"shzTGRuEY\"}")
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
	public void test_cL04Nz7eWV06_null() {
		String testResultId = "test_cL04Nz7eWV06_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "984123674")
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
	public void test_mizZ8pCrIMcK_null() {
		String testResultId = "test_mizZ8pCrIMcK_null";

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
	public void test_UChlMd8gAHcC_null() {
		String testResultId = "test_UChlMd8gAHcC_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "174497454")
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
	public void test_cgzSwLG8vPBr_null() {
		String testResultId = "test_cgzSwLG8vPBr_null";

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
	public void test_mOUfVOHAnqBq_null() {
		String testResultId = "test_mOUfVOHAnqBq_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 1702927152,\"url\": \"lkBaB\"}")
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
	public void test_fxncNCZZ7cyx_null() {
		String testResultId = "test_fxncNCZZ7cyx_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 943851671,\"url\": \"jxIEkMT\"}")
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
	public void test_xDZGRIsTw7Rr_null() {
		String testResultId = "test_xDZGRIsTw7Rr_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "29400050")
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
