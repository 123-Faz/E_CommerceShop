import React from "react";
import Slider from "react-slick";
// Import slick carousel css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container mx-auto px-4">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold mt-2">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="max-w-[85rem] mx-auto">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="px-3">
                <div className="bg-white rounded-xl p-6 shadow-lg dark:bg-gray-800 mx-2 h-full">
                  <div className="flex flex-col items-center">
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt={`${data.name}'s testimonial`}
                        className="rounded-full w-20 h-20 object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-4">
                        {data.text}
                      </p>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {data.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Add custom styles for Slick slider */}
      <style jsx>{`
        .slick-slide {
          padding: 0 10px;
        }
        .slick-list {
          margin: 0 -10px;
        }
        .slick-dots li button:before {
          font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
          color: #4F46E5;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
