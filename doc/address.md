# Address API Spec

## Create Address

Endpoint: POST /api/contact/:contactId/addresses

Headers:

- Authorization: Bearer {token}

Request Body:

```json
{
 "street": "Example Street (optional)",
 "city": "Example city (optional)",
 "province": "Example Province (optional)",
 "country": "Example  country",
 "postal_code": "123123" 
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "street": "Example Street (optional)",
    "city": "Example city (optional)",
    "province": "Example Province (optional)",
    "country": "Example  country",
    "postal_code": "123123" 
  }
}
```

Response Body (Failed):

```json
{
 "errors": "Failed create an address"
}
```

## Get Address

Endpoint: GET /api/contact/:contactId/addresses/:addressId

Headers:

- Authorization: Bearer {token}

Query Params:

- addressId: number

Response Body (Success):

```json
{
   "data": {
    "id": 1,
    "street": "Example Street (optional)",
    "city": "Example city (optional)",
    "province": "Example Province (optional)",
    "country": "Example  country",
    "postal_code": "123123" 
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Address doesnt exists"
}
```

## Update Address

Endpoint: PUT /api/contact/:contactId/addresses/:addressId

Headers:

- Authorization: Bearer {token}

Query Params:

- addressId: number

Request Body:

```json
{
  "id": 1,
  "street": "Example Street (optional)",
  "city": "Example city (optional)",
  "province": "Example Province (optional)",
  "country": "Example  country",
  "postal_code": "123123" 
}
```

Response Body (Success):

```json
{
  "data": {
    "id": 1,
    "street": "Example Street (optional)",
    "city": "Example city (optional)",
    "province": "Example Province (optional)",
    "country": "Example  country",
    "postal_code": "123123" 
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Failed updated address"
}
```

## Remove Address

Endpoint: DELETE /api/contact/:contactId/addresses/:addressId

Headers:

- Authorization: Bearer {token}

Query Params:

- addressId: number

Response Body (Success):

```json
{
  "data": true
}
```

Response Body (Failed):

```json
{
  "errors": "Failed delete address"
}
```

## List Addresses

Endpoint: GET /api/contact/:contactId/addresses

Headers:

- Authorization: Bearer {token}

Response Body (Success):

```json
{
  "data": [
    {
      "id": 1,
      "street": "Example Street (optional)",
      "city": "Example city (optional)",
      "province": "Example Province (optional)",
      "country": "Example  country",
      "postal_code": "123123" 
    },
      {
      "id": 2,
      "street": "Example Street (optional)",
      "city": "Example city (optional)",
      "province": "Example Province (optional)",
      "country": "Example  country",
      "postal_code": "123123" 
    },
  ]
}
```
