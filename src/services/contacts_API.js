import axios from 'axios';

axios.defaults.baseURL = 'https://64ca4e55700d50e3c704af47.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
}
