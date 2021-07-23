import React from "react";
import "../../../Styles/Hasham.css";
const Interests = () => {
  return (
    <>
      <div className="skills">
        <div className="skill_title">
          <div>Interests</div>
        </div>
        <div>
          <div className="interests_container">
            <div className="interests">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                alt=""
              />
            </div>
            <div className="interests_info ml-3">
              <div className="interests_title">Google</div>
              <div className="interests_views ">586,225 followers</div>
            </div>

            <div className="interests ml-auto">
              <img
                src="https://rosenfeldmedia.com/enterprise2019/wp-content/uploads/sites/13/2018/03/cisco-logo.png"
                alt=""
              />
            </div>
            <div className="interests_info ml ml-3">
              <div className="interests_title">Cisco</div>
              <div className="interests_views">595,675 viewers</div>
            </div>
          </div>
        </div>
        <div>
          <div className="interests_container">
            <div className="interests">
              <img
                src="https://i.vimeocdn.com/portrait/13222921_640x640"
                alt=""
              />
            </div>
            <div className="interests_info ml-3">
              <div className="interests_title">Betsson group</div>
              <div className="interests_views">565,76 followers</div>
            </div>

            <div className="interests ml-auto">
              <img
                src="https://toppng.com/uploads/preview/instagram-logo-transparent-logo-instagram-vector-2021-116177766354twhxoagvv.png"
                alt=""
              />
            </div>
            <div className="interests_info ml ml-3">
              <div className="interests_title">Instagram</div>
              <div className="interests_views">554,655 viewers</div>
            </div>
          </div>
        </div>
        <div>
          <div className="interests_container">
            <div className="interests">
              <img
                src="http://1.bp.blogspot.com/_Tg1CIil2fDM/TFqanUZjdWI/AAAAAAAAAqg/CkkAX5fvbI4/s320/apple_logo_2.jpg"
                alt=""
              />
            </div>
            <div className="interests_info ml-3">
              <div className="interests_title">Apple inc</div>
              <div className="interests_views">545,785 followers</div>
            </div>

            <div className="interests ml-auto">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQGnoXT8Ty8whg/company-logo_200_200/0/1622566352666?e=2159024400&v=beta&t=N25JIgaaMgiPz6k--dhmMLi1i4ciqUvzNHzOYArQZlo"
                alt=""
              />
            </div>
            <div className="interests_info ml ml-3 ">
              <div className="interests_title">Amazon Web</div>
              <div className="interests_views ">537,775 viewers</div>
            </div>

          </div>
        </div>
      </div>
      <div className="show_more_container py-2">
        <span>Show more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          className="mercado-match"
          width="16"
          height="16"
          focusable="false"
        >
          <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
        </svg>
      </div>
    </>
  );
};

export default Interests;
