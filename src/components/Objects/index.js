import React, { PureComponent } from 'react'
import { YMaps, Map, Clusterer, Placemark } from 'react-yandex-maps'
import {
  Wrapper,
  Title
} from './styles'

export default class Objects extends PureComponent {
  state = {
    mapState: {
      center: [42.806460, 47.128973],
      zoom: 7,
      wheel: false
    },
    points: [
      [47.532388, 42.987555],
      [42.960333, 47.510603],
      [43.035690, 47.310064],
      [42.806460, 47.128973],
      [42.060927, 48.283533],
      [42.052757, 48.289380],
      [42.118630, 48.183407],
      [41.876154, 48.380299],
      [43.311054, 45.674084],
      [43.167082, 44.799743],
      [43.460422, 43.574877],
      [41.457045, 47.747397],
      [42.558176, 47.865088],
      [43.238634, 46.569329]
    ]
  }

  ymapsInitiHandler = ymaps => {
    if (!ymaps) return null
    ymaps.behaviors.disable('scrollZoom')
  }

  render () {
    return (
      <Wrapper>
        <Title>Наши объекты</Title>
        <YMaps>
          <Map
            defaultState={this.state.mapState}
            instanceRef={this.ymapsInitiHandler}
            width='100%'
            height='640px'
          >
            <Clusterer
              options={{
                preset: 'islands#invertedVioletClusterIcons',
                groupByCoordinates: false
              }}
            >
              {this.state.points.map((coordinates, index) => (
                <Placemark key={index} geometry={coordinates} />
              ))}
            </Clusterer>
          </Map>
        </YMaps>
      </Wrapper>
    )
  }
}
