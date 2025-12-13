import React from 'react'
import { Client } from '../types'

interface RenewalAssistantProps {
  client: Client
  daysRemaining: number
  isOpen: boolean
  onClose: () => void
}

export const RenewalAssistant: React.FC<RenewalAssistantProps> = ({
  client,
  daysRemaining,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null

  const generateMessage = () => {
    if (daysRemaining <= 0) {
      return `O cliente ${client.name} teve seu plano ${client.plan} vencido. Considere entrar em contato para renovação.`
    }
    if (daysRemaining <= 3) {
      return `O cliente ${client.name} tem apenas ${daysRemaining} dias para renovar o plano ${client.plan}. Renove logo!`
    }
    return `O cliente ${client.name} renova em ${daysRemaining} dias.`
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '8px', maxWidth: '500px' }}>
        <h2>Assistente de Renovação com IA</h2>
        <div style={{ marginTop: '20px', padding: '15px', background: '#f0f0f0', borderRadius: '4px' }}>
          <p>{generateMessage()}</p>
        </div>
        <button
          onClick={onClose}
          style={{
            marginTop: '20px',
            background: '#667eea',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Fechar
        </button>
      </div>
    </div>
  )
}

export default RenewalAssistant
