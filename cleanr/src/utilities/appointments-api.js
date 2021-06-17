import { getToken } from './users-service';

const BASE_URL = '/api/appointments';


export function getAppointments(userId) {
    const options = getOptionsGet(userId);
    return fetch(`${BASE_URL}/client/index`, options).then(res => res.json());
}

// export function getInProximity(){
//   const options = getOptionsGet();
//   return fetch(`${BASE_URL}/`)
// }

// Options Helper Functions

function getOptionsGet(userId) {
    const id = userId
  return {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      user: id
    },
    
  };
}

function getOptionsPost() {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    }
  };
}

function getOptionsPut(userId, data) {
  const id = userId
  const content = data
  return {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
      user: id
    },
    body: JSON.stringify(content)
  };
}