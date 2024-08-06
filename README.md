# Iowa Indian Heritage

This repository contains the Spring Boot project for the Indian Heritage & Cultural Center of Eastern Iowa. The application is designed to facilitate educational, cultural, and social activities, promoting Indian heritage and culture while providing community services and support programs.

## Features

- Manage heritage events and activities
- Store and retrieve information about Indian culture
- User-friendly web interface
- Integration with MySQL database
- Responsive design for seamless experience on various devices

## Front-End Technologies

- HTML5
- CSS3
- Bootstrap
- JavaScript
- React.js
- Material-UI

## Getting Started

### Prerequisites

- Java 17 or higher
- Maven
- MySQL

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/iowa-indian-heritage.git
    cd iowa-indian-heritage
    ```

2. Update the `application.properties` file with your MySQL credentials:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/indian_heritage
    spring.datasource.username=yourusername
    spring.datasource.password=yourpassword
    ```

3. Build the project:
    ```sh
    ./mvnw clean install
    ```

4. Run the application:
    ```sh
    ./mvnw spring-boot:run
    ```

## Usage

After starting the application, navigate to `http://localhost:8080` in your web browser to access the web interface.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
