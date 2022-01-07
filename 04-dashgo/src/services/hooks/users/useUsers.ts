import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { api } from '../../api'
import { GetUsersResponse, UsersResponse } from './types'

export const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get<UsersResponse>('/users', {
    params: { page },
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    }
  })

  return { users, totalCount }
}

export const useUsers = (page: number) => {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}
