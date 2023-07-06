// Write your code here.

import './index.css'

const TechnologyCard = props => {
  const {technologyCardItems} = props
  const {title, description, imgUrl, className} = technologyCardItems
  return (
    <li className={`${className} card-container`}>
      <div className="card-align">
        <h1 className="heading">{title}</h1>
        <p className="desc">{description}</p>
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCard
