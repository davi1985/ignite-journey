import { useState } from 'react'
import Modal from 'react-modal'

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal'

import { TransactionProvider } from './TransactionsContext'

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
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  )
}
