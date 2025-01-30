import api from '../config/api'

const login =(data)=>  api.post('/auth/login', data);


const getProfile = () => api.get('/auth/profile');

const logout = () => api.post('/auth/logout');

const AuthService = {
    login, getProfile, logout
}

export default AuthService;
