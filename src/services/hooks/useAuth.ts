import { useMemo } from 'react'
import { useAppSelector } from './store'
import { selectCurrentUser } from '../reducers/auth'

const useAuth = () => {
  const user = useAppSelector(selectCurrentUser)

  return useMemo(() => ({ user }), [user])
}

export default useAuth;