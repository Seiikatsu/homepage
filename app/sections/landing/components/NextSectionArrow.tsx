import {Icon} from '~/components/icon';
import {faChevronDown} from '~/icon';

type NextSectionArrowProps = {
	sectionId: string;
};

export function NextSectionArrow(props: NextSectionArrowProps) {
	const {sectionId} = props;
	return (
		<div className="absolute w-full bottom-[5vh] z-10 flex justify-center items-center">
			<a href={`#${sectionId}`}>
				<div
					className="h-8 w-8 rounded-full bg-background-variant cursor-pointer inline-flex justify-center items-center">
					<Icon icon={faChevronDown} className="animate-[move-up-down_2s_infinite]"/>
				</div>
			</a>
		</div>
	);
}
