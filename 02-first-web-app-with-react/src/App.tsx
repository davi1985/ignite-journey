import { useState } from 'react'
import Modal from 'react-modal'

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal'

Modal.setAppElement('#root')
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <footer className="footer">
        &copy;
        <a href="https://github.com/users/davi1985" target="_blank">
          Davi Silva
        </a>
      </footer>
      <GlobalStyle />
    </>
  )
}
