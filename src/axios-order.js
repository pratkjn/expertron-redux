import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://pratkjn-react-burger.firebaseio.com/'
});

// instance.defaults.headers.common['Authorization']='AUTH TOKEN FROM AXIOS';
// instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;