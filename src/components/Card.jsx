import { useState } from 'react'
import dataJSON from './data.json'

import {ReactComponent as Work} from './images/icon-work.svg'
import {ReactComponent as Play} from './images/icon-play.svg'
import {ReactComponent as Study} from './images/icon-study.svg'
import {ReactComponent as Exercise} from './images/icon-exercise.svg'
import {ReactComponent as Social} from './images/icon-social.svg'
import {ReactComponent as SelfCare} from './images/icon-self-care.svg'
import {ReactComponent as Ellipsis} from './images/icon-ellipsis.svg'

const logos = [
  <Work />,
  <Play />,
  <Study />,
  <Exercise />,
  <Social />,
  <SelfCare />
]

const Card = ({time}) => {
  const [data] = useState(dataJSON)
  
  return (
    <div className="cards">
      {data.map((item, index) => {
        return (
          <div className={`card ${item.title}`}>
            <div className='card-logo'>{logos[index]}</div>
            <div className="card-desc">
              <p className='card-name'>{item.title}</p>
              <div className='card-ellipsis'><Ellipsis /></div>
              {/* DAILY BTN */}
              {time === "Daily" && <p className="card-current">{item.timeframes.daily.current}hrs</p>}
              {time === "Daily" && <p className="card-previous">Last Day - {item.timeframes.daily.previous}hrs</p>}
              {/* WEEKLY BTN */}
              {time === "Weekly" && <p className="card-current">{item.timeframes.weekly.current}hrs</p>}
              {time === "Weekly" && <p className="card-previous">Last Week - {item.timeframes.weekly.previous}hrs</p>}
              {/* MONTHLY BTN */}
              {time === "Monthly" && <p className="card-current">{item.timeframes.monthly.current}hrs</p>}
              {time === "Monthly" && <p className="card-previous">Last Month - {item.timeframes.monthly.previous}hrs</p>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card