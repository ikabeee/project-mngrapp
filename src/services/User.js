import api from '../config/api'

const create =(data)=>  api.post('/user/create', data);

const changeStatus = (id, data) => api.put(`/user/changeStatus/${id}`, data);

const update = (data, id) => api.patch(`/user/edit/${id}`, data);

const findAll =()=> api.get('/user/all');

const deleteUser =(id)=>api.delete(`/user/delete/${id}`)
const UserService = {
    create, changeStatus, update, findAll, deleteUser
}

export default UserService;
