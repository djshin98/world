var axios = require('axios');

export function getTest(id, str) {
    return axios.get('http://localhost:8081/' + id, {
        params: {
            url: str
        }
    });
}