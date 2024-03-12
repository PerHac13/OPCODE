import "./Footer.css";
import logo from "../../assets/college_logo.png";
const Footer = () => {
  return (
    <>
    <footer>
      <div className="main-footer-box">
        <img className="logo-college" src={logo} alt="IIIT Bhagalpur Logo" />
        <div className="college-name">
          {" "}
          Indian Institute of Information Technology - Bhagalpur
        </div>
        <div className="social-info">Connect with us on social media</div>
        <div className="logos-social-media">
          <div>
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8 37.7998V20.9998H11.2V15.3998H16.8V12.3926C16.8 6.69883 19.5734 4.19983 24.3054 4.19983C26.572 4.19983 27.7704 4.36783 28.3374 4.44483V9.79983H25.1104C23.1014 9.79983 22.4 10.8596 22.4 13.0072V15.3998H28.287L27.4876 20.9998H22.4V37.7998H16.8Z"
                fill="#CAD4E0"
              />
            </svg>
          </div>
          <div>
            {" "}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_150_749)">
                <path
                  d="M32 31.292V19.46C32 13.12 28.616 10.17 24.104 10.17C20.463 10.17 18.831 12.173 17.922 13.579V10.655H11.062C11.153 12.592 11.062 31.292 11.062 31.292H17.922V19.767C17.922 19.152 17.966 18.535 18.148 18.095C18.643 16.862 19.772 15.586 21.666 15.586C24.149 15.586 25.141 17.478 25.141 20.252V31.293L32 31.292ZM3.835 7.83803C6.226 7.83803 7.717 6.25203 7.717 4.27103C7.673 2.24703 6.227 0.707031 3.881 0.707031C1.535 0.707031 0 2.24603 0 4.27103C0 6.25203 1.489 7.83803 3.792 7.83803H3.835ZM7.265 31.292V10.655H0.406V31.292H7.265Z"
                  fill="#CAD4E0"
                />
              </g>
              <defs>
                <clipPath id="clip0_150_749">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            {" "}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_150_751)">
                <path
                  d="M10.6675 16C10.6675 13.0546 13.0546 10.6662 16 10.6662C18.9454 10.6662 21.3338 13.0546 21.3338 16C21.3338 18.9454 18.9454 21.3338 16 21.3338C13.0546 21.3338 10.6675 18.9454 10.6675 16ZM7.78417 16C7.78417 20.5376 11.4624 24.2158 16 24.2158C20.5376 24.2158 24.2158 20.5376 24.2158 16C24.2158 11.4624 20.5376 7.78417 16 7.78417C11.4624 7.78417 7.78417 11.4624 7.78417 16ZM22.621 7.45848C22.621 8.51826 23.4805 9.379 24.5415 9.379C25.6013 9.379 26.462 8.51826 26.462 7.45848C26.462 6.39871 25.6026 5.53926 24.5415 5.53926C23.4805 5.53926 22.621 6.39871 22.621 7.45848ZM9.53538 29.0236C7.97544 28.9525 7.12763 28.6927 6.56414 28.473C5.81712 28.1822 5.28465 27.8359 4.72375 27.2763C4.16414 26.7166 3.81648 26.1842 3.52698 25.4372C3.30727 24.8737 3.0475 24.0258 2.97641 22.4659C2.89887 20.7793 2.88336 20.2727 2.88336 16C2.88336 11.7273 2.90016 11.222 2.97641 9.53409C3.0475 7.97415 3.30856 7.12763 3.52698 6.56284C3.81777 5.81583 4.16414 5.28336 4.72375 4.72246C5.28336 4.16284 5.81583 3.81519 6.56414 3.52569C7.12763 3.30598 7.97544 3.0462 9.53538 2.97512C11.222 2.89758 11.7286 2.88207 16 2.88207C20.2727 2.88207 20.778 2.89887 22.4659 2.97512C24.0258 3.0462 24.8724 3.30727 25.4372 3.52569C26.1842 3.81519 26.7166 4.16284 27.2775 4.72246C27.8372 5.28207 28.1835 5.81583 28.4743 6.56284C28.694 7.12633 28.9538 7.97415 29.0249 9.53409C29.1024 11.222 29.1179 11.7273 29.1179 16C29.1179 20.2714 29.1024 20.778 29.0249 22.4659C28.9538 24.0258 28.6927 24.8737 28.4743 25.4372C28.1835 26.1842 27.8372 26.7166 27.2775 27.2763C26.7179 27.8359 26.1842 28.1822 25.4372 28.473C24.8737 28.6927 24.0258 28.9525 22.4659 29.0236C20.7793 29.1011 20.2727 29.1166 16 29.1166C11.7286 29.1166 11.222 29.1011 9.53538 29.0236ZM9.40355 0.0969305C7.70016 0.174475 6.537 0.444588 5.51987 0.840065C4.46785 1.24847 3.57609 1.79645 2.68562 2.68562C1.79645 3.5748 1.24847 4.46656 0.840065 5.51987C0.444588 6.537 0.174475 7.70016 0.0969305 9.40355C0.0180937 11.1095 0 11.6549 0 16C0 20.3451 0.0180937 20.8905 0.0969305 22.5964C0.174475 24.2998 0.444588 25.463 0.840065 26.4801C1.24847 27.5321 1.79515 28.4252 2.68562 29.3144C3.5748 30.2036 4.46656 30.7502 5.51987 31.1599C6.53829 31.5554 7.70016 31.8255 9.40355 31.9031C11.1108 31.9806 11.6549 32 16 32C20.3464 32 20.8905 31.9819 22.5964 31.9031C24.2998 31.8255 25.463 31.5554 26.4801 31.1599C27.5321 30.7502 28.4239 30.2036 29.3144 29.3144C30.2036 28.4252 30.7502 27.5321 31.1599 26.4801C31.5554 25.463 31.8268 24.2998 31.9031 22.5964C31.9806 20.8892 31.9987 20.3451 31.9987 16C31.9987 11.6549 31.9806 11.1095 31.9031 9.40355C31.8255 7.70016 31.5554 6.537 31.1599 5.51987C30.7502 4.46785 30.2036 3.57609 29.3144 2.68562C28.4252 1.79645 27.5322 1.24847 26.4814 0.840065C25.463 0.444588 24.2998 0.173183 22.5977 0.0969305C20.8918 0.0193861 20.3464 0 16.0013 0C11.6549 0 11.1108 0.0180937 9.40355 0.0969305Z"
                  fill="#CAD4E0"
                />
              </g>
              <defs>
                <clipPath id="clip0_150_751">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
