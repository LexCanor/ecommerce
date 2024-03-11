import axios from "axios";

const useAuth = () => {
  const authApi = (url, data) => {
    axios.post(url, data)
        .then(res => {
            console.log(res.data);
            'token' in res.data && localStorage.setItem('token', res.data.token);
        })
        .catch(err => console.log(err));
  }
  return authApi;
}

export default useAuth;