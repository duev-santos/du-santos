export default function ContatoSection() {
	return (
		<section
			id="contato"
			className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-[url('/fundo_contato.svg')] bg-cover bg-center bg-no-repeat"
		>
			<div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
				<div className="relative w-[min(92vw,760px)]">
					<img
						src="/quadro_contato.png"
						alt="Quadro de contato"
						className="w-full h-auto"
					/>

					<div className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-8 px-6">
						<h2 className="text-center leading-tight">
							<span className="block text-3xl sm:text-5xl font-bold text-[#F67234]" style={{ fontFamily: "serif" }}>
								bora tirar esse
							</span>
							<span className="block text-4xl sm:text-6xl font-bold italic text-[#F289CE]" style={{ fontFamily: "serif" }}>
								projeto do papel
							</span>
						</h2>

						<div className="flex items-center justify-center gap-4 sm:gap-6">
						<a
							href="https://www.linkedin.com/in/du-santos/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#F36535] text-white font-bold text-xl sm:text-2xl flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200"
						>
							<img src="/linkedin.svg" alt="" aria-hidden="true" className="h-8 w-8 sm:h-10 sm:w-10 invert" />
						</a>

						<a
							href="https://wa.me/5511981911971"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="WhatsApp"
							className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#F36535] text-white font-bold text-base sm:text-lg uppercase tracking-wide flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200"
						>
							<img src="/whatsapp.svg" alt="" aria-hidden="true" className="h-8 w-8 sm:h-10 sm:w-10 invert" />
						</a>

						<a
							href="https://github.com/duev-santos"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#F36535] text-white font-bold text-base sm:text-lg uppercase tracking-wide flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200"
						>
							<img src="/github.svg" alt="" aria-hidden="true" className="h-8 w-8 sm:h-10 sm:w-10 invert" />
						</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
