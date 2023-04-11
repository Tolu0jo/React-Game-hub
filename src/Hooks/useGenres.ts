// import { CanceledError } from "axios";
// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// interface Genre{
//     id: number;
//     name: string;
// }
// interface FetchGenre{
//     count: number;
//     results:Genre[]
// }

// const useGenres=()=>{
//     const [genres, SetGenres] = useState<Genre[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);
  
//     useEffect(() => {
//       //to send request to backend
//       const controller = new AbortController();
//       setLoading(true);
//       apiClient
//         .get<FetchGenre>("/games", { signal: controller.signal })
//         .then((res) => {
//           SetGenres(res.data.results);
//           setLoading(false);
//         })
//         .catch((err) => {
//           if (err instanceof CanceledError) return;
//           setError(err.message);
//           setLoading(false);
//         });
  
//       return () => controller.abort();
//     }, []);
//     return { genres, error,isLoading};
// }export default useGenres
import useData from "./useData";

export interface Genre{
    id: number;
    name: string;
    image_background:string
}


const useGenres=()=> useData<Genre>('/genres')



export default useGenres