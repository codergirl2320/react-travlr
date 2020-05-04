Roman Colosseum

I can't explain how amazing it was to walk around inside the ACTUAL Roman Colosseum...

Rome, Italy

/images/Coliseum.jpeg



Blue Mosque

It was so magical to see The Blue Mosque from the port...an instant reminder of just how far from home you really are...

Istanbul, Turkey

/images/Blue_Mosque.jpeg



Temple of Poseidon

Waaayyy up on a cliff...overlooking the ocean...

Athens, Greece

/images/Acropolis.jpeg



Sacred Island of Apollo

Really cool and a little odd to explore the ruins of this insanely phallic-centric culture...

Delos Island, Greece

/images/Delos_Greece.jpeg



Trevi Fountain

The largest, most beautiful fountain...that was JUST around the corner all along...

Rome, Italy

/images/Trevi_Fountain.jpeg



Duomo Cathedral

The detail of this building is just amazing...

Florence, Italy

/images/Baptistery.jpeg



Library of Celsus

Loved hearing the stories of the secret passageways that were discovered...so cool...

Ephesus, Turkey

/images/Ephesus.jpeg



Church of St. Trophime

Located in one of the beautiful squares of Arles. Where Vincent Van Gogh lived and painted "The Cafe Terrace on the Place du Forum" (one of my favorite paintings).

Arles, France

/images/French_square_crop.jpeg



Gondola Ride

Floating through the waterways in Venice was overwhelmingly awesome. I pray I have the opportunity to do that again...

Venice, Italy

/images/gondolas.jpeg



Chateau des Baux

An ancient medieval fortress overlooking the most AWESOME village...I could have stayed forever!

Les Baux-de-Provence, France

/images/Les_Baux_de_Provence_crop.jpeg



Pantheon

One of my favorite sights...The Pantheon...a former Roman temple, now a Catholic church.

Rome, Italy

/images/Pantheon_crop.jpeg



Positano

Couldn't get enough of the view OR the village...it is my dream to vacation there again or MOVE there...

Amalfi Coast, Italy

/images/Positano.jpeg



La Sagrada Familia

One of MANY of Gaudi's iincredible works - which were my main focus during our short time in Barcelona...

Barcelona, Spain

/images/Sagrada_Familia_crop.jpeg



Hagia Sophia

The most beautiful interior...Hagia Sophia was a cathedral, then a mosque and now a museum famous for its large dome.

Istanbul, Turkey

/images/St_Sophia_Mosque.jpeg



Ayasuluk Castle

Behind the ruins of Saint John's Basilica.

Ephesus, Turkey

/images/St_Johns_Basilica.jpeg



St. Peter's Basilica

So cool that the Pope decided to make an appearance the morning we were there...we probably wouldn't have made it to everything if he hadn't!

Rome, Italy

/images/St_Peters_Basilica_crop.jpeg



Venice Waterway

I could float around and stare at all the buildings and all the businesses forever...a photographer's paradise...

Venice, Italy

/images/Venice_waterway_crop.jpeg










import React from 'react'

class Home extends React.Component {
  constructor(){
    super()

    this.onClickForward = this.onClickForward.bind(this)
    this.onClickForward2 = this.onClickForward2.bind(this)

    const img0 = require('./images/IMG_1.jpeg');
    const img1 = require('./images/IMG_5.jpeg');
    const img2 = require('./images/IMG_2.jpeg');

    const img3 = require('./images/IMG_3.jpeg');
    const img4 = require('./images/IMG_4.jpeg');
    const img5 = require('./images/IMG_6.jpeg');
    const img6 = require('./images/IMG_7.jpeg');

    this.state = {
      index: 0,
      imgList: [img0, img1, img2],
      imgList2: [img3, img4, img5, img6]
    }
  }

  onClickForward() {
    if (this.state.index + 1 === this.state.imgList.length) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  onClickForward2() {
    if (this.state.index + 1 === this.state.imgList2.length) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  render(){
    return(
      <span className="home-grid">
        <div className="one"><img src="./images/Capri.jpeg" alt=""/></div>
        <div className="two">Barcelona</div>
        <div className="three"><img src="./images/Sagrada_Familia_detail.jpeg" alt=""/></div>
        <div className="four"><img src="./images/Pompeii.jpeg" alt=""/></div>
        <div className="five">Istanbul</div>
        <div className="six"><img src="./images/Barcelona_windows.jpeg" alt=""/></div>
        <div className="seven"><img src="./images/French_bakery.jpeg" alt=""/></div>

        <div className="eight">
          <img onClick={this.onClickForward} src={this.state.imgList[this.state.index]} alt=""/>
        </div>

        <div className="nine">Venice</div>
        <div className="ten"><img src="./images/Mary_statue.jpeg" alt=""/></div>

        <div className="eleven">
          <img onClick={this.onClickForward2} src={this.state.imgList2[this.state.index]} alt=""/>
        </div>

        <div className="twelve">Arles</div>
        <div className="thirteen"><img src="./images/St_Sophia.jpeg" alt=""/></div>
        <div className="fourteen"><img src="./images/gondola_bridge.jpeg" alt=""/></div>
        <div className="fifteen"><img src="./images/Pompei_person.jpeg" alt=""/></div>
        <div className="sixteen">Pisa</div>
        <div className="seventeen">Pompeii</div>
        <div className="eighteen"><img src="./images/Sistine_Chapel.jpeg" alt=""/></div>
      </span>
    )
  }
}

export default Home
