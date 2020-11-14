// Libraries
import React from "react";

// Components
import Layout from "../components/layout";

// Images for the projects
import IMG3837 from "../images/photos/IMG_3837.jpeg";
import IMG3858 from "../images/photos/IMG_3858.jpeg";
import IMG3866 from "../images/photos/IMG_3866.jpeg";
import IMG3896 from "../images/photos/IMG_3896.jpeg";
import IMG3936 from "../images/photos/IMG_3936.jpeg";
import IMG3983 from "../images/photos/IMG_3983.jpeg";
import IMG4005 from "../images/photos/IMG_4005.jpeg";
import IMG4026 from "../images/photos/IMG_4026.jpeg";
import IMG4049 from "../images/photos/IMG_4049.jpeg";
import IMG4068 from "../images/photos/IMG_4068.jpeg";
import IMG4053 from "../images/photos/IMG_4053.jpeg";
import IMG4421 from "../images/photos/IMG_4421.jpeg";

const PhotosPage = () => (
  <Layout>
    <div className="photos">
      <img src={IMG3896} alt={IMG3896}/>
      <img src={IMG3837} alt={IMG3837}/>
      <img src={IMG4049} alt={IMG4049}/>
      <img src={IMG4421} alt={IMG4421}/>
      <img src={IMG3866} alt={IMG3866}/>
      <img src={IMG3936} alt={IMG3936}/>
      <img src={IMG4026} alt={IMG4026}/>
      <img src={IMG3983} alt={IMG3983}/>
      <img src={IMG4053} alt={IMG4053}/>
      <img src={IMG4068} alt={IMG4068}/>
      <img src={IMG4005} alt={IMG4005}/>
      <img src={IMG3858} alt={IMG3858}/>
    </div>
  </Layout>
)

export default PhotosPage
