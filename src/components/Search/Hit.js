import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    category={hit.category}
    date={hit.date}
    title={hit.title}
    description={hit.description}
    background={hit.background}
    image={hit.image}
  />
)

export default Hit