// Libraries
import React from "react"

// Components
import Layout from "../components/layout"

// Images for the projects
import IMG3837 from "../images/photos/IMG_3837.jpeg"
import IMG3866 from "../images/photos/IMG_3866.jpeg"
import IMG3896 from "../images/photos/IMG_3896.jpeg"

const PhotosPage = () => (
  <Layout>
    <div className="photos">
      <img src={IMG3837} alt={IMG3837}/>
      <img src={IMG3866} alt={IMG3866}/>
      <img src={IMG3896} alt={IMG3896}/>
    </div>
  </Layout>
)

export default PhotosPage
