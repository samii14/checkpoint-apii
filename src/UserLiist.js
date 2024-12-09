import React from 'react'

const UserList = ({user}) => {
  return (
    <div>


<div class="card">
    <img src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no" alt="Person" class="card__image"/>
    <p class="card__name">{user.name}</p>
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <div class="grid-container">

      <div class="grid-child-posts">
        305 Post
      </div>

      <div class="grid-child-followers">
        2643 Likes
      </div>

    </div>
    
    <button class="btn draw-border">Follow</button>
    <button class="btn draw-border">Message</button>

  </div>
     
    </div>
  )
}

export default UserList
