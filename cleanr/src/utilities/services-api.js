import { getToken } from './users-service';

const BASE_URL = '/api/services';

export function getMyServices(userId) {
    const options = getOptionsGet(userId);
    return fetch(`${BASE_URL}/myServices`, options).then(res => res.json());
}

export function addOne() {
    const options = getOptionsPut();
    return fetch(`${BASE_URL}/create`, options).then(res => res.json());
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

function getOptionsPut() {
  return {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`
    }
  };
}
