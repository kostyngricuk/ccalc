import { useMemo } from 'react'
import { useAppSelector } from './store'
import { selectCurrenUser, selectIsChangePass } from '../reducers/auth'

const useAuth = () => {
  const currentUser = useAppSelector(selectCurrenUser)
  const isChangePassword = useAppSelector(selectIsChangePass)

  return useMemo(() => ({ currentUser, isChangePassword }), [currentUser, isChangePassword])
}

export default useAuth;