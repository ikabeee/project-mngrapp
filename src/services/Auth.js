import api from '../config/api'

const login =(data)=>  api.post('/auth/login', data);


const getProfile = () => api.get('/auth/profile');

const logout = () => api.post('/auth/logout');

const validateSecurityAnswer = (data) => api.post('/auth/validate-security-answer', data);


const AuthService = {
    login, getProfile, logout, validateSecurityAnswer
}

export default AuthService;
