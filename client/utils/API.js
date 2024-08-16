import axios from 'axios';

export const loginUser = (username, password) => {
  return axios.post('/username', {
    username: username,
    password: password,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


};

export const createUser = (userFormData) => axios.post('/api/users/signup', 
  userFormData,
)
// const getWorkout = (paramId) => {
//   return axios.get(`https://jsonplaceholder.typicode.com/users/${paramId}`);
// };

