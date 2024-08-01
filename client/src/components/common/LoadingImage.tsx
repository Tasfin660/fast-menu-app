import { useState } from 'react';

interface LoadingImage {
	lImgSrc: string;
	lImgStyle: string;
	src: string;
	alt: string;
	style: string;
}

const LoadingImage = ({
	lImgSrc,
	lImgStyle,
	src,
	alt,
	style
}: LoadingImage) => {
	const [imgLoading, setImgLoading] = useState(true);

	return (
		<>
			{imgLoading && (
				<div className={lImgStyle}>
					<img src={lImgSrc} alt="meal" />
				</div>
			)}
			<img
				src={src}
				alt={alt}
				className={`${style} ${imgLoading && 'hidden'}`}
				onLoad={() => setImgLoading(false)}
			/>
		</>
	);
};

export default LoadingImage;
