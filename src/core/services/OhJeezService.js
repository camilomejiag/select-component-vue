import axios from 'axios'

function ohJeezService() {
    return axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.data)
}

export { ohJeezService };