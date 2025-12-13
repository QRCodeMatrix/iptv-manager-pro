import React from 'react'
import { Client, DashboardStats } from './types'

const App: React.FC = () => {
  const [clients] = React.useState<Client[]>([
    {
      id: '1',
      name: 'Cliente Exemplo',
      phone: '11999999999',
      plan: 'Mensal - 4K',
      expirationDate: new Date().toISOString().split('T')[0],
      createdAt: Date.now(),
    },
  ])

  const stats: DashboardStats = {
    total: clients.length,
    active: clients.length,
    expiring: 0,
    expired: 0,
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h1>IPTV Manager Pro</h1>
      <p>Painel de Gerenciamento de Clientes IPTV</p>
      <div style={{ marginTop: '20px' }}>
        <h2>Estatísticas</h2>
        <p>Total de Clientes: {stats.total}</p>
        <p>Clientes Ativos: {stats.active}</p>
      </div>
    </div>
  )
}

export default App
