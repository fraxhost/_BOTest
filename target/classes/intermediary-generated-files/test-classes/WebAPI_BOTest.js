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
	public void test_E5KsoMgEwfQD_null() {
		String testResultId = "test_E5KsoMgEwfQD_null";

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
	public void test_AQ5CHww1A68i_null() {
		String testResultId = "test_AQ5CHww1A68i_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 1979846225,\"name\": \"Mj\"}")
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
	public void test_NKSVmtEMrvnj_null() {
		String testResultId = "test_NKSVmtEMrvnj_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": -1010693305,\"name\": \"Lh\"}")
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
	public void test_BHLPLcMvMX5s_null() {
		String testResultId = "test_BHLPLcMvMX5s_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-1237018180")
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
	public void test_p3fURQ6q6GBr_null() {
		String testResultId = "test_p3fURQ6q6GBr_null";

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
	public void test_WJ2n14WzXWVu_null() {
		String testResultId = "test_WJ2n14WzXWVu_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "-901243395")
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
	public void test_STsXwaOsc6WV_null() {
		String testResultId = "test_STsXwaOsc6WV_null";

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
	public void test_pClRYFL3J6uW_null() {
		String testResultId = "test_pClRYFL3J6uW_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 877005257,\"url\": \"LpsdIRlak\"}")
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
	public void test_GksfF5X1IKgu_null() {
		String testResultId = "test_GksfF5X1IKgu_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.contentType(ContentType.JSON)
						.body("{\"id\": 63868310,\"url\": \"HYejq\"}")
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
	public void test_9mDK7AUd09NJ_null() {
		String testResultId = "test_9mDK7AUd09NJ_null";

		try {
			Response response = RestAssured
					.given()
						.log().all()
						.pathParam("id", "492837989")
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
