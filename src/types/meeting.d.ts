export type TMeeting = {
  creator: string
  participants: { username: string; vid: boolean; aud: boolean }[]
}
export type TSetMeeting = {
  status: 'SUCCESS' | 'ERROR'
  msg: string
  data: TMeeting | null
}
