import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://api.jsonbin.io/b/604611485e29de07fcee15d9'

const FullProfile = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`${url}`)
        const data = await response.json()
        const person = data.people.filter((item) => item.id === Number(id))
        if (person) {
          const { id, fullName, bio, image, profession } = person[0]
          const newCocktail = {
            id,
            fullName,
            bio,
            image,
            profession,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }

  const { fullName, profession, bio, image } = cocktail
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{fullName}</h2>
      <div className='drink'>
        <img src={image} alt={image} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>Full Name: </span>
            {fullName}
          </p>
          <p>
            <span className='drink-data'>Profession: </span>
            {profession}
          </p>
          <p>
            <span className='drink-data'>Bio: </span>
            {bio}
          </p>
        </div>
      </div>
    </section>
  )
}

export default FullProfile
