import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.module.scss'
import Layout from '../HOC/Layout'
import Home from '../Containers/Homepage/Home'
import WhoWeAre from '../Containers/WhoWeAre/WhoWeAre'
import WhyUs from '../Containers/WhyUs/WhyUs'
import Solutions from '../Containers/Solutions/Solutions'
import Benefits from '../Containers/Benefits/Benefits'
import OurTeam from '../Containers/OurTeam/OurTeam'
import CaseStudy from '../Containers/CaseStudy/CaseStudy'
import Insights from '../Containers/Insights/Insights'
import ContactUs from '../Containers/ContactUs/ContactUs'
import Certifications from '../Containers/Certifications/Certifications'

class App extends React.Component {

  state = {
    justRenderAgain: '',
  }

  HomeSliderHandler = className => {
    this.setState({currentPage: className})
  }

  changePageHandler = page => {
    localStorage.setItem('page', page)
    this.renderAgain()
  }

  renderAgain = () => {
    this.setState({justRenderAgain: Math.random})
  }

  render() {
    const changePage = this.changePageHandler

    const WrappedHome = function(props) {
      return (<Home {...props} changePage={changePage} />);
    }

    return (
      <Layout renderAgain={this.renderAgain}>
        <Routes>
          <Route path='/' element={<WrappedHome />} />
          <Route path='/who-we-are' element={<WhoWeAre />} />
          <Route path='/why-us' element={<WhyUs />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/benefits' element={<Benefits />} />
          <Route path='/our-team' element={<OurTeam />} />
          <Route path='/case-study' element={<CaseStudy />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/insights' element={<Insights />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </Layout>
    )
  }
}

export default App;