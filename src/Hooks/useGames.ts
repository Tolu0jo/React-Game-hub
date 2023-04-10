import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface Game{
    id:number,
    name:string
}
interface FetchGame{
    count:number,
    results:Game[]
}
const useGames=()=>{
    const [games,SetGames] = useState<Game[]>([]);
    const [error,setError]=useState("");
  
    useEffect(()=>{//to send request to backend
        const controller = new AbortController()
      apiClient.get<FetchGame>("/games",{signal: controller.signal})
      .then(res=>SetGames(res.data.results))
      .catch(err => {
        if(err instanceof CanceledError)
        return; setError(err.message)})

      return ()=>controller.abort()
      
    },[]);
    return {games,error}
}
export default useGames