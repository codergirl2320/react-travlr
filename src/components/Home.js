import React from 'react'

class Home extends React.Component {
  constructor(){
    super()

    this.onClickForward = this.onClickForward.bind(this)

    const img1 = require('./images/IMG_1.jpeg');
    const img3 = require('./images/IMG_3.jpeg');
    const img4 = require('./images/IMG_4.jpeg');
    const img6 = require('./images/IMG_6.jpeg');
    const img7 = require('./images/IMG_7.jpeg');
    const img8 = require('./images/IMG_8.jpeg');
    const img10 = require('./images/IMG_10.jpeg');
    const img11 = require('./images/IMG_11.jpeg');
    const img13 = require('./images/IMG_13.jpeg');
    const img14 = require('./images/IMG_14.jpeg');
    const img15 = require('./images/IMG_15.jpeg');
    const img18 = require('./images/IMG_18.jpeg');

    const bars1 = require('./images/bar_s_1.jpeg');
    const bars2 = require('./images/bar_s_2.jpeg');
    const bars3 = require('./images/bar_s_3.jpeg');
    const bars4 = require('./images/bar_s_4.jpeg');
    const bars5 = require('./images/bar_s_5.jpeg');
    const bars6 = require('./images/bar_s_6.jpeg');
    const bart1 = require('./images/bar_t_1.jpeg');
    const bart2 = require('./images/bar_t_2.jpeg');
    const barw1 = require('./images/bar_w_1.jpeg');
    const barw2 = require('./images/bar_w_2.jpeg');
    const barw3 = require('./images/bar_w_3.jpeg');
    const barw4 = require('./images/bar_w_4.jpeg');

    const arls1 = require('./images/arl_s_1.jpeg');
    const arls2 = require('./images/arl_s_2.jpeg');
    const arls3 = require('./images/arl_s_3.jpeg');
    const arls4 = require('./images/arl_s_4.jpeg');
    const arls5 = require('./images/arl_s_5.jpeg');
    const arls6 = require('./images/arl_s_6.jpeg');
    const arlt1 = require('./images/arl_t_1.jpeg');
    const arlt2 = require('./images/arl_t_2.jpeg');
    const arlw1 = require('./images/arl_w_1.jpeg');
    const arlw2 = require('./images/arl_w_2.jpeg');
    const arlw3 = require('./images/arl_w_3.jpeg');
    const arlw4 = require('./images/arl_w_4.jpeg');

    const flos1 = require('./images/flo_s_1.jpeg');
    const flos2 = require('./images/flo_s_2.jpeg');
    const flos3 = require('./images/flo_s_3.jpeg');
    const flos4 = require('./images/flo_s_4.jpeg');
    const flos5 = require('./images/flo_s_5.jpeg');
    const flos6 = require('./images/flo_s_6.jpeg');
    const flot1 = require('./images/flo_t_1.jpeg');
    const flot2 = require('./images/flo_t_2.jpeg');
    const flow1 = require('./images/flo_w_1.jpeg');
    const flow2 = require('./images/flo_w_2.jpeg');
    const flow3 = require('./images/flo_w_3.jpeg');
    const flow4 = require('./images/flo_w_4.jpeg');

    const roms1 = require('./images/rom_s_1.jpeg');
    const roms2 = require('./images/rom_s_2.jpeg');
    const roms3 = require('./images/rom_s_3.jpeg');
    const roms4 = require('./images/rom_s_4.jpeg');
    const roms5 = require('./images/rom_s_5.jpeg');
    const roms6 = require('./images/rom_s_6.jpeg');
    const romt1 = require('./images/rom_t_1.JPG');
    const romt2 = require('./images/rom_t_2.jpeg');
    const romw1 = require('./images/rom_w_1.jpeg');
    const romw2 = require('./images/rom_w_2.jpeg');
    const romw3 = require('./images/rom_w_3.jpeg');
    const romw4 = require('./images/rom_w_4.jpeg');

    const naps1 = require('./images/nap_s_1.jpeg');
    const naps2 = require('./images/nap_s_2.jpeg');
    const naps3 = require('./images/nap_s_3.jpeg');
    const naps4 = require('./images/nap_s_4.jpeg');
    const naps5 = require('./images/nap_s_5.jpeg');
    const naps6 = require('./images/nap_s_6.jpeg');
    const napt1 = require('./images/nap_t_1.jpeg');
    const napt2 = require('./images/nap_t_2.jpeg');
    const napw1 = require('./images/nap_w_1.jpeg');
    const napw2 = require('./images/nap_w_2.jpeg');
    const napw3 = require('./images/nap_w_3.jpeg');
    const napw4 = require('./images/nap_w_4.jpeg');

    const myks1 = require('./images/myk_s_1.jpeg');
    const myks2 = require('./images/myk_s_2.jpeg');
    const myks3 = require('./images/myk_s_3.jpeg');
    const myks4 = require('./images/myk_s_4.jpeg');
    const myks5 = require('./images/myk_s_5.jpeg');
    const myks6 = require('./images/myk_s_6.jpeg');
    const mykt1 = require('./images/myk_t_1.jpeg');
    const mykt2 = require('./images/myk_t_2.jpeg');
    const mykw1 = require('./images/myk_w_1.jpeg');
    const mykw2 = require('./images/myk_w_2.jpeg');
    const mykw3 = require('./images/myk_w_3.jpeg');
    const mykw4 = require('./images/myk_w_4.jpeg');

    const ists1 = require('./images/ist_s_1.jpeg');
    const ists2 = require('./images/ist_s_2.jpeg');
    const ists3 = require('./images/ist_s_3.jpeg');
    const ists4 = require('./images/ist_s_4.jpeg');
    const ists5 = require('./images/ist_s_5.jpeg');
    const ists6 = require('./images/ist_s_6.jpeg');
    const istt1 = require('./images/ist_t_1.jpeg');
    const istt2 = require('./images/ist_t_2.jpeg');
    const istw1 = require('./images/ist_w_1.jpeg');
    const istw2 = require('./images/ist_w_2.jpeg');
    const istw3 = require('./images/ist_w_3.jpeg');
    const istw4 = require('./images/ist_w_4.jpeg');

    const ephs1 = require('./images/eph_s_1.jpg');
    const ephs2 = require('./images/eph_s_2.jpg');
    const ephs3 = require('./images/eph_s_3.jpg');
    const ephs4 = require('./images/eph_s_4.jpg');
    const ephs5 = require('./images/eph_s_5.jpg');
    const ephs6 = require('./images/eph_s_6.jpg');
    const epht1 = require('./images/eph_t_1.jpg');
    const epht2 = require('./images/eph_t_2.jpg');
    const ephw1 = require('./images/eph_w_1.jpg');
    const ephw2 = require('./images/eph_w_2.jpg');
    const ephw3 = require('./images/eph_w_3.jpg');
    const ephw4 = require('./images/eph_w_4.jpg');

    const aths1 = require('./images/ath_s_1.jpg');
    const aths2 = require('./images/ath_s_2.jpg');
    const aths3 = require('./images/ath_s_3.jpg');
    const aths4 = require('./images/ath_s_4.jpg');
    const aths5 = require('./images/ath_s_5.jpg');
    const aths6 = require('./images/ath_s_6.jpg');
    const atht1 = require('./images/ath_t_1.jpg');
    const atht2 = require('./images/ath_t_2.jpg');
    const athw1 = require('./images/ath_w_1.jpg');
    const athw2 = require('./images/ath_w_2.jpg');
    const athw3 = require('./images/ath_w_3.jpg');
    const athw4 = require('./images/ath_w_4.jpg');

    const vens1 = require('./images/ven_s_1.jpeg');
    const vens2 = require('./images/ven_s_2.jpeg');
    const vens3 = require('./images/ven_s_3.jpeg');
    const vens4 = require('./images/ven_s_4.jpeg');
    const vens5 = require('./images/ven_s_5.jpeg');
    const vens6 = require('./images/ven_s_6.jpeg');
    const vent1 = require('./images/ven_t_1.jpeg');
    const vent2 = require('./images/ven_t_2.jpeg');
    const venw1 = require('./images/ven_w_1.jpeg');
    const venw2 = require('./images/ven_w_2.jpeg');
    const venw3 = require('./images/ven_w_3.jpeg');
    const venw4 = require('./images/ven_w_4.jpeg');

    this.state = {
      index: 0,
      imgList1: [img1, bars2, arls6, flos6, roms3, naps5, myks5, ists4, ephs3, aths3, vens1],
      imgList3: [img3, barw1, arlw3, flow3, romw4, napw3, mykw4, istw3, ephw4, athw2, venw2],
      imgList4: [img4, bart1, arlt2, flot1, romt1, napt1, mykt1, istt1, epht2, atht2, vent2],
      imgList6: [img6, bars3, arls1, flos4, roms6, naps6, myks2, ists1, ephs5, aths6, vens3],
      imgList7: [img7, barw4, arlw4, flow4, romw2, napw4, mykw2, istw1, ephw2, athw4, venw3],
      imgList8: [img8, bart2, arlt1, flot2, romt2, napt2, mykt2, istt2, epht1, atht1, vent1],
      imgList10: [img10, bars5, arls5, flos5, roms5, naps2, myks6, ists6, ephs4, aths4, vens4],
      imgList11: [img11, barw2, arlw1, flow1, romw1, napw1, mykw3, istw4, ephw1, athw3, venw1],
      imgList13: [img13, bars4, arls4, flos1, roms4, naps3, myks3, ists5, ephs1, aths1, vens6],
      imgList14: [img14, barw3, arlw2, flow2, romw3, napw2, mykw1, istw2, ephw3, athw1, venw4],
      imgList15: [img15, bars1, arls2, flos3, roms1, naps4, myks1, ists2, ephs2, aths2, vens2],
      imgList18: [img18, bars6, arls3, flos2, roms2, naps1, myks4, ists3, ephs6, aths5, vens5],
      imgList2: ['Barcelona', 'Barcelona', 'Marseille', 'Livorno', 'Civitavecchia', 'Naples', 'Mykonos', 'Istanbul', 'Kusadasi', 'Piraeus', 'Venice'],
      imgList5: ['Istanbul', 'Sept 21', 'Sept 22', 'Sept 23', 'Sept 24', 'Sept 25', 'Sept 27', 'Sept 28', 'Sept 29', 'Sept 30', 'Oct 2'],
      imgList9: ['Venice', 'Spain', 'France', 'Italy', 'Italy', 'Italy', 'Greece', 'Turkey', 'Turkey', 'Greece', 'Italy'],
      imgList12: ['Arles', 'Casa Batllo', 'Arles', 'Florence', 'Rome', 'Capri', 'Delos', 'St. Sophia', 'Ephesus', 'Athens', 'Murano'],
      imgList16: ['Pisa', 'la Sagrada Familia', 'Les Baux de Provence', 'Pisa', 'Colosseum', 'Positano', 'Terrace of the Lions', 'Topkapi Palace', 'Virgin Mary Shrine', 'Temple of Poseidon', 'Piazza San Marco'],
      imgList17: ['Pompeii', 'Casa Mila', 'Chateau d\'If', 'Tuscany', 'Sistine Chapel', 'Pompeii', 'Oeatpon Theatre', 'Blue Mosque', 'The Bazaar', 'Acropolis', 'St. Mark\'s Campanile']
    }
  }

