import languageColors from "gh-language-colors";
import {useMemo} from "react";
import {Icon} from '~/components/icon';
import {H3, P, Span} from 'app/components/text';
import {faBalanceScale, faCodeBranch, faStar} from '~/icon';
import {ProjectInfo} from '~/sections/projects/types';

const colors: { [lang: string]: string } = languageColors;

export function ProjectCard(props: ProjectInfo) {
	const {title, description, language, stars, forks, license, url} = props;

	const color = useMemo(() => {
		return language && (
			<Span className="flex items-baseline">
				<svg className="h-[12px] w-[12px] mr-1">
					<circle cx="6" cy="6" r="6" stroke="none" fill={`${colors[language]}`}/>
				</svg>
				{language}
			</Span>
		);
	}, [language]);

	return (
		<div className="border border-solid border-border bg-background px-4 pb-2">
			<a href={url} target="_blank" rel="noreferrer" className="hover:[&>h3]:text-text">
				<H3 noUnderline className="overflow-hidden truncate">
					{title}
				</H3>
			</a>
			{description && <P>{description}</P>}
			<div className="flex gap-4">
				{color}
				<Span>
					<Icon icon={faStar} type="secondary" className="mr-1"/>
					{stars}
				</Span>
				<Span>
					<Icon icon={faCodeBranch} type="secondary" className="mr-1"/>
					{forks}
				</Span>
				{license && (
					<Span>
						<Icon icon={faBalanceScale} type="secondary" className="mr-1"/>
						{license}
					</Span>
				)}
			</div>
		</div>
	);
}
