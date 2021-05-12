import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    box-shadow: 1px 1px 4px -2px rgba(0, 0, 0, 0.5);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      display: block;
    }

    &.highlight-background {
      background: var(--green);
      color: white;
    }
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`
