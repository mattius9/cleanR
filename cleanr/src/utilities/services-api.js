import { getToken } from './users-service';

const BASE_URL = '/api/agents/services';

export function getAll() {
    const options = getOptionsGet();
    return fetch(BASE_URL, options).then(res => res.json());
}

export function addOne() {
    const options = getOptionsPut();
    return fetch(`${BASE_URL}/create`, options).then(res => res.json());
}

// Options Helper Functions

function getOptionsGet() {
  return {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
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
