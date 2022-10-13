import axios from 'axios'

class HttpService {



  disableUserAxis = (uid,flag) => {

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.REACT_APP_API_KEY,
      }
    }
    const data = {
        uid: uid,
        flag: flag,
    }
    return axios.post('https://us-central1-goubi-360003.cloudfunctions.net/onDisableUser', data,options);
     
  };

}

export default new HttpService();