import axios from 'axios';

console.log('TEST DIMULAI');

axios
  .post('http://202.10.36.62:3030/v1/auth/login', {
    email: 'admin@example.com',
    password: 'admin123',
  })
  .then((res) => {
    console.log('SUKSES');
    console.log(res.status);
  })
  .catch((err) => {
    console.log('GAGAL');
    console.log(err);
  });
