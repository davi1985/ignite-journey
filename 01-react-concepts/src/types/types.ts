export interface Repository {
  name: string
  description: string
  html_url: string
}

export interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}
