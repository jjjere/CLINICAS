import axios from "axios";
import { api } from "./api";
import { DonorProps } from "../interfaces";

export const postAdmin = async (data: DonorProps) => {
  const res = await axios.post(api.donor, { ...data });
  return {
    ...data,
    id: res.data.id,
    url: res.data.url,
  };
};

export const getDonors = async () => {
  const res = await axios.get(api.donors);
  return res.data;
};

export const deleteDonors = async (ids: number[]) => {
  const res = await axios.delete(api.donors, { data: { ids } });
  return res.data.removed;
};