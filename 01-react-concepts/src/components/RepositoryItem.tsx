import { RepositoryItemProps } from '../types/types'

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="_blank">
        Acessar Repositório
      </a>
    </li>
  )
}
