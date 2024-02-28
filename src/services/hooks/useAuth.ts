import { useMemo } from 'react'
import { useAppSelector } from './store'
import { selectCurrenIUser, selectCurrentToken } from '../reducers/auth'

const useAuth = () => {
  const currentUser = useAppSelector(selectCurrenIUser)
  const currentToken = useAppSelector(selectCurrentToken)

  return useMemo(() => ({ currentUser, currentToken }), [currentUser, currentToken])
}

export default useAuth;