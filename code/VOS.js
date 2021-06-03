import { Route, Switch } from 'react-router'
import Meta from './Meta'
import { Card, CardList } from './UI'

export default () => (
	<div>
		<div
			css={`
				height: 90vh;
				box-shadow: 0 12px 12px -10px rgba(48, 41, 41, 0.1);
				background: #375c9dff;
				display: flex;
				flex-direction: column;
				align-items: center;
				overflow: hidden;
			`}
		>
			<Meta
				title="Véhicule open source"
				description="Construisons ensemble une base hardware permettant d'explorer de nouveaux modèles de conception et d'élaboration du véhicule et de son environnement"
			/>
			<div
				css={`
					color: white;
					width: 80%;
					height: 70%;

					text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
					margin: 0 auto;
					padding-left: 1rem;
					display: flex;
					align-items: center;
					header,
					#phone {
						width: 50%;
					}
					h1 {
						font-size: 350%;
						font-weight: 600;
						margin: 1.2rem 0;
						color: white;
					}
					p {
						font-size: 150%;
					}
					@media (max-width: 800px) {
						flex-wrap: wrap;
						header,
						#phone {
							width: 100%;
						}
					}

					@media (max-width: 800px) {
						width: 100%;
						h1 {
							font-size: 250%;
							margin: 0.4rem 0;
						}
						#phone {
							width: 30%;
						}
						header img {
							width: 100px;
						}

						display: flex;
						flex-wrap: nowrap;
						overflow: hidden;
					}
				`}
			>
				<header>
					<h1>Véhicule open source</h1>
					<p>
						Construisons ensemble une base hardware permettant d'explorer de
						nouveaux modèles de conception et d'élaboration du véhicule et de
						son environnement
					</p>
				</header>
			</div>
			<div
				css={`
					img {
						height: 40px;
					}

					margin: 0 auto;
					color: white;
				`}
			></div>

			<div
				href="#quoi"
				css={`
					width: 100%;
					a {
						display: block;
						background: white;
						border-radius: 0.3rem;
						width: 14rem;
						text-align: center;
						cursor: pointer;
						text-decoration: none;
						padding: 0.2rem 0.6rem;
						font-size: 130%;
						color: black;
						text-transform: uppercase;
						font-weight: 600;
						margin: 3rem auto;
					}
				`}
			>
				<a href="#quoi">En savoir plus</a>
			</div>
		</div>
		<Pourquoi />
	</div>
)

const vehicules = [
	{
		nom: 'Vélolibre',
		texte: 'Blabla',
		url: 'https://velolib.re',
		image: 'https://velolibre-images.netlify.app/enneigé.medium.webp',
	},
	{
		nom: 'XYZ',
		texte: 'Blabla',
		url: 'https://velolib.re',
		image: 'https://velolibre-images.netlify.app/enneigé.medium.webp',
	},
	{
		nom: 'Milla',
		texte: 'Blabla',
		url: 'https://velolib.re',
		image: 'https://velolibre-images.netlify.app/enneigé.medium.webp',
	},
]

