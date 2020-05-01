import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';
import scrollama from 'scrollama';
import ChinaMap from '../components/map'

import Layout from "../components/layout"
import SEO from "../components/seo"

const MapPage = ({ data }) => {
  const timelineItems = data.allAirtable;
  return (
    <Layout>
      <ChinaMap />
      <div className="timeline">
        {timelineItems.nodes.map(({data}, index) => (
          <div>
            <h5>{data.Date}</h5>
            <p>{data._p_}</p>
          </div>
        ))}
      </div>
      <div className="storyCards">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a mauris arcu. Donec viverra, nisi vel interdum semper, lacus quam sollicitudin lacus, tempor porta velit turpis id purus. Sed tincidunt semper quam, a dapibus ante dignissim in. Mauris sed turpis sed velit aliquet varius. Aenean volutpat pharetra nulla, sed sagittis erat auctor id. Nunc erat sapien, aliquet sit amet dolor quis, euismod fringilla velit. Sed ullamcorper dui molestie nulla aliquet, vitae vestibulum nisi suscipit. Proin vel ligula dolor. Sed egestas, enim non sollicitudin iaculis, sem leo volutpat orci, eget suscipit eros magna et ante. In quis semper odio. Cras faucibus lectus lobortis purus varius suscipit.</p>
//         <p>Nunc nisl felis, varius et sem ut, auctor vestibulum lacus. Maecenas molestie pellentesque tortor. Curabitur felis sapien, sollicitudin a porta accumsan, iaculis vel libero. Sed sit amet magna fringilla felis tempus dapibus. Donec sollicitudin bibendum nisl, at finibus tortor viverra non. Quisque a efficitur quam. Cras sagittis tempus libero, quis placerat turpis sagittis et. Etiam facilisis venenatis leo, ut malesuada ipsum facilisis non. Nunc ut lectus enim. Aenean sed dui mauris. Suspendisse ligula mauris, vehicula eget interdum at, luctus vitae nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla lacus ut justo aliquam, a viverra massa venenatis.</p>
//         <p>Sed sed leo quam. Integer ut metus aliquet, iaculis augue eget, placerat ipsum. Fusce lobortis hendrerit volutpat. Fusce iaculis urna elit, pulvinar faucibus eros rutrum id. Morbi in tortor non odio sagittis tincidunt. Praesent malesuada ex et lectus convallis rhoncus. Quisque sed urna semper nisl egestas tincidunt. Aliquam non neque eget ipsum varius suscipit eget non neque. Donec et ex in odio laoreet volutpat vitae interdum lacus. Mauris accumsan magna vel justo interdum interdum. Nam viverra nibh at velit viverra, in suscipit justo cursus. Sed semper tortor felis, sed molestie ipsum viverra id. Integer vel molestie est, at vehicula mauris. Curabitur ornare viverra erat, quis aliquam enim facilisis id. Nulla et commodo ligula, sed sollicitudin nibh.</p>
//         <p>In hac habitasse platea dictumst. Fusce rhoncus arcu quis turpis interdum convallis. Proin rhoncus vestibulum nunc, in ultrices ex. Proin mi lectus, feugiat et nisl pharetra, fermentum sodales sapien. Vivamus luctus diam ut risus facilisis rutrum. Cras auctor erat a tempus commodo. Aliquam erat volutpat. Ut et vulputate erat. Mauris ut mauris fermentum est feugiat accumsan at non arcu. Nullam et diam et lectus egestas sollicitudin in eget ex. Integer at erat sit amet ligula faucibus posuere. Curabitur imperdiet sagittis tortor non euismod. Nunc luctus finibus ultrices. Fusce porttitor egestas neque et consectetur. Donec commodo cursus venenatis.</p>

      </div>
      
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allAirtable(
      filter: {data: {div_class: {eq: "Timeline"}}},
      sort: {fields: data___Date, order: ASC}
    ) {
      nodes {
        data {
          _p_
          Date(formatString: "MMMM Do")
        }
      }
    }
  }
`;
   
export default MapPage;