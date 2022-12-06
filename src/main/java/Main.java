import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.stage.FileChooser;
import javafx.stage.Stage;
import util.Bot;

import java.io.File;
import java.io.IOException;

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

            // create a specification file label
            Label specificationFileLabel = new Label("No files selected ...");
            // create a server info label
            Label serverInfo = new Label("Server Information");

            // create a text field
            TextField textFieldForServer = new TextField();

            // create a file button
            Button specificationFileButton = new Button("Select File");
            // create an event handler for file button
            EventHandler<ActionEvent> fileEvent =
                    e -> {
                        // get the file selected
                        File file = fil_chooser.showOpenDialog(primaryStage);

                        if (file != null) {
                            specificationFileLabel.setText(file.getAbsolutePath());
                        }

                        if (file != null) {
                            System.out.println(file.getAbsolutePath());
                            specificationFileLocation = file.getAbsolutePath();
                        }
                    };
            specificationFileButton.setOnAction(fileEvent);

            // create a run bot button
            Button runBotButton = new Button("Run Bot");
            // create an event handler for file button
            EventHandler<ActionEvent> runBotEvent =
                    e -> {
                        try {
                            Bot.runBot(specificationFileLocation, textFieldForServer.getText());
                        } catch (IOException ex) {
                            throw new RuntimeException(ex);
                        }
                    };
            runBotButton.setOnAction(runBotEvent);

            // create a HBox for server info
            HBox hbServer = new HBox();
            hbServer.getChildren().addAll(serverInfo, textFieldForServer);
            hbServer.setSpacing(10);

            // create a HBox for specification file info
            HBox hbSpecificationFile = new HBox();
            hbSpecificationFile.getChildren().addAll(specificationFileLabel, specificationFileButton);
            hbSpecificationFile.setSpacing(10);

            // create a VBox
            VBox vbox = new VBox(30, hbSpecificationFile, hbServer, runBotButton);
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
}
