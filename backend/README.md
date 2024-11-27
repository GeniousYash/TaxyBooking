# User Registration Endpoint

## Endpoint
`POST users/register`

## Description
This endpoint allows a new user to register by providing their full name, email, and password. Upon successful registration:
- The user is saved in the database.
- A hashed version of their password is stored securely.
- A JSON Web Token (JWT) is generated and returned along with user details.

### Expected Data
The body of the request must be sent as JSON with the following fields:
- **fullname** (object)
  - `firstname` (string, required): Must be at least 3 characters long.
  - `lastname` (string, required): Must be at least 3 characters long.
- **email** (string, required): Must be a valid email address and unique.
- **password** (string, required): Must be at least 6 characters long.

### Response
- Success Response
- Status Code: 201 Created
- Body:

### Validation Errors
- If the request data is invalid, a response with status code 400 Bad Request is returned:

### Validation Rules
- Email must be a valid email format.
- First Name and Last Name must each be at least 3 characters long.
- Password must be at least 6 characters long.

### Notes
- The password is securely hashed before storing in the database.
- The generated JWT can be used for authentication in subsequent API calls.

## Endpoint
`POST users/login`

## Description
This endpoint allows a user to login by providing their email, and password. Upon successful registration

### Expected Data
The body of the request must be sent as JSON with the following fields:
- **email** (string, required): Must be a valid email address and unique.
- **password** (string, required): Must be at least 6 characters long.
