import { API_URL } from '../constants';
const tasksApi = `${API_URL}/task`;

export function save(task) {
  return fetch(tasksApi, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  })
  .then(response => response.json());
}

export function update(task) {
  const updateUrl = `${tasksApi}/${task._id}`;
  return fetch(updateUrl, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  })
  .then(response => response.json());
}

export function destroy(id) {
  const deleteUrl = `${tasksApi}/${id}`;
  return fetch(deleteUrl, { method: 'DELETE' });
}

export function getAll() {
  return fetch(tasksApi);
}