  onClickForward() {
    if (this.state.index + 1 === this.state.imgList1.length) {
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
        <div className="one">
          <img onClick={this.onClickForward} src={this.state.imgList1[this.state.index]} alt=""/>
        </div>
        <div className="two">
          <span onClick={this.onClickForward}>{this.state.imgList2[this.state.index]}</span>
        </div>
        <div className="three">
          <img onClick={this.onClickForward} src={this.state.imgList3[this.state.index]} alt=""/>
        </div>
        <div className="four">
          <img onClick={this.onClickForward} src={this.state.imgList4[this.state.index]} alt=""/>
        </div>
        <div className="five">
          <span onClick={this.onClickForward}>{this.state.imgList5[this.state.index]}</span>
        </div>
        <div className="six">
          <img onClick={this.onClickForward} src={this.state.imgList6[this.state.index]} alt=""/>
        </div>
        <div className="seven">
          <img onClick={this.onClickForward} src={this.state.imgList7[this.state.index]} alt=""/>
        </div>
        <div className="eight">
          <img onClick={this.onClickForward} src={this.state.imgList8[this.state.index]} alt=""/>
        </div>
        <div className="nine">
          <span onClick={this.onClickForward}>{this.state.imgList9[this.state.index]}</span>
        </div>
        <div className="ten">
          <img onClick={this.onClickForward} src={this.state.imgList10[this.state.index]} alt=""/>
        </div>
        <div className="eleven">
          <img onClick={this.onClickForward} src={this.state.imgList11[this.state.index]} alt=""/>
        </div>
        <div className="twelve">
          <span onClick={this.onClickForward}>{this.state.imgList12[this.state.index]}</span>
        </div>
        <div className="thirteen">
          <img onClick={this.onClickForward} src={this.state.imgList13[this.state.index]} alt=""/>
        </div>
        <div className="fourteen">
          <img onClick={this.onClickForward} src={this.state.imgList14[this.state.index]} alt=""/>
        </div>
        <div className="fifteen">
          <img onClick={this.onClickForward} src={this.state.imgList15[this.state.index]} alt=""/>
        </div>
        <div className="sixteen">
          <span onClick={this.onClickForward}>{this.state.imgList16[this.state.index]}</span>
        </div>
        <div className="seventeen">
          <span onClick={this.onClickForward}>{this.state.imgList17[this.state.index]}</span>
        </div>
        <div className="eighteen">
          <img onClick={this.onClickForward} src={this.state.imgList18[this.state.index]} alt=""/>
        </div>
      </span>
    )
  }
}

export default Home
