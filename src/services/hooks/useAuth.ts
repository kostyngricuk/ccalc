import { useMemo } from 'react'
import { useAppSelector } from './store'
import { selectCurrenIUser } from '../reducers/auth'

const useAuth = () => {
  const user = useAppSelector(selectCurrenIUser)

  return useMemo(() => ({ user }), [user])
}

export default useAuth;