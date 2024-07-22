
// const baseUrl = 'https://6698d3872069c438cd7036bb.mockapi.io/api/V1/users';

// const data = {
//   email: "cool@email.com",
//   firstName: "Iron",
//   lastName: "Man",
//   age: 42,
// }

// const userData = {
//   email: "cool@email.com",
//   firstName: "Shelby",
//   lastName: "Dron",
//   age: 77,
// }

export function getUsersList() {
  return fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
  })
    .then(response => response.json()).then(data => data)

}

export function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
  })
    .then(response => response.json())

}


export function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())


}

export function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },

  })
    .then(response => response.json())

}

export function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())

}


