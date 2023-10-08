import { useState } from "react";
import "../styles/aszefr-image-carousel.css";

type SliderImg = {
    url: string
    alt: string
}

export default function AszefrImageCarousel(props: {imgArray: SliderImg[]}) {

    const {imgArray} = props;
    const classname_prefix: string = "aszefr";
    const [activeSlide, setActiveSlide] = useState<number>(0);

    return (
        <div className={`${classname_prefix}__carousel-wrapper`}>
            <div className={`${classname_prefix}__carousel-arrow ${classname_prefix}__carousel-arrow-prev`} onClick={() => setActiveSlide(activeSlide === 0 ? imgArray.length - 1 : activeSlide - 1)}>{"<"}</div>
            <div className={`${classname_prefix}__carousel`} >
                {imgArray.map((img, i) => {
                    return (
                        <div key={i} className={i === activeSlide ? `${classname_prefix}__carousel-slide active` : `${classname_prefix}__carousel-slide hidden`}>
                            <img className={`${classname_prefix}__carousel-slide-image`} src={img.url} alt={img.alt} height="auto" width="auto" />
                        </div>
                    )
                })}
            </div>
            <div className={`${classname_prefix}__carousel-arrow ${classname_prefix}__carousel-arrow-next`} onClick={() => setActiveSlide(activeSlide === imgArray.length - 1 ? 0 : activeSlide + 1)}>{">"}</div>
        </div>
    );
}