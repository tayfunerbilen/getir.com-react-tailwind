function Cards() {

	return (
		<>
			<div className="grid mt-4 grid-cols-3 gap-x-4">
				<div className="bg-white flex flex-col gap-y-2 text-center items-center rounded-lg px-6 py-10">
					<img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" className="w-36 h-36 mb-4" />
					<h3 className="text-lg font-semibold text-purple-700">Her siparişinize bir kampanya</h3>
					<p className="text-sm text-gray-600 px-5">
						Getir'de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
					</p>
				</div>
				<div className="bg-white flex flex-col gap-y-2 text-center items-center rounded-lg px-6 py-10">
					<img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" className="w-36 h-36 mb-4" />
					<h3 className="text-lg font-semibold text-purple-700">Dakikalar içinde kapınızda</h3>
					<p className="text-sm text-gray-600 px-5">
						Getir’le siparişiniz dakikalar içinde kapınıza gelir.
					</p>
				</div>
				<div className="bg-white flex flex-col gap-y-2 text-center items-center rounded-lg px-6 py-10">
					<img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" className="w-36 h-36 mb-4" />
					<h3 className="text-lg font-semibold text-purple-700">Binlerce çeşit mutluluk</h3>
					<p className="text-sm text-gray-600 px-5">
						Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
					</p>
				</div>
			</div>
		</>
	)
}

export default Cards