import archives from './getTracemobArchiveArticles'
import ReactMarkdown from 'react-markdown'
import Emoji from 'Components/Emoji'
import { useLocation } from 'react-router'

export default () => {
	const { hash } = useLocation()

	return (
		<div css="background: #0000000a">
			<div
				css={`
					border-top: 9px solid #375c9d;
					box-shadow: 2px 5px 12px 3px rgba(48, 41, 41, 0.34);
				`}
			></div>
			<div
				css={`
					margin: 0 auto;
					max-width: 40rem;
					padding: 0.3rem 1rem;
				`}
			>
				<h2>
					{' '}
					<Emoji emoji="🕰️" /> Historique du projet
				</h2>
				<ul>
					{archives
						.sort((a1, a2) => a2.id.slice(0, 1) - a1.id.slice(0, 1))
						.map((el) => (
							<li key={el.id} id={el.id}>
								<details open={hash.substring(1) === el.id ? true : false}>
									<summary css="text-transform: capitalize">
										{el.attributes.title}
										<span css="font-weight: 300">
											&nbsp;{el.attributes.date}
										</span>
										<a href={'/tracemob#' + el.id} css="margin-left: 1rem">
											<Emoji emoji="⚓️" />
										</a>
									</summary>

									<ReactMarkdown source={el.body} escapeHtml={false} />
								</details>
							</li>
						))}
				</ul>
			</div>
		</div>
	)
}
