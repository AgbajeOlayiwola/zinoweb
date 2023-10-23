import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";
// https://zino-1e15f54a9d19.herokuapp.com/api/v1
const baseUrl = "http://51.20.116.136";
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
    registerNewAgent: builder.mutation({
      query: (newagent) => ({
        url: "/register/agent",
        method: "POST",
        body: newagent,
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
    verifyAgentAddress: builder.mutation({
      query: (body: any) => {
        return {
          url: "/agent/verify/address",
          method: "POST",
          body,
        };
      },
    }),
    verifyAgentExperience: builder.mutation({
      query: (body: any) => {
        return {
          url: "/agent/verify/experience",
          method: "POST",
          body,
        };
      },
    }),
    virtualAccountAgnt: builder.mutation({
      query: (body: any) => {
        return {
          url: "/virtual/customer",
          method: "POST",
          body,
        };
      },
    }),
    editFarmer: builder.mutation({
      query: (body: any) => {
        return {
          url: "/farmer/edit",
          method: "POST",
          body,
        };
      },
    }),
    virtualAccountPin: builder.mutation({
      query: (body: any) => {
        return {
          url: "/transaction/pin",
          method: "PUT",
          body,
        };
      },
    }),
    sendVerificationToken: builder.mutation({
      query: (body: any) => {
        return {
          url: "/account/verification/email/generate_token",
          method: "POST",
          body,
        };
      },
    }),
    sendPhoneVerificationToken: builder.mutation({
      query: (body: any) => {
        return {
          url: "/account/verification/phone_num/generate_token",
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
  useRegisterNewAgentMutation,
  useVerifyAgentAddressMutation,
  useVerifyAgentExperienceMutation,
  useVirtualAccountAgntMutation,
  useVirtualAccountPinMutation,
  useSendVerificationTokenMutation,
  useSendPhoneVerificationTokenMutation,
  useEditFarmerMutation,
} = mutationApi;
