import service from '../service/apiService';

export function LoginValidator(email,password) { 
  const response = service.loginUser('auth/login', { email: email.value, password: password.value });
  if (response.status !== 200 || !response.body.token) {
    return '';
  }
  return response.body.token;
}
