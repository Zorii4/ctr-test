export interface INotifications {
  id: number
  case: number
  cat: string
}

export interface ICases {
  id: number
  name: string
  description: string
  code: string
}

export interface INormalizeData extends INotifications, ICases {
  read: boolean
}