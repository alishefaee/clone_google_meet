export type TParticipant = {
  username: string
  sockId: string
  vid: boolean
  aud: boolean
  stream?: MediaStream
  pc?: RTCPeerConnection
}
export type TMeeting = {
  creator: string
  participants: TParticipant[]
}
export type TSetMeeting = {
  status: 'SUCCESS' | 'ERROR'
  msg: string
  data: TMeeting | null
}
export type Message = {
  time: string
  content: string
  username: string
}
