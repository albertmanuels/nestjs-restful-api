# User API Spec

## Register User

Endpoint: POST /api/users/register

Request Body:

```json
{
  "username": "albert",
  "password": "1234",
  "name": "Albert Manuel"
}
```

Response Body (Success):

```json
{
  "data": {
    "usernane": "albert",
    "name": "Albert Manuel"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Username already registered"
}
```

## Login User

Endpoint: POST /api/users/login

Request Body:

```json
{
  "username": "albert",
  "password": "1234"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "albert",
    "name": "Albert Manuel",
    "token": "token"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Username or password is wrong"
}
```

## Get User

Endpint: GET /api/users/current

Headers:

- Authorization: Bearer {token}

Response Body (Success):

```json
{
  "data": {
    "username": "albert",
    "name": "Albert Manuel"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint:  PATCH /api/users/current

Header:

- Authorization: Bearer {token}

Request Body:

```json
{
  "password": "98765", // optional, if want to change password
  "name": "Albert Manuel" // optional, if want to change name
}
```

Response Body (Success):

```json
{
  "data": {
    "password": "98765",
    "name": "Albert Manuel"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Failed to update user data"
}
```

## Logout User

Endpoint: DELETE /api/users/current

Headers:

- Authorization: Bearer {token}

Response Body (Success):

```json
{
  "data": null
}
```
