import qs from 'querystring';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const doGet = (path, params = {}) =>
  new Promise((resolve, reject) =>
    fetch(`${BASE_URL}/api/${path}?${qs.stringify(params)}`, {
      credentials: 'include',
      method: 'GET',
    })
      .then(res => res.json())
      .then(resolve)
      .catch(reject)
  );

export const doPost = (path, body = {}) =>
  new Promise((resolve, reject) =>
    fetch(`${BASE_URL}/api/${path}`, {
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(({ status }) => resolve({ status }))
      .catch(reject)
  );

export const doDelete = path =>
  new Promise((resolve, reject) =>
    fetch(`${BASE_URL}/${path}`, {
      credentials: 'include',
      method: 'DELETE',
    })
      .then(({ status }) => resolve({ status }))
      .catch(reject)
  );
