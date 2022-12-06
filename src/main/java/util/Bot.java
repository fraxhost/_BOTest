package util;

import configuration.generators.DefaultTestConfigurationGenerator;
import configuration.pojos.TestConfigurationObject;
import helpers.BoTestIO;
import helpers.JsonToYaml;
import org.apache.log4j.BasicConfigurator;
import specification.OpenApiSpecification;
import testcases.TestCase;
import testcases.generators.AbstractTestCaseGenerator;
import writers.RestAssuredTestWriter;

import java.io.IOException;
import java.util.List;

public class Bot {
    public static void runBot(String jsonOASPath, String serverInfo) throws IOException {
        /**
         * Logger Configuration
         */
         BasicConfigurator.configure();

        /**
         * JSON to YAML
         */
        String yamlOASPath = JsonToYaml.yamlPath(jsonOASPath, serverInfo);


        /**
         * Load Specification
         */
        OpenApiSpecification openApiSpecification = new OpenApiSpecification(yamlOASPath);

        System.out.println("Specification Loaded...");
        BoTestIO.writeToFile("src/main/resources/intermediary-generated-files/api-specification/" +
                        openApiSpecification.getSpecification().getInfo().getTitle() + ".js",
                openApiSpecification.getSpecification().toString());


        /**
         * Generate Test Configuration
         */
        DefaultTestConfigurationGenerator defaultTestConfigurationGenerator = new DefaultTestConfigurationGenerator(
                openApiSpecification);
        TestConfigurationObject testConfigurationObject = defaultTestConfigurationGenerator.generate();

        System.out.println("Test Configuration Generated...");
        BoTestIO.writeToFile("src/main/resources/intermediary-generated-files/test-configuration/" +
                        openApiSpecification.getSpecification().getInfo().getTitle() + ".js",
                testConfigurationObject.getTestConfiguration().toString());


        /**
         * Generate Test Cases
         */
        AbstractTestCaseGenerator abstractTestCaseGenerator = new AbstractTestCaseGenerator(
                openApiSpecification,
                testConfigurationObject);
        List<TestCase> testCases = abstractTestCaseGenerator.generateTestCases();

        System.out.println("Abstract Test Case Generated...");
        BoTestIO.writeToFile("src/main/resources/intermediary-generated-files/test-cases/" +
                        openApiSpecification.getSpecification().getInfo().getTitle() + ".js",
                testCases.toString());


        /**
         * Write REST Assured Tests
         */
        RestAssuredTestWriter testWriter = new RestAssuredTestWriter(openApiSpecification, testCases);
        String testClass = testWriter.writeTest();
        BoTestIO.writeToFile("src/test/java/" + testWriter.getClassName() + ".java", testClass);

        System.out.println("REST Assured Tests Generated...");
        BoTestIO.writeToFile("src/main/resources/intermediary-generated-files/test-classes/" +
                        openApiSpecification.getSpecification().getInfo().getTitle() + ".js", testClass);


        /**
         * Execute Tests
         */
        //JUnitTestRunner testRunner = new JUnitTestRunner(testWriter.getClassName());
        //testRunner.execute();

        // run maven tests
        Command.execute("mvn clean test");
        Command.execute("allure serve target/allure-results");

        System.out.println("All Tests Executed...");

    }
}
