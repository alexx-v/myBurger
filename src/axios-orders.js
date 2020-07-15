import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://my-burger-e4769.firebaseio.com/',
});

export default instance;
