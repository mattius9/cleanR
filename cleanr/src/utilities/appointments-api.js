import { getToken } from './users-service';

const BASE_URL = '/api/appointments';


export function getAppointments(userId) {
    const options = getOptionsGet(userId);
    return fetch(`${BASE_URL}/client/index`, options).then(res => res.json());
}

export function makeAppointment(appointment){
    const options = getOptionsPost(appointment);
    return fetch(`${BASE_URL}/client/create`, options).then(res => res.json());
}

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

function getOptionsPost(appointment) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(appointment)
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
