import { useQuery } from 'react-query'
import { api } from '../../api'

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

type UsersResponse = {
  users: User[]
}

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get<UsersResponse>('/users')

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

  return users
}

export const useUsers = () => {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5,
  })
}
