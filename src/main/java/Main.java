import configuration.generators.DefaultTestConfigurationGenerator;
import configuration.pojos.TestConfigurationObject;
import helpers.BoTestIO;
import helpers.JsonToYaml;
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.FileChooser;
import javafx.stage.Stage;
import specification.OpenApiSpecification;
import testcases.TestCase;
import testcases.generators.AbstractTestCaseGenerator;
import util.Command;
import writers.RestAssuredTestWriter;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class Main extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    String specificationFileLocation;

    @Override
    public void start(Stage primaryStage) {
        try {
            // title for the stage
            primaryStage.setTitle("BOTest");

            // create a File chooser
            FileChooser fil_chooser = new FileChooser();
            fil_chooser.setTitle("Select File");
            fil_chooser.setInitialDirectory(new File("C:\\Users\\ahmed\\IdeaProjects\\BOTest-GUI\\src\\main\\resources\\open-api-specifications"));

            // create a Label
            Label label = new Label("No files selected ...");

            // create a file button
            Button fileButton = new Button("Select File");
            // create an event handler for file button
            EventHandler<ActionEvent> fileEvent =
                    e -> {
                        // get the file selected
                        File file = fil_chooser.showOpenDialog(primaryStage);

                        if (file != null) {
                            label.setText(file.getAbsolutePath());
                        }

                        if (file != null) {
                            System.out.println(file.getAbsolutePath());
                            specificationFileLocation = file.getAbsolutePath();
                        }
                    };
            fileButton.setOnAction(fileEvent);

            // create a run bot button
            Button runBotButton = new Button("Run Bot");
            // create an event handler for file button
            EventHandler<ActionEvent> runBotEvent =
                    e -> {
                        try {
                            runBot(specificationFileLocation);
                        } catch (IOException ex) {
                            throw new RuntimeException(ex);
                        }
                    };
            runBotButton.setOnAction(runBotEvent);

            // create a VBox
            VBox vbox = new VBox(30, label, fileButton, runBotButton);
            // set Alignment
            vbox.setAlignment(Pos.CENTER);
            // create a scene
            Scene scene = new Scene(vbox, 800, 500);
            // set the scene
            primaryStage.setScene(scene);

            primaryStage.show();
        }

        catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    private void runBot(String jsonOASPath) throws IOException {
        /**
         * Logger Configuration
         */
        // BasicConfigurator.configure();

        /**
         * JSON to YAML
         */
        String yamlOASPath = JsonToYaml.yamlPath(jsonOASPath);


        /**
         * Load Specification
         */
        OpenApiSpecification openApiSpecification = new OpenApiSpecification(yamlOASPath);

        System.out.println("##########");
        System.out.println("Specification Loaded...");
        System.out.println("##########");
        BoTestIO.writeToFile("C:\\Users\\ahmed\\IdeaProjects\\BOTest-GUI\\src\\main\\resources\\intermediary-generated-files\\api-specification\\" +
                        openApiSpecification.getSpecification().getInfo().getTitle() + ".js",
                openApiSpecification.getSpecification().toString());


        /**
         * Generate Test Configuration
         */
        DefaultTestConfigurationGenerator defaultTestConfigurationGenerator = new DefaultTestConfigurationGenerator(
                openApiSpecification);
        TestConfigurationObject testConfigurationObject = defaultTestConfigurationGenerator.generate();

        System.out.println("##########");
        System.out.println("Test Configuration Generated...");
        System.out.println("##########");
        BoTestIO.writeToFile("C:\\Users\\ahmed\\IdeaProjects\\BOTest-GUI\\src\\main\\resources\\intermediary-generated-files\\test-configuration\\" +
                        openApiSpecification.getSpecification().getInfo().getTitle() + ".js",
                testConfigurationObject.getTestConfiguration().toString());


        /**
         * Generate Test Cases
         */
        AbstractTestCaseGenerator abstractTestCaseGenerator = new AbstractTestCaseGenerator(
                openApiSpecification,
                testConfigurationObject);
        List<TestCase> testCases = abstractTestCaseGenerator.generateTestCases();

        System.out.println("##########");
        System.out.println("Abstract Test Case Generated...");
        System.out.println("##########");
        BoTestIO.writeToFile("C:\\Users\\ahmed\\IdeaProjects\\BOTest-GUI\\src\\main\\resources\\intermediary-generated-files\\test-cases\\" +
                        openApiSpecification.getSpecification().getInfo().getTitle() + ".js",
                testCases.toString());


        /**
         * Write REST Assured Tests
         */
        RestAssuredTestWriter testWriter = new RestAssuredTestWriter(openApiSpecification, testCases);
        String testClass = testWriter.writeTest();
        BoTestIO.writeToFile("C:\\Users\\ahmed\\IdeaProjects\\BOTest-GUI\\src\\test\\java\\" + testWriter.getClassName() + ".java", testClass);

        System.out.println("##########");
        System.out.println("REST Assured Tests Generated...");
        System.out.println("##########");
        BoTestIO.writeToFile("C:\\Users\\ahmed\\IdeaProjects\\BOTest-GUI\\src\\main\\resources\\intermediary-generated-files\\test-classes\\" +
                        openApiSpecification.getSpecification().getInfo().getTitle() + ".js",
                testClass);


        /**
         * Execute Tests
         */
        //JUnitTestRunner testRunner = new JUnitTestRunner(testWriter.getClassName());
        //testRunner.execute();

        // run maven tests
        Command.execute("mvn clean test");
        Command.execute("allure serve target/allure-results");

        System.err.println("shesh shesh");

        System.out.println("##########");
        System.out.println("All Tests Executed...");
        System.out.println("##########");
    }
}
