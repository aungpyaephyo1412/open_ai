import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const serviceAPI = createApi({
    reducerPath: 'serviceAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://open-ai21.p.rapidapi.com',
    }),
    tagTypes:['Post'],
    endpoints: (builder) => ({
        getSummary: builder.mutation({
            query: (message) => ({
                url: "/conversation",
                method: "POST",
                header: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': "43ae469ffamsha1b3470098ee84bp1f4f62jsnf14d9cd965e5",
                    'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
                },
                body: {
                    messages: [
                        {
                            role: 'user',
                            content: message
                        }
                    ],
                    max_token: 500,
                    temperature: 1,
                    web_access: false
                }
            }),
            invalidatesTags: ['Post'],
        })
    }),
})

export const { useGetSummaryMutation } = serviceAPI