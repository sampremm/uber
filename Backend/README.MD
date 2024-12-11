Here is the README.md based on the provided backend API documentation:

# API Documentation

This API allows users and captains to register, log in, retrieve profiles, and perform logout. Additionally, it provides a feature to retrieve coordinates for an address.

---

## Endpoints

### 1. `/users/register`
**Description:** Registers a new user by creating a user account with the provided information.

**HTTP Method:** POST

**Request Body:**
```json
{
  "fullname": {
    "firstname": "string (required, min 3 chars)",
    "lastname": "string (optional, min 3 chars)"
  },
  "email": "string (required, valid email)",
  "password": "string (required, min 6 chars)"
}

Example Response:

{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "token": "JWT Token"
  }
}

2. /users/login

Description: Authenticates a user using their email and password, returning a JWT token upon successful login.

HTTP Method: POST

Request Body:

{
  "email": "string (required, valid email)",
  "password": "string (required, min 6 chars)"
}

Example Response:

{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "token": "JWT Token"
  }
}

3. /users/profile

Description: Retrieves the profile information of the currently authenticated user.

HTTP Method: GET

Authentication: Requires a valid JWT token in the Authorization header: Authorization: Bearer <token>

Example Response:

{
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}

4. /users/logout

Description: Logs out the current user and blacklists the token provided in the cookie or headers.

HTTP Method: GET

Authentication: Requires a valid JWT token in the Authorization header or cookie.

Example Response:

{
  "message": "Logout successfully"
}

5. /captains/register

Description: Registers a new captain by creating a captain account with the provided information.

HTTP Method: POST

Request Body:

{
  "fullname": {
    "firstname": "string (required, min 3 chars)",
    "lastname": "string (optional)"
  },
  "email": "string (required, valid email)",
  "password": "string (required, min 6 chars)",
  "vehicle": {
    "color": "string (required, min 3 chars)",
    "plate": "string (required, min 3 chars)",
    "capacity": "number (required, min 1)",
    "vehicleType": "string (required, one of 'car', 'motorcycle', or 'auto')"
  }
}

Example Response:

{
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": 4,
      "vehicleType": "car"
    },
    "token": "JWT Token"
  }
}

6. /captains/login

Description: Authenticates a captain using their email and password, returning a JWT token upon successful login.

HTTP Method: POST

Request Body:

{
  "email": "string (required, valid email)",
  "password": "string (required, min 6 chars)"
}

Example Response:

{
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": 4,
      "vehicleType": "car"
    },
    "token": "JWT Token"
  }
}

7. /captains/profile

Description: Retrieves the profile information of the currently authenticated captain.

HTTP Method: GET

Authentication: Requires a valid JWT token in the Authorization header: Authorization: Bearer <token>

Example Response:

{
  "captain": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}

8. /captains/logout

Description: Logs out the current captain and blacklists the token provided in the cookie or headers.

HTTP Method: GET

Authentication: Requires a valid JWT token in the Authorization header or cookie.

Example Response:

{
  "message": "Logout successfully"
}

Error Codes:
	•	400 Bad Request: If the address parameter is missing or invalid.
	•	404 Not Found: If the coordinates for the given address could not be found.

Authentication

The API uses JWT tokens for authentication. You will receive a token upon successful login or registration, which must be included in the Authorization header for protected endpoints.

Example of a valid Authorization header:

Authorization: Bearer <JWT Token>


