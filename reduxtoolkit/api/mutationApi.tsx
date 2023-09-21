import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";

const baseUrl = "https://zino-1e15f54a9d19.herokuapp.com/api/v1";
export const mutationApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getCookie("accessToken");
      // headers.set('x-api-key', `${process.env.BASE_KEY}`);
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerNewFarmer: builder.mutation({
      query: (newFarmer) => ({
        url: "/register/farmer",
        method: "POST",
        body: newFarmer,
      }),
    }),
    verifyPhoneToken: builder.mutation({
      query: (body: any) => {
        return {
          url: "/account/verification/phone_num/verify_token",
          method: "POST",
          body,
        };
      },
    }),
    verifyEmailToken: builder.mutation({
      query: (body: any) => {
        return {
          url: "/account/verification/email/verify_token",
          method: "POST",
          body,
        };
      },
    }),
    verifyFarmerId: builder.mutation({
      query: (body: any) => {
        return {
          url: "/farmer/verify",
          method: "POST",
          body,
        };
      },
    }),
    createFarm: builder.mutation({
      query: (body: any) => {
        return {
          url: "/farm/create",
          method: "POST",
          body,
        };
      },
    }),
    editFarm: builder.mutation({
      query: (body: any) => {
        return {
          url: "/farm/edit",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useRegisterNewFarmerMutation,
  useVerifyFarmerIdMutation,
  useVerifyEmailTokenMutation,
  useVerifyPhoneTokenMutation,
  useCreateFarmMutation,
  useEditFarmMutation,
} = mutationApi;
