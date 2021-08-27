const Card = ({ title, message }) => (
	<div className="bg-white flex flex-col gap-y-2 text-center items-center rounded-lg px-6 py-10">
		<img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" className="w-36 h-36 mb-4" />
		<h3 className="text-lg font-semibold text-purple-700">{title}</h3>
		<p className="text-sm text-gray-600 px-5">
			{message}
		</p>
	</div>
);

function Cards() {
	const infoCards = [
		{
			key: 'campagn',
			title: 'Her siparişinize bir kampanya',
			message: 'Getir'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.',
		},
		{
			key: 'minutes',
			title: 'Dakikalar içinde kapınızda',
			message: 'Getir’le siparişiniz dakikalar içinde kapınıza gelir.',
		},
		{
			key: 'happiness',
			title: 'Binlerce çeşit mutluluk',
			message: `Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz`,
		},
	]
	return (
		<>
			<div className="grid mt-4 grid-cols-3 gap-x-4">
				{infoCards?.length && infoCards.map(({ key, title, message }) => 
					<Card key={key} title={title} message={message} />
				)
			</div>
		</>
	)
}

export default Cards
