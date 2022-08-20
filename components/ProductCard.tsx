const ProductCard = () => {
	return (
		<div className='bg-white rounded-lg flex pb-5 sm:pb-0 flex-col sm:flex-row max-w-2xl sm:max-h-[650px] overflow-hidden  mx-auto'>
			<div className='bg-mobile sm:bg-desktop bg-cover  rounded-t-lg h-80  sm:h-screen sm:rounded-l-lg sm:rounded-tr-none sm:w-1/2 '></div>
			<div className='px-5 h-3/5 pb-4 sm:w-1/2  overflow-hidden '>
				<h2 className='pt-4 font-montserrat font-medium text-dark-grayish-blue text-xs   tracking-[.25em]'>
					PERFUME
				</h2>
				<h1 className='pt-4 font-fraunces font-bold text-3xl'>
					Gabrielle Essence Eau De Parfum
				</h1>
				<p className='pt-4 text-sm font-montserrat text-dark-grayish-blue '>
					A floral, solar and voluptuous interpretation composed by oliver
					Polge, Perfumer-Creator for the House of CHANEL
				</p>
				<div className='pt-4 font-fraunces flex items-center gap-4'>
					<div className=' text-3xl font-bold text-dark-teal'>$144.99</div>
					<div className='line-through text-xs text-dark-grayish-blue'>
						$169.99
					</div>
				</div>
				<div className='pt-4 mx-auto'>
					<button className='bg-dark-teal text-cream font-montserrat text-sm  w-full h-12 rounded-md shadow-sm hover:bg-dark-blue'>
						<svg
							className='h-4 w-4 inline-block '
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z'
								fill='#FFF'
							/>
						</svg>
						<span className='pl-2'>Add to Cart</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
