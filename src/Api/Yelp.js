
import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer OmmSgPK0px8rTjlSzs-vqjBO1syq2Qy0oAZOtzGGoN8SjpybFmoBBGhRJ2VjXDdJbH6Ilz0iSKL-Bb2Fw_oXby1yG-GQwg9t2FOgzd-T3SI1ZuJKHsrSmezoKsCxYXYx'
    }
})

