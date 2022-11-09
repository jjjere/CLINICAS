import { createAsyncThunk } from "@reduxjs/toolkit";
import { DonorProps } from "../interfaces";
import { getDonors, postAdmin, deleteDonors } from "../service/index";

export const add = createAsyncThunk(
  "donor/post",
  async (data: DonorProps) => await postAdmin(data)
);

export const set = createAsyncThunk(
  "donors/get",
  async () => await getDonors()
);

export const remove = createAsyncThunk(
  "donors/delete",
  async (ids: number[]) => await deleteDonors(ids)
);
