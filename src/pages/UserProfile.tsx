import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const { id } = useParams()

  return <div className="text-red-500">user id: {id}</div>
}

export default UserProfile
