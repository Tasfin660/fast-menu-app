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
			{imgLoading && <img src={lImgSrc} alt="meal" className={lImgStyle} />}
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
