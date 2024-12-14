import React, { createContext, ReactNode, useReducer, useContext } from 'react'
import { Message, TParticipant } from '../types'

const configuration = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    }
  ]
}

interface RoomState {
  participants: TParticipant[]
  creator: string
  messages: Message[]
  roomId: string
  pc: RTCPeerConnection | null
}

interface RoomContextProps extends RoomState {}

const initialState: RoomState = {
  participants: [],
  creator: '',
  messages: [],
  roomId: '',
  pc: null
}

type Actions =
  | { type: 'ADD_PERSON'; payload: TParticipant }
  | { type: 'REMOVE_PERSON'; payload: string }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_ROOM'; payload: string }
  | { type: 'SET_PARTICIPANTS'; payload: TParticipant[] }
  | { type: 'SET_CREATOR'; payload: string }
  | null

function roomReducer(state: RoomState, action: Actions): RoomState {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        participants: [...state.participants, action.payload]
      }
    case 'REMOVE_PERSON':
      return {
        ...state,
        participants: state.participants.filter((person) => person !== action.payload)
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

// Create context with default values
const RoomContext = createContext<RoomContextProps>({
  ...initialState
})

const RoomDispatchContext = createContext<React.Dispatch<Actions>>(null)

interface RoomProviderProps {
  children: ReactNode
}

// Context provider component
export function RoomProvider({ children }: RoomProviderProps) {
  const [state, dispatch] = useReducer(roomReducer, initialState, undefined)

  return (
    <RoomContext.Provider value={{ ...state }}>
      <RoomDispatchContext.Provider value={dispatch}>{children}</RoomDispatchContext.Provider>
    </RoomContext.Provider>
  )
}

// Custom hook to use the RoomContext
export const useRoomContext = () => {
  return useContext(RoomContext)
}
export function useRoomDispatch() {
  return useContext(RoomDispatchContext)
}
