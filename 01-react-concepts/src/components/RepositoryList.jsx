import { RepositoryItem } from './RepositoryItem'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'http://github.com/unform/unform',
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}
