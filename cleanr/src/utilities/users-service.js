import * as usersAPI from './users-api';

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  console.log("AM I A LOOP?");
  console.log(token);
  if(token)console.log(JSON.parse(atob(token.split('.')[1])).user);
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export async function login(credentials) {
  console.log("Credentials:",credentials);
  try {
    console.log(`LOGIN PROGRESS CHECK 1`);
    const token = await usersAPI.login(credentials);
    console.log(`LOGIN PROGRESS CHECK 2`);
    localStorage.setItem('token', token);
    return getUser();
  } catch (err){
    console.log(err);
    throw new Error('Bad Credentials');
  }
}

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js service module
  try {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();
  } catch(err) {
    console.log(err);
    throw new Error('Invalid Sign Up');
  }
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Check if expired, remove if it is
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}
