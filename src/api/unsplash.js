import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID JMxp3wv1jTi3yrcEKN0c6ikeZy12KmMN5PkPmjO4ciA',
    },
});
