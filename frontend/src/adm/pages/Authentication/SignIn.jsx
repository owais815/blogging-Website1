import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';

const SignIn = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img className="hidden dark:block" src={Logo} alt="Logo" />
                <img className="dark:hidden" src={LogoDark} alt="Logo" />
              </Link>

              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>

              <span className="mt-15 inline-block">
                <svg
                  width="350"
                  height="350"
                  viewBox="0 0 350 350"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.5825 294.844L30.5069 282.723C25.0538 280.414 19.4747 278.414 13.7961 276.732L13.4079 282.365L11.8335 276.159C4.79107 274.148 0 273.263 0 273.263C0 273.263 6.46998 297.853 20.0448 316.653L35.8606 319.429L23.5737 321.2C25.2813 323.253 27.1164 325.196 29.0681 327.019C48.8132 345.333 70.8061 353.736 78.1898 345.787C85.5736 337.838 75.5526 316.547 55.8074 298.235C49.6862 292.557 41.9968 288.001 34.2994 284.415L33.5825 294.844Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M62.8332 281.679L66.4705 269.714C62.9973 264.921 59.2562 260.327 55.2652 255.954L52.019 260.576L53.8812 254.45C48.8923 249.092 45.2489 245.86 45.2489 245.86C45.2489 245.86 38.0686 270.253 39.9627 293.358L52.0658 303.903L40.6299 299.072C41.0301 301.712 41.596 304.324 42.3243 306.893C49.7535 332.77 64.2336 351.323 74.6663 348.332C85.0989 345.341 87.534 321.939 80.1048 296.063C77.8019 288.041 73.5758 280.169 68.8419 273.123L62.8332 281.679Z"
                    fill="#F2F2F2"
                  />
                  <path
                    d="M243.681 82.9153H241.762V30.3972C241.762 26.4054 240.975 22.4527 239.447 18.7647C237.918 15.0768 235.677 11.7258 232.853 8.90314C230.028 6.0805 226.674 3.84145 222.984 2.31385C219.293 0.786245 215.337 0 211.343 0H99.99C91.9222 0 84.1848 3.20256 78.48 8.90314C72.7752 14.6037 69.5703 22.3354 69.5703 30.3972V318.52C69.5703 322.512 70.3571 326.465 71.8859 330.153C73.4146 333.841 75.6553 337.192 78.48 340.015C81.3048 342.837 84.6582 345.076 88.3489 346.604C92.0396 348.131 95.9952 348.918 99.99 348.918H211.343C219.41 348.918 227.148 345.715 232.852 340.014C238.557 334.314 241.762 326.582 241.762 318.52V120.299H243.68L243.681 82.9153Z"
                    fill="#E6E6E6"
                  />
                  <path
                    d="M212.567 7.9054H198.033C198.701 9.54305 198.957 11.3199 198.776 13.0793C198.595 14.8387 197.984 16.5267 196.997 17.9946C196.01 19.4625 194.676 20.6652 193.114 21.4967C191.552 22.3283 189.809 22.7632 188.039 22.7632H124.247C122.477 22.7631 120.734 22.3281 119.172 21.4964C117.61 20.6648 116.277 19.462 115.289 17.9942C114.302 16.5263 113.691 14.8384 113.511 13.079C113.33 11.3197 113.585 9.54298 114.254 7.9054H100.678C94.6531 7.9054 88.8749 10.297 84.6146 14.5542C80.3543 18.8113 77.9609 24.5852 77.9609 30.6057V318.31C77.9609 324.331 80.3543 330.105 84.6146 334.362C88.8749 338.619 94.6531 341.011 100.678 341.011H212.567C218.592 341.011 224.37 338.619 228.63 334.362C232.891 330.105 235.284 324.331 235.284 318.31V30.6053C235.284 24.5848 232.891 18.811 228.63 14.554C224.37 10.297 218.592 7.9054 212.567 7.9054Z"
                    fill="white"
                  />
                  <path
                    d="M142.368 122.512C142.368 120.501 142.898 118.526 143.904 116.784C144.911 115.043 146.359 113.597 148.102 112.592C146.36 111.587 144.383 111.057 142.371 111.057C140.358 111.057 138.381 111.586 136.639 112.591C134.896 113.596 133.448 115.042 132.442 116.784C131.436 118.525 130.906 120.501 130.906 122.512C130.906 124.522 131.436 126.498 132.442 128.239C133.448 129.981 134.896 131.427 136.639 132.432C138.381 133.437 140.358 133.966 142.371 133.966C144.383 133.966 146.36 133.436 148.102 132.431C146.359 131.426 144.911 129.981 143.904 128.239C142.898 126.498 142.368 124.522 142.368 122.512Z"
                    fill="#E6007E"
                  />
                  <path
                    d="M174.339 222.368C174.339 220.357 174.869 218.382 175.875 216.64C176.882 214.899 178.33 213.454 180.073 212.448C178.331 211.443 176.353 210.913 174.34 210.913C172.328 210.913 170.351 211.443 168.609 212.448C166.866 213.453 165.418 214.899 164.411 216.64C163.405 218.382 162.875 220.357 162.875 222.368C162.875 224.378 163.405 226.354 164.411 228.095C165.418 229.837 166.866 231.282 168.609 232.287C170.351 233.291 172.328 233.82 174.34 233.82C176.353 233.82 178.331 233.291 180.073 232.287C178.33 231.282 176.882 229.837 175.875 228.095C174.869 226.354 174.339 224.378 174.339 222.368Z"
                    fill="#E6007E"
                  />
                  <path
                    d="M141.18 178.078C141.18 176.067 141.709 174.092 142.715 172.35C143.721 170.609 145.169 169.163 146.912 168.158C145.169 167.153 143.191 166.623 141.18 166.623C139.168 166.623 137.191 167.153 135.448 168.158C133.705 169.163 132.258 170.609 131.251 172.35C130.245 174.092 129.715 176.067 129.715 178.078C129.715 180.089 130.245 182.065 131.251 183.807C132.258 185.548 133.705 187.994 135.448 189.999C137.191 192.004 139.168 192.533 141.18 192.533C143.191 192.533 145.169 192.004 146.912 189.999C145.169 187.994 143.721 185.548 142.715 183.807C141.709 182.065 141.18 180.089 141.18 178.078Z"
                    fill="#E6007E"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="w-full xl:w-1/2">
            <div className="py-17.5 px-12">
              <h2 className="text-3xl font-medium text-black dark:text-white">
                Sign In
              </h2>
              <p className="mt-4 text-base text-body-dark dark:text-white/60">
                Enter your email and password to sign in.
              </p>

              <form className="mt-10">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-black dark:text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-stroke bg-white py-4 px-5 text-base font-medium text-black placeholder-body-dark outline-none focus:border-primary focus:ring-1 dark:border-strokedark dark:bg-boxdark dark:text-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="mb-3 block text-base font-medium text-black dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full rounded-lg border border-stroke bg-white py-4 px-5 text-base font-medium text-black placeholder-body-dark outline-none focus:border-primary focus:ring-1 dark:border-strokedark dark:bg-boxdark dark:text-white"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary text-base font-medium text-white transition duration-200 hover:bg-opacity-90 focus:ring-1 focus:ring-primary dark:bg-primary-dark dark:hover:bg-primary-dark/80"
                >
                  Sign In
                </button>
              </form>

              <p className="mt-6 text-base text-body-dark dark:text-white/60">
                Don’t have an account?{' '}
                <Link
                  to="/sign-up"
                  className="text-primary transition duration-200 hover:text-opacity-80 dark:text-primary-dark dark:hover:text-opacity-80"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
