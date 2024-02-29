import { useMemo } from 'react'
import { useAppSelector } from './store'
import { selectCurrenIUser } from '../reducers/auth'

const useAuth = () => {
  const currentUser = useAppSelector(selectCurrenIUser)

  return useMemo(() => ({ currentUser }), [currentUser])
}

export default useAuth;