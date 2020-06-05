import React from 'react'
import { useLocation, Link as OriginalLink } from 'react-router-dom'
import { Link } from './Lang'

export default () => {
	return (
		<div>
			<header>
				<img
					css="height: 5rem"
					src="http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/bg-communs.svg"
				/>
				<h1>Accélerons votre projet de mobilité durable</h1>
				<p>
					La radicalité des GAFA, mais partagée dans une direction collective.
				</p>
				<br />
				<p>
					<a href="#découvrir">
						<i>Découvrir</i>
					</a>
					<a href="/action">
						<b>Passer à l'action</b>
					</a>
				</p>
			</header>
			<Découvrir />
			<Fabriques />
		</div>
	)
}

let Découvrir = () => (
	<main>
		<section
			css={`
				img {
					max-height: 12rem;
					max-width: initial;
					margin: 2rem auto;
					display: block;
					border-radius: 0.6rem;
				}
			`}
		>
			<header id="découvrir">
				<div
					css={`
						> ul {
							display: flex;
							list-style-type: none;
							justify-content: space-evenly;
						}
						> ul > li {
							margin: 1rem;
						}
					`}
				>
					<ul css="font-weight: bold; color: blue">
						<li>Collectivité</li>
						<li>Entreprise</li>
					</ul>
					<ul css="background: #ffa5008c">
						<li>Des retours sur nouvelle solution de mobilité 🛴</li>
						<li>Des retours sur l'adéquation solution-problème</li>
					</ul>
					<ul css="background: #0000ff59">
						<li>Plusieurs réseaux de covoiturage 🚗👥</li>
						<li>Inciter le covoiturage</li>
					</ul>

					<p>
						[On peut intégrer ces éléments dans le tableau ci-dessus. A gauche,
						le point de vue de la collectivité, à droite, de l'entreprise; au
						centre (reste à inventer), le commun, notre périmètre d'action.]
						Aller + vite au marché grâce à l’Open Source & Coopétition grâce à
						notre réseau international d’acteurs hétérogènes des retours
						d’utilisateurs d’une nouvelle solution de mobilité mieux compris mes
						problèmes, fait un diagnostic lister et détailler mes ressources
						(territoire open source) produire des données nouvelles (traceur,
						open data cam) rassembler une communauté d’intérêt et identifier ses
						besoins (covoit, autop, …) rassembler des acteurs en coopétition
						pour identifi
					</p>
				</div>
				<br />
				<br />

				<h2>Comment ?</h2>
				<ul
					css={`
						display: flex;
						justify-content: center;
						list-style-type: none;
						li {
							margin: 1rem;
							padding: 0.6rem 1rem;
							border: 1px solid black;
						}
					`}
				>
					<li>De l'expertise métier</li>
					<li>Des territoires d'expérimentation</li>
					<li>Des composants utilisables</li>
					<li>Financer un nouveau projet</li>
				</ul>
				<ul
					css={`
						color: green;
						display: flex;
						justify-content: center;
						list-style-type: none;
						li {
							margin: 1rem;
							padding: 0.6rem 1rem;
							border: 1px solid green;
						}
					`}
				>
					<li>Exemple 1</li>
					<li>Exemple 2</li>
					<li>3</li>
					<li>4</li>
				</ul>
			</header>
		</section>
	</main>
)
let Fabriques = () => (
	<main>
		<section
			css={`
				img {
					max-height: 12rem;
					max-width: initial;
					margin: 2rem auto;
					display: block;
					border-radius: 0.6rem;
				}
			`}
		>
			<header>
				<h2>Un concept, des fabriques</h2>
				<p>
					Le modèle de la fabrique, initié en France, s'est répliqué dans
					d'autres pays et domaines
				</p>
			</header>
			<aside>
				<img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&q=80"></img>
				<h3> FabMob France</h3>
				<p>
					Premier membre du réseau, la Fabrique des Mobilités s'est constituée
					en association, soutenue notamment par l'ADEME.
				</p>
				<p>
					<Link to="france">
						<em>Découvrir↗</em>
					</Link>
				</p>
			</aside>
			<aside>
				<img src="https://imgur.com/HRpDml8.jpg"></img>
				<h3> FabMob Québec</h3>
				<p>
					La Fabrique des Mobilités s'est ensuite implantée au Québec, notamment
					autour des associations Savoir faire linux.
				</p>
				<p>
					<a href="#">
						<em>Découvrir↗</em>
					</a>
				</p>
			</aside>
			<aside>
				<img src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
				<h3>Votre FabMob</h3>
				<p>
					La Fabrique des mobilités est elle-même un commun bien documenté, et
					nous vous aidons à vous en saisir.
				</p>
				<p>
					<a href="#">
						<em>Répliquer↗</em>
					</a>
				</p>
			</aside>
		</section>
	</main>
)
