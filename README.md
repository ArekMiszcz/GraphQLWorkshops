# GraphQL Workshops

Welcome to the GraphQL Workshops repository! This repository contains resources and exercises for learning GraphQL.

## Getting Started

To get started with the workshops, follow these steps:

1. Clone this repository to your local machine.
2. If you have `make` lib installed, you can run `make start` to start workshops container and `make exec` to enter into it
3. If not you can run the container from docker-compose `docker-compose run -p 8080:4000 workshop` and enter into it by executing `docker-compose exec -it workshop bash`
4. Inside the container, per each lesson:
   1. Install the necessary dependencies by running `npm install`.
   2. Start the development server by running `npm start`.
   3. Open your browser and navigate to `http://localhost:8080` to access the workshops.
5. To stop container, execute `make stop` or `docker-compose down --remove-orphans`

## Workshop Structure

The workshops are organized into different modules, each covering a specific topic in GraphQL. Each module contains exercises and examples to help you understand and practice the concepts.

## Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request. Contributions are always welcome!

## License

This project is licensed under the [MIT License](LICENSE).