const Pourquoi = () => (
	<div
		id="quoi"
		css={`
			margin: 0 auto;
			max-width: 80vw;
			padding: 0.3rem 1rem;
			ul {
				list-style-type: none;
				padding-left: 1rem;
			}
			em {
				color: #375c9dff;
				font-style: normal;
			}
			h2 {
				font-weight: 600;
				font-size: 135%;
				padding-right: 2rem;
				margin: 3rem 0 1.2rem;
				line-height: 1.4rem;
			}
			.illustration {
				font-size: 3rem;
				display: block;
				text-align: center;
				margin: 3rem auto 1.6rem;
			}
		`}
	>
		<h2>Les véhicules en développement</h2>
		<CardList>
			{vehicules.map((v) => (
				<a href={v.url}>
					<Card
						key={v.nom}
						css={`
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							img {
								max-width: 100%;
								max-height: 100%;
							}
							height: 25rem;
							h3 {
								margin: 0.6rem;
							}
						`}
					>
						<h3>{v.nom}</h3>
						<p>{v.texte}</p>
						<img src={v.image} />
					</Card>
				</a>
			))}
		</CardList>
		<h2>Blabla</h2>
		<span className="illustration">🗺️</span>
		<p>
			Nous sommes tous intéressés par nos déplacements. Combien de km ai-je fait
			le mois dernier ? L'année dernière ? En voiture, en train, en vélo, à pied
			?
		</p>
		<span className="illustration"> 🔒</span>{' '}
		<p>
			Jusqu'à présent, seuls Google, Apple ou votre opérateur téléphonique
			disposent de vos traces de déplacements, et la clef de cet entrepôt privé
			reste dans leur main.
		</p>
		<p>
			Tracemob suit automatiquement vos déplacements, sans épuiser votre
			batterie, trouve automatiquement le mode de transport utilisé.
		</p>
		<p>
			Visualisez alors vos déplacements, et surtout : faites ce qu'il vous plaît
			avec ces données. Vous pouvez consulter{' '}
			<a href="/tracemob/CGU">les conditions d'utilisation de l'application</a>.
		</p>
		<span className="illustration">🧮🌱💸</span>
		<p>
			Suivez vos déplacements sur une carte annuelle - calculez l'empreinte
			climat de vos déplacements - dans une prochaine version, gagnez de
			l'argent pour chaque kilomètre fait en vélo.
		</p>
		<h2>
			Construire <em>ensemble</em> le futur du transport
		</h2>
		<p>
			Si vous le désirez - et la décision vous revient - vous pourrez envoyer
			vos données de déplacement moyennées et anonymisées à votre collectivité
			pour participer à améliorer les transports et l'infrastructure publique.
		</p>
		<p>
			<strong>Donnez aux collectivités</strong> la chance de mieux comprendre
			vos déplacements du quotidien, pour que les nouvelles pistes cyclables,
			lignes de bus, petites lignes de train, nouvelles routes, bornes de
			recharge électrique, places de stationnement, et l’aménagement urbain en
			général ne vous laissent plus de côté.
		</p>
		<h2>
			<em>Comment</em> ça marche ?
		</h2>
		<p>Installez l'application, et ... rien de plus !</p>{' '}
		<p>
			{' '}
			Elle enregistre et détecte vos déplacements à pied, en voiture, à vélo, en
			bus, jour après jour.{' '}
		</p>
		<p>
			Ces données sont re-traitées pour notamment détecter le mode puis envoyées
			sur votre <strong>entrepôt de données personnelles</strong>.
		</p>
		<p>Puis seulement si vous le voulez, faites un don !</p>
		<h2>Des questions ?</h2>
		<h3>Google les a déjà non ?</h3>
		<p>
			Tout à fait ! Dès lors que vous avez un téléphone dans votre poche et une
			application comme Google Maps, vous êtes suivis.{' '}
		</p>
		<p>
			Vos données sont l'or des GAFAM (Google, Apple, Facebook, Amazon,
			Microsoft...), elles leur permettent de vous cibler pour de la publicité.
			Vos données de déplacement sont même achetées par certaines collectivités
			!
		</p>
		<p>
			Les données collectées par Tracemob ne serviront qu'à vous, vous choisirez
			ce que vous voulez en faire.
		</p>
		<h3>Pourquoi devrais-je vous faire confiance ?</h3>
		<p>
			Le code de l'application est entièrement libre, il est issu d'un{' '}
			<a href="https://github.com/e-mission/e-mission-docs">logiciel libre</a>{' '}
			développé et maintenu par un labo américain, tout le monde peut vérifier
			que l'appli ne collecte pas les données sans autorisation. Voici le code
			du <a href="https://github.com/fabmob/tracemob-server">serveur</a> et de{' '}
			<a href="https://github.com/fabmob/tracemob-phone">l'interface</a>.
		</p>
		<h3>Et ma batterie 🔋 ? </h3>
		<p>
			Les versions récentes d'Android sont bien faites : suivre votre position
			ne consomme que quelques petits % de batterie par jour.{' '}
		</p>
		<p>
			Si vous constatez le contraire dans les paramètres, envoyez-nous un mail
			puis désinstallez-là en un clic !
		</p>
		<h3>Les données collectées seront-elles représentatives ?</h3>
		<p>
			Les données collectées ne viendront que compléter les enquêtes actuelles
			sur la base desquelles les politiques de transport sont construites.
		</p>
		<p>
			Plus de 90% de la population active possède un smartphone. Ces données
			nous permettront au moins d'améliorer la connaissance des déplacements
			domicile-travail.
		</p>
	</div>
)
