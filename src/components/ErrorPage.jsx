import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p style={{ color: "gray" }}>
        {error.statusText || error.message}
      </p>
    </div>
  )
}

export default ErrorPage
