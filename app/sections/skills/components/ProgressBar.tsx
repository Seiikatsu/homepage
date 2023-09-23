import useOnFirstAppearance from '~/hooks/useOnFirstAppearance';

export type ProgressBarProps = {
	title: string;
	progress: number;
};

export function ProgressBar(props: ProgressBarProps) {
	const {title, progress} = props;
	const [appeared, ref] = useOnFirstAppearance<HTMLDivElement>();
	return (
		<div className="mb-6">
			<h3 className="m-0 mb-2 text-text">{title}</h3>
			<div ref={ref} className={`relative h-[6px] bg-background-variant`}>
				<h6 className={`absolute bottom-0 right-0 m-0 mb-[6px] py-0.5 px-3 text-text bg-background-variant`}>{progress}%</h6>
				<span
					className="absolute top-0 left-0 h-full w-[1%] bg-primary transition-all duration-1000"
					style={{width: appeared ? `${progress}%` : undefined}}
				></span>
			</div>
		</div>
	);
}
