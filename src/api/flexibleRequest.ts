import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { api } from "./api";

export interface FLEXIBLE {
  id: number;
  name: string;
  color: string;
  image: File;
  created_at: Date;
  updated_at: Date;
}

export interface FORM_FLEXIBLE {
  name: string;
  color: string;
  image: File;
}

export const useGetFlexibles = () => {
  const [flexibles, setFlexibles] = useState<FLEXIBLE[] | []>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);
  useEffect(() => {
    setIsLoad(true);
    axios
      .get<FLEXIBLE[]>(api("flexible", "/"))
      .then(({ data }) => {
        setFlexibles([...data]);
        setSucces(true);
        setIsLoad(false);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          setError(true);
          setIsLoad(false);
        }
        setIsLoad(false);
      });
  }, []);
  return { flexibles, isLoad, succes, error };
};
