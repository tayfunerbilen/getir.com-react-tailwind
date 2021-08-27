import {useEffect, useState} from 'react'
import categoriesData from 'api/categories.json'
import CategoryItem from 'components/ui/CategoryItem';

function Categories() {

	const [categories, setCategories] = useState([])

	useEffect(() => {
		setCategories(categoriesData)
	}, [])

	return (
		<div className="bg-white py-6">
			<div className="container mx-auto">
				<h3 className="font-semibold text-sm mb-2">Kategoriler</h3>
				<div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-11 2xl:grid-cols-12">
					{categories && categories.map(category => <CategoryItem key={category.id} category={category} />)}
				</div>
			</div>
		</div>
	)
}

export default Categories