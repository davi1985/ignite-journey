import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  h3 {
    color: var(--text-title);
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }

  @media (max-width: 720px) {
    overflow-y: hidden;

    h3 {
      text-align: center;
      background: var(--shape);
    }
  }
`
