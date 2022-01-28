import React, { useEffect, useState } from 'react'

import Loading from '../components/Loading'

const Albums = () => {

	const[albums, setAlbums] = useState([])
	const[isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)

		const url = `https://jsonplaceholder.typicode.com/albums`
		fetch(url)
			.then(res => res.json())
			.then(dataImg => {
				setAlbums(dataImg)
				setIsLoading(false)
			})
	}, [])

	return(
		<>
			<Loading visible={isLoading} />
			{
				albums.map(album => {
					return(
						<div>
							<span>{album.title} - {album.id}</span>
						</div>
					)
				})
			}
		</>
	)
}

export default Albums