import { MemoMemberSLider } from "./MemberSLider";
import shape from "./../../../assets/img/registered/shape.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import dummyData from "../topProfile/dummyData";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  swipeToSlide: true,
};
function MemberSection() {
  console.log(dummyData);
  const handlePopUp = () => {
    toast.warning("Under construction");
  };

  return (
    <section className="latest-registered-section">
      <img className="shape" src={shape} alt="" />
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-5">
            <div className="content">
              <div className="section-header">
                <h6 className="sub-title extra-padding wow fadeInUp">
                  Latest Registered
                </h6>
                <h2 className="title wow fadeInUp">Members</h2>
                <p>
                  if you have been looking for the someone special of your life
                  for long, then your search ends here
                </p>
              </div>
              <Link onClick={handlePopUp} className="custom-button">
                Join Now !
              </Link>
            </div>
          </div>
          <div className="col-xl-7">
            <Slider {...settings}>
              {dummyData.map((data) => (
                <div className="swiper-slide">
                  <div className="single-slider">
                    <div className="img">
                      <img src={data.img} alt="img" />
                    </div>
                    <div className="inner-content">
                      <h4 className="name">{data.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <MemoMemberSLider />
      </div>
    </section>
  );
}

export default MemberSection;
