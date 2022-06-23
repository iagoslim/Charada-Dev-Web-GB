import create from "zustand"
import { persist } from "zustand/middleware"

interface ExampleObject {
    palavra: string,
    tentativas: string[]
}

export const useStore = create<ExampleObject>()(persist(
  (set) => ({
    palavra: 'carro',
    tentativas: ['tenis', 'penis']

  }),
  {
    name: "charada", // name of item in the storage (must be unique)
   
  }
))

