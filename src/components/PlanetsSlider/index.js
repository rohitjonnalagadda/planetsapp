// Write your code here

import './index.css'
import 'PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
