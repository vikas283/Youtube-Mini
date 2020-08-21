import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID lw0kv89D-Un4WCHG-bor8iQtALBhcRK1NF43NfUZyd4'
    }
});