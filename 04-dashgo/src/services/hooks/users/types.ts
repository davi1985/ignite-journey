export type User = {
  id: string
  name: string
  email: string
  created_at: string
}

export type UsersResponse = {
  users: User[]
}

export type GetUsersResponse = {
  totalCount: number
  users: User[]
} // it's equatl to Promise<User[] & { totalCount: number }
