# Contact API Spec

## Create Contact

Endpooint:  POST /api/contacts

Headers:

- Authorization: Bearer {token}

Request Body:

```json
{
  "first_name": "Albert",
  "last_name": "Manuel",
  "email": "albert@mail.com",
  "phone": "08123456789"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "first_name": "Albert",
    "last_name": "Manuel",
    "email": "albert@mail.com",
    "phone": "08123456789"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Failed to create a contact"
}
```

## Get Contact

Endpooint:  GET /api/contacts/:contactId

Headers:

- Authorization: Bearer {token}

Params:

- contactId: 1

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "first_name": "Albert",
    "last_name": "Manuel",
    "email": "albert@mail.com",
    "phone": "08123456789"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Contact doesnt exists"
}
```

## Update Contact

Endpooint:  PUT /api/contacts/:contactId

Headers:

- Authorization: Bearer {token}

Params:

- contactId: 1

Request Body:

```json
{
  "id": 1,
  "first_name": "Albert X",
  "last_name": "Manuel Z",
  "email": "albert@mail.com",
  "phone": "08123456789"
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "first_name": "Albert X",
    "last_name": "Manuel Z",
    "email": "albert@mail.com",
    "phone": "08123456789"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Failed to update contact"
}
```

## Remove Contact

Endpooint:  DELETE /api/contacts/:contactId

Headers:

- Authorization: Bearer {token}

Response Body (Success):

```json
{
  "data": true
}
```

Response Body (Failed):

```json
{
  "errors": "Failed to remove contact"
}
```

## Search Contact

Endpoint: GET /api/contacts

Headers:

- Authorization: Bearer {token}

Query Params:

- name: string -> first_name or last_name (optional)
- phone: string -> phone (optional)
- email: string -> email (optional)
- page: number -> default 1
- size: number -> default 10

Response Body (Success):

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Albert",
      "last_name": "Manuel",
      "email": "albert@mail.com",
      "phone": "08123456789"
    },
      {
      "id": 2,
      "first_name": "Manda",
      "last_name": "Mawinei",
      "email": "manda@mail.com",
      "phone": "08123456789"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Failed to get contacts"
}
```
