import React from 'react'

interface StatCardProps {
  title: string
  value: number
  icon?: React.ReactNode
  color?: string
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color = 'blue' }) => {
  return (
    <div style={{
      padding: '20px',
      background: `linear-gradient(135deg, #${color === 'blue' ? '667eea' : color === 'green' ? '66bb6a' : color === 'red' ? 'ef5350' : '667eea'} 0%, #${color === 'blue' ? '764ba2' : color === 'green' ? '43a047' : color === 'red' ? 'e53935' : '764ba2'} 100%)`,
      borderRadius: '12px',
      color: 'white',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '12px', opacity: 0.9, marginBottom: '8px' }}>{title}</div>
      <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{value}</div>
      {icon && <div style={{ fontSize: '24px', marginTop: '8px' }}>{icon}</div>}
    </div>
  )
}

export default StatCard
