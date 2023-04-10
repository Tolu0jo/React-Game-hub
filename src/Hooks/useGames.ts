import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface FetchGame {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, SetGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    //to send request to backend
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGame>("/games", { signal: controller.signal })
      .then((res) => {
        SetGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { games, error,isLoading};
};
export default useGames;
