import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

// const CategoryRecirc = ({ data }) => (
//   <div className="category-recirc">
//     <div className="left">
//       <Link to={props.prev}>
//         👈 Prev
//       </Link>
//     </div>
//     <div className="right">
//       <Link to={props.next}>
//         Next 👉
//       </Link>
//     </div>
//   </div>
// )

const Categories = ({currSlug}) => {

  const data = useStaticQuery(graphql`
    query Categories {
      allAirtable(
        filter: {
          data: {
            Type: {
              eq: "Home"
            }
          }
        }
      ) {
        nodes {
          data {
            Slug
          }
        }
      }
    }
  `)

  return (
    <div className="category-recirc">
     <div className="left">
       <Link to='/'>
          Prev
       </Link>
      </div>
     <div className="right">
       <Link to='/'>
        Next
       </Link>
     </div>
   </div>
  )
}

export default Categories;