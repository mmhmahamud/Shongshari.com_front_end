import { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import ProfileServices from "../../../../api/ProfileServices";
import { singleLawyerProfileFunction } from "../../../../redux/actions/ProfileAction";
import { customPosition } from "../../../../utils/Modals";

function ProfileImage({ singleLawyerData, id }) {
  console.log("singleLawyerData", singleLawyerData);
  // const [state, setState] = useState();
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      profile_photo: "",
      cover_photo: "",
      name: "",
      phone: "",
      city_id: 1,
      email: "",
      fee: 0,
    }
  );

  useEffect(() => {
    if (singleLawyerData?.name) {
      setState({
        profile_photo: singleLawyerData?.profile_photo,
        cover_photo: "",
        name: singleLawyerData?.name,
        phone: singleLawyerData?.phone,
        // city_id: singleLawyerData?.city?.id,
        email: singleLawyerData?.email,
        fee: singleLawyerData?.fee,
      });
    }
  }, [singleLawyerData]);
  let dispatch = useDispatch();
  const inputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const fileUploaded = e.target.files[0];
    setState(fileUploaded);
    let image = document.getElementById(name);
    console.log("image :>> ", name);

    image.src = URL.createObjectURL(fileUploaded);
    inputFileChange(fileUploaded, name);
  };

  const inputFileChange = async (data, name) => {
    let upload = {
      [name]: data,
      name: state.name,
      phone: state?.phone,
      city_id: 1,
      email: state?.email,
      fee: state?.fee,
    };

    // console.log("upload :>> ", upload);

    let formdata = new FormData();
    Object.keys(upload).map((key) => {
      formdata.append(key, upload[key]);
    });

    let res = await ProfileServices.lawyerUpdateProfile(formdata);

    if (res.status === 201) {
      customPosition("center", "success", "Image uploaded");
      dispatch(singleLawyerProfileFunction(id));
    } else {
      customPosition("center", "error", "Image not uploaded. Try again");
    }
  };
  let profile = "";
  if (singleLawyerData?.name) {
    let profilePhoto = singleLawyerData.profile_photo ?? "";
    let coverPhoto = singleLawyerData.cover_photo ?? "";
    profile = (
      <div className="row">
        <div className="col-lg-6">
          <div className="profile-about-box">
            <div className="top-bg">
              <img
                id="cover_photo"
                src={coverPhoto}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
            <div className="p-inner-content">
              <div className="profile-img">
                <img
                  id="profile_photo"
                  style={{ width: "100%", height: "100%" }}
                  src={profilePhoto}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="up-photo-card mb-30"
            onClick={() => document.getElementById("picture").click()}
          >
            <div className="icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="content">
              <h4>Change Profile picture</h4>
              <span>120x120p size minimum</span>
              <input
                id="picture"
                type="file"
                accept="image/*;capture=camera"
                hidden
                name="profile_photo"
                onChange={inputChange}
              />
            </div>
          </div>
          <div
            className="up-photo-card"
            onClick={() => document.getElementById("pictureCover").click()}
          >
            <div className="icon">
              <i className="fas fa-image"></i>
            </div>
            <div className="content">
              <h4>Change Cover</h4>
              <span>1200x300p size minimum</span>
              <input
                id="pictureCover"
                type="file"
                accept="image/*;capture=camera"
                hidden
                name="cover_photo"
                onChange={inputChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{profile}</>;
}

export default ProfileImage;
