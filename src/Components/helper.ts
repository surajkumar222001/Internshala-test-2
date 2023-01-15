
import axios from "axios"

const { useQuery } = require("react-query")

const getApi = (url: string) => axios.get( url, {
    
  }).then(res => res)

  export const GetUserData = () => {
    const url = "https://gifted-night-production.up.railway.app/api/users"
    return useQuery(url, () => getApi(url))
  }