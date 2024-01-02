import { type Message } from 'ai'

export interface Chat extends Record<string, any> {
  id: string
  title: string
  created_at: Date
  user_id: string
  messages: Message[]
  share_path?: string
}

export type ServerActionResult<Result> = Promise<
  | Result
  | {
      error: string
    }
>
