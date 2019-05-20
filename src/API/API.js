const GATEWAY = 'http://localhost:3000'

export function post(path, body) {
  return fetch(GATEWAY + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}
export function get(path) {
  return fetch(GATEWAY + path).then(res => res.json())
}

export function put(path, order) {
  return fetch(GATEWAY + path + `${order.userID}/${order.proID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
Employee:
{emp_id: ObjectId("5cde62f6ded662b2e14d9321"), emp_name:”liu”,
skills:[ ObjectId("5cde62f9ded662b2e14d9323"),ObjectId("5cde595eded662b2e14d931f")]}
{emp_id:ObjectId("5cde5372ded662b2e14d9319"),emp_name:”mike”,
skills:[ ObjectId("5cde62f9ded662b2e14d9323")]}
skills:
{skill_id: ObjectId("5cde62f9ded662b2e14d9323"),skill_name:”drive”,
friends:[ ObjectId("5cde62f6ded662b2e14d9321"),        ObjectId("5cde5372ded662b2e14d9319")]}
