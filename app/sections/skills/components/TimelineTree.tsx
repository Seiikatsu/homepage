import {H6, P} from 'app/components/text';
import {TimelineItem} from '~/sections/skills/components/TimelineItem';

export type TimelineEntry = {
	title: string;
	timeSpan: string;
	description: string;
};

export type TimelineTreeProps = {
	entries: TimelineEntry[];
};

export function TimelineTree(props: TimelineTreeProps) {
	const {entries} = props;

	return (
		<ul style={{
			// @ts-ignore
			'--anchor-width': '6px',
			'--item-inline-margin-start': '2.5em',
			'--timeline-item-anchor-size': '16px',
		}}
		    className={`relative w-[330px] m-0 py-4 px-0 list-none before:absolute before:left-0 before:top-0 before:block before:w-[var(--anchor-width)] before:content-[\'\'] before:h-full before:bg-gradient-to-b before:from-transparent before:via-background-variant before:to-transparent`}>
			{entries.map((entry, idx) => (
				<TimelineItem key={entry.title + idx}>
					<div className="max-w-[300px]">
						<div className="flex items-start">
							{/* calculate negative left value to move the point on top of the timeline anchor by using:
		                        - item inline margin (left item anchor point is right above the left timeline anchor)
		                        - width of timeline item anchor - timeline anchor divided by 2 because the ball should be centered on the timeline anchor
		                        - negate the whole value to move it to the left
							*/}
							<h3 className={`relative inline text-text bg-background-variant m-0 px-[10px] py-[6px] rounded-md before:absolute before:top-1/2 before:block before:primary before:rounded-full before:mt-[10px] before:w-[var(--timeline-item-anchor-size)] before:h-[var(--timeline-item-anchor-size)] before:left-[calc(-1_*_((var(--timeline-item-anchor-size)_-_var(--anchor-width))_/_2_+_var(--item-inline-margin-start)))] after:content-[\'\'] after:absolute after:right-full after:top-1/2 after:h-0 after:w-0 after:-mt-[8px] after:border-[8px] after:border-solid after:border-transparent after:border-r-background-variant`}>{entry.title}</h3>
							<H6 noUnderline
							    className="inline m-0 mt-[5px] pt-[4px] pl-[6px] pr-[6px] pb-[4px] bg-background-variant">{entry.timeSpan}</H6>
						</div>
						<P className="ml-[10px]]">
							{entry.description}
						</P>
					</div>
				</TimelineItem>
			))}
		</ul>
	);
}
