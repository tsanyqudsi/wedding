import { proxy } from "valtio";
import { atomWithProxy  } from 'jotai/valtio'

export const graphQLProxy = proxy({data: {}})
export const graphQLAtom = atomWithProxy(graphQLProxy)