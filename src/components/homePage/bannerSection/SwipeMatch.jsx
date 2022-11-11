import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FollowServices from "../../../api/FollowServices";
import { toastifyAlertError, toastifyAlertSuccess } from "../../toast/toast";
import WithoutLoginSwipeMatch from "./WithoutLoginSwipeMatch";
import dummyData from "../topProfile/dummyData";

function SwipeMatch() {
  const [match, setMatch] = useState(4);

  return (
    <div className="col-xl-4 col-lg-5  col-md-6">
      <div className="swiper mySwiperImg">
        <div className="">
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            navigation={{
              clickable: true,
            }}
            modules={[Navigation]}
            className=" swiper-wrapper"
          >
            <WithoutLoginSwipeMatch match={match} setMatch={setMatch} item={dummyData[match]} />
          </Swiper>
        </div>
        <div className="swipe-header">
          <h4>Swipe & Match</h4>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}

export default SwipeMatch;
