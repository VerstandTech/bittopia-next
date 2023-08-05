import db from '@/vendor/firebase'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
  type DocumentData,
  type DocumentReference,
  type DocumentSnapshot,
  type QuerySnapshot
} from 'firebase/firestore'

export class DatabaseUtil<T extends Record<string, any>> {
  public async create (
    path: string,
    data: T
  ): Promise<DocumentReference<unknown>> {
    try {
      return await addDoc(collection(db, path), data)
    } catch (e: any) {
      console.error('Error adding document: ', e)
      throw new Error(e.message)
    }
  }

  public async readOne (
    path: string,
    id: string
  ): Promise<QuerySnapshot<DocumentData>> {
    try {
      return await getDocs(collection(db, path, id))
    } catch (e: any) {
      console.error('Error reading documents: ', e)
      throw new Error(e.message)
    }
  }

  public async readMany (path: string): Promise<QuerySnapshot<DocumentData>> {
    try {
      return await getDocs(collection(db, path))
    } catch (e: any) {
      console.error('Error reading document: ', e)
      throw new Error(e.message)
    }
  }

  public async readLatest (path: string): Promise<DocumentData> {
    try {
      const docRef = collection(db, path)
      const q = query(docRef, orderBy('createdAt', 'desc'), limit(1))
      const querySnapshot = await getDocs(q)
      const data = querySnapshot.docs[0].data()
      return data
    } catch (e: any) {
      console.error('Error reading document: ', e)
      throw new Error(e.message)
    }
  }

  public async update (
    path: string,
    id: string,
    data: T
  ): Promise<DocumentSnapshot> {
    try {
      const docRef = doc(db, path)
      await updateDoc(docRef, data)
      return await getDoc(docRef)
    } catch (e: any) {
      console.error('Error updating document: ', e)
      throw new Error(e.message)
    }
  }
}
