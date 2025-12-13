export enum ClientStatus {
  ACTIVE = 'Ativo',
  EXPIRING_SOON = 'Vence em Breve',
  EXPIRED = 'Vencido',
}

export interface Client {
  id: string
  name: string
  phone: string
  plan: string
  expirationDate: string // ISO string YYYY-MM-DD
  notes?: string
  createdAt: number
}

export interface DashboardStats {
  total: number
  active: number
  expiring: number
  expired: number
}

export interface RenewalMessageRequest {
  clientName: string
  planName: string
  expirationDate: string
  daysRemaining: number
}
