import { useQuery } from 'react-query'
import { api } from '../../api'

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get('/users')

  const users: User[] = data.users.map((user: User) => {
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
