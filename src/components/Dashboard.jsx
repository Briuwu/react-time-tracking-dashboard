import { useState } from 'react'
import Card from './Card'
import Profile from './images/image-jeremy.png'

const Dashboard = () => {
  const [btn, setBtn] = useState("Weekly")
  const [activeBtn, setActiveBtn] = useState("Weekly")

  const handleBtn = (e) => {
    const text = e.target.innerText
    setBtn(text)
    setActiveBtn(text)
  }

  return (
    <main className="dashboard">
      {/* PROFILE */}
      <div className="profile">
        <div className="profile__desc">
          <div className='profile__desc-profile'><img src={Profile} alt="" /></div>
          <p className="profile__desc-report"><span>Report for <br /></span>Jeremy Robson</p>
        </div>
        <div className="profile__btn">
          <button className={activeBtn === "Daily" ? "active" : ""} onClick={(e) => handleBtn(e)}>Daily</button>
          <button className={activeBtn === "Weekly" ? "active" : ""} onClick={(e) => handleBtn(e)}>Weekly</button>
          <button className={activeBtn === "Monthly" ? "active" : ""} onClick={(e) => handleBtn(e)}>Monthly</button>
        </div>
      </div>
      {/* CARDS */}
      <Card time={btn} />
    </main>
  )
}

export default Dashboard