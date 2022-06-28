
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const UserAuthApi = createApi({
  reducerPath: 'UserAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/users/' }),
  endpoints: (builder) => ({
    registerUser : builder.mutation(
        {
            query : (user) => {
                return {
                    url : 'signup/',
                    method : 'POST',
                    body : user,
                    headers : {
                        'Content-type':'application/json'
                    }
                }
            }

        }
    ),
    loginUser: builder.mutation({
        query: (user) => {
          return {
            url: 'login/',
            method: 'POST',
            body: user,
            headers: {
              'Content-type': 'application/json',
            }
          }
        }
    }
    ),
    manageExpenses : builder.query(
        {
            query : (access_token) => {
              //  console.log(access_token)
                return {
                    url : 'profileView',
                    method : 'GET',
                    headers : {
                        'authorization' : `Bearer ${access_token}`,
                    }
                }
            }

        }
    ),
    createExpenses: builder.mutation({
      query: (access_token, data) => {
        return {
          url : 'profileView',
          method : 'POST',
          body : data,
          headers : {
              'authorization' : `Bearer ${access_token}`,
          }
        }
      }
  }
  ),
  }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation, useManageExpensesQuery, useCreateExpensesMutation } = UserAuthApi