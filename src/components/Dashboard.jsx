import { useState } from 'react'
import Card from './Card'
import Profile from './images/image-jeremy.png'

const Dashboard = () => {
  const [btn, setBtn] = useState("Weekly")

  const handleBtn = (e) => {
    const text = e.target.innerText
    setBtn(text)
  }

  return (
    <main className="dashboard">
      {/* PROFILE */}
      <div className="profile">
        <div className="profile__desc">
          <div className='profile__desc-profile'><img src={Profile} alt="" /></div>
          <h1 className="profile__desc-report"><span>Report for <br /></span>Jeremy Robson</h1>
        </div>
        <div className="profile__btn">
          <button className={btn === "Daily" ? "active" : ""} onClick={handleBtn}>Daily</button>
          <button className={btn === "Weekly" ? "active" : ""} onClick={handleBtn}>Weekly</button>
          <button className={btn === "Monthly" ? "active" : ""} onClick={handleBtn}>Monthly</button>
        </div>
      </div>
      {/* CARDS */}
      <Card time={btn} />
    </main>
  )
}

export default Dashboard