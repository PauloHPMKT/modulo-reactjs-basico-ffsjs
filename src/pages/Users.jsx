import React, { useEffect, useState } from 'react'

import Loading from '../components/Loading'

const Users = () => {

  const[users, setUser] = useState([])
  const[isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`
    setIsLoading(true)

    fetch(url)
      .then(res => res.json())
      .then(dataUser => {
        setUser(dataUser)
        setIsLoading(false)
      })

  }, [])

  return(
    <>
      <Loading visible={isLoading} />
      {
        users.map(user => {
          return(
            <div>
              <span>{user.id} - {user.name} - {user.username}</span>
            </div>
          )
        })
      }
    </>
  )
}

export default Users