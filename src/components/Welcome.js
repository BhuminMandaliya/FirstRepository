import React from 'react'

const Welcome = () => {
  const uname=localStorage.getItem("userName");
    return (
    <div>
        {uname}
    </div>
  )
}

export default Welcome