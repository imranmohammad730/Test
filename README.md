# Test# API Testing with Python's Unittest Framework

This repository contains a simple script that tests an API endpoint using Python's built-in `unittest` framework.

## Requirements

To run the test script, you will need Python 3.6+ and the `requests` library installed in your Python environment.

You can install the required library using pip:


The script will send a GET request to the https://jsonplaceholder.typicode.com/users endpoint, then perform two tests:

1. Verify that the HTTP status code of the response is 200, indicating a successful request.
2. Verify that the user with the username "Kamren" has a city of "Roscoeview".

The results of the test will be printed to your console.

## Troubleshooting

If the test fails, ensure that you have a working internet connection and that the API endpoint is currently available. 

If you receive an import error, ensure that you have the `requests` library installed in your Python environment.

If the user "Kamren" does not live in "Roscoeview", the test will fail. Adjust the expected city as necessary to reflect the current data.
