import React, { createContext, ReactNode, useContext, useReducer, useRef } from 'react'
import { Message, TParticipant } from '../types'

interface RoomState {
  participants: TParticipant[]
  creator: string
  messages: Message[]
  roomId: string
}

interface RoomContextProps extends RoomState {
  localStream: React.MutableRefObject<MediaStream | undefined>
  streams: React.MutableRefObject<Map<string, MediaStream>>
  pcs: React.MutableRefObject<Map<string, RTCPeerConnection>>
}

const initialState: RoomState = {
  participants: [],
  creator: '',
  messages: [],
  roomId: ''
}

type Actions =
  | { type: 'ADD_PARTICIPANT'; payload: TParticipant }
  | { type: 'EDIT_PARTICIPANT'; payload: Partial<TParticipant> & { username: string } }
  | { type: 'REMOVE_PERSON'; payload: string }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_ROOM'; payload: string }
  | { type: 'SET_PARTICIPANTS'; payload: TParticipant[] }
  | { type: 'SET_CREATOR'; payload: string }

function roomReducer(state: RoomState, action: Actions): RoomState {
  switch (action.type) {
    case 'ADD_PARTICIPANT':
      return {
        ...state,
        participants: [...state.participants, action.payload]
      }
    case 'EDIT_PARTICIPANT': {
      return {
        ...state,
        participants: state.participants.map((p) =>
          p.username === action.payload.username ? { ...p, ...action.payload } : p
        )
      }
    }
    case 'REMOVE_PERSON':
      return {
        ...state,
        participants: state.participants.filter((person) => person.username !== action.payload)
      }
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case 'SET_ROOM':
      return {
        ...state,
        roomId: action.payload
      }
    case 'SET_PARTICIPANTS':
      return {
        ...state,
        participants: action.payload
      }
    case 'SET_CREATOR':
      return {
        ...state,
        creator: action.payload
      }
    default:
      return state
  }
}

// Create a default context value
const defaultContextValue: RoomContextProps = {
  ...initialState,
  localStream: { current: undefined } as React.MutableRefObject<MediaStream | undefined>,
  streams: { current: new Map() } as React.MutableRefObject<Map<string, MediaStream>>,
  pcs: { current: new Map() } as React.MutableRefObject<Map<string, RTCPeerConnection>>
}

const RoomContext = createContext<RoomContextProps>(defaultContextValue)
const RoomDispatchContext = createContext<React.Dispatch<Actions>>(() => undefined)

interface RoomProviderProps {
  children: ReactNode
}

export function RoomProvider({ children }: RoomProviderProps) {
  const [state, dispatch] = useReducer(roomReducer, initialState)
  const localStream = useRef<MediaStream>()
  const streams = useRef<Map<string, MediaStream>>(new Map())
  const pcs = useRef<Map<string, RTCPeerConnection>>(new Map())

  return (
    <RoomContext.Provider value={{ ...state, streams, pcs, localStream }}>
      <RoomDispatchContext.Provider value={dispatch}>{children}</RoomDispatchContext.Provider>
    </RoomContext.Provider>
  )
}

export const useRoomContext = () => {
  const context = useContext(RoomContext)
  if (context === undefined) {
    throw new Error('useRoomContext must be used within a RoomProvider')
  }
  return context
}

export function useRoomDispatch() {
  const context = useContext(RoomDispatchContext)
  if (context === undefined) {
    throw new Error('useRoomDispatch must be used within a RoomProvider')
  }
  return context
}
