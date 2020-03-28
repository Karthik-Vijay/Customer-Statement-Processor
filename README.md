# RabobankCsvParser

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.
* Rabobank-csv-parser application is capable of importing the attached csv-file and visualize it on the screen and can do filtering based on minimal issue count.

## Development server

* Download the project from the Google Drive and Import the project folder from the file to the Visual   Studio Code.
* Run npm install to install the node modules in the project folder.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically      reload if you change any of the source files.

## Build

* Run `ng build` to build the project. 
* The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests and checking code-coverage

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Run `ng test --code-coverage` to check the percentage of code covered by unit testing.
* Check the code coverage folder is created in the project folder
* Click on the index.html file in the coverage folder to check the code coverage in the browser

## Outputs Expected

* The page will be displayed with the field to select the file from the computer
* The records will be displayed in the screen from the {filename}.csv once the user selects the file     from my computer
* Sorting will be done when the user clicks on any header column
* Filtering can be done by entering any issue counts ,if not exists it will show no records found

## Assumptions

* The file to the processed should be found in the assets folder
* Any number of files can be put in the folder but the format should be csv


