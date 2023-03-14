import {AiFillHome} from 'react-icons/ai'

import {EachCategory, Name} from './styledComponents'

const CategoryCard = props => {
  const {category} = props

  return (
    <EachCategory>
      <Name>{category.name}</Name>
      <AiFillHome />
    </EachCategory>
  )
}
export default CategoryCard
