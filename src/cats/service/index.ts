import { v4 } from 'uuid'
// const memory = {
//   '1': {
//     name: 'Mishi',
//     age: 14,
//   },
//   '2': {
//     name: 'Bolita',
//     age: 4,
//   },
// }

// const inMemory: CatDAO = {
//   getAll: async () => {

//   },
//   getById: async (id: number) => {
//     const cat = memory[id];
//     if
//   }
// }

// interface CatDAO {
//   getAll: () => Promise<Cat[]>
// }

// class CatService {
//   private dao: CatDAO
//   constructor(dao: CatDAO) {
//     this.dao = dao
//   }

//   async getAll(): Promise<Cat[]> {
//     return this.dao.getAll()
//   }
// }

export interface Cat {
  id: string
  name: string
  age: number
}

const db: Cat[] = [
  {
    id: '1',
    name: 'Mishi',
    age: 14,
  },
  {
    id: '2',
    name: 'Bolita',
    age: 4,
  },
]

export const getAll = async () => {
  return [...db]
}

export const getById = async (id: string) => {
  return db.find((cat) => cat.id === id)
}

export type CatCreateParams = Omit<Cat, 'id'>

export const create = async (createParams: CatCreateParams) => {
  const { name, age } = createParams
  const cat: Cat = {
    id: v4(),
    name,
    age,
  }
  return db.push(cat)
}
