import { Profile } from '@/core/types/profile'

export type Comments ={
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: Profile
}
