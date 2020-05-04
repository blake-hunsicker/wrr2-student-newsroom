import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';
import scrollama from 'scrollama';

import Layout from "../components/layout"
import SEO from "../components/seo"

mapboxgl.accessToken = 'pk.eyJ1IjoiYmxha2VodW5zaWNrZXIiLCJhIjoiY2s5MjB4dnNqMDA3dDNrbTBpN3d3M2k2NyJ9.Gr-7FjJNAII4-JmuCu0eIA';


class ChinaMap extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        lng: 114.3055,
        lat: 30.5928,
        zoom: 3
    };
  }
  componentDidMount() {
    // const config = this.props;
    // const mapStart = config.chapters[0].location;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/blakehunsicker/ck9lnkp671zb81ipnp08n6ims',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet.',
            location: {
                center: [104.9218, 33.4007],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [114.3055, 30.5928],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
    });
    map.scrollZoom.disable();
  }
  
  render() {
    return (
      <>
        <div ref={el => this.mapContainer = el} />
        
      </>
    )
  }
}
   
export default ChinaMap;