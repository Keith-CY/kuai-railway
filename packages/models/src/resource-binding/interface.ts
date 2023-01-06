import { ActorURI } from '../actor'
import { LockscriptHash, TypescriptHash } from './types'

export interface ResourceBindingRegistry {
  uri: ActorURI
}

export interface ResourceBindingManagerMessage {
  type: 'register' | 'revoke'
  register?: {
    typescriptHash: TypescriptHash
    lockscriptHash: LockscriptHash
  } & ResourceBindingRegistry
  revoke?: {
    uri: ActorURI
  }
}
