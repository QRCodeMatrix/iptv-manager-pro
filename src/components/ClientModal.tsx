import React, { useState } from 'react'
import { Client } from '../types'

interface ClientModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (client: Omit<Client, 'id' | 'createdAt'>) => void
  initialData?: Client | null
}

export const ClientModal: React.FC<ClientModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const [formData, setFormData] = useState<Omit<Client, 'id' | 'createdAt'>>({
    name: initialData?.name || '',
    phone: initialData?.phone || '',
    plan: initialData?.plan || '',
    expirationDate: initialData?.expirationDate || '',
    notes: initialData?.notes || '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  if (!isOpen) return null

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
      <div style={{ background: 'white', padding: '20px', borderRadius: '8px', maxWidth: '500px', width: '90%' }}>
        <h2>Gerenciar Cliente</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <input
            type="text"
            placeholder="Telefone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <input
            type="text"
            placeholder="Plano"
            value={formData.plan}
            onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <input
            type="date"
            value={formData.expirationDate}
            onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <button type="submit" style={{ background: '#667eea', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Salvar
          </button>
          <button type="button" onClick={onClose} style={{ marginLeft: '10px', padding: '10px 20px', cursor: 'pointer' }}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  )
}

export default ClientModal
