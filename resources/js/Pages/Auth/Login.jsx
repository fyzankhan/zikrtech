import { useEffect } from "react";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";
import StoreLayout from "@/Layouts/StoreLayout";
import LoginImage from "@/Components/Icon/LoginImage";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <StoreLayout>
      <Head title="Log in" />

      {status && <div className="mb-4 font-medium text-sm ">{status}</div>}

      {/* <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData("email", e.target.value)}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            onChange={(e) => setData("password", e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData("remember", e.target.checked)}
            />
            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
              Remember me
            </span>
          </label>
        </div>

        <div className="flex items-center justify-end mt-4">
          {canResetPassword && (
            <Link
              href={route("password.request")}
              className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              Forgot your password?
            </Link>
          )}

          <PrimaryButton className="ms-4" disabled={processing}>
            Log in
          </PrimaryButton>
        </div>
      </form> */}

      <div className="w-full  pt-0 pb-0">
        <div className="login-page-wrapper w-full py-10">
          <div className="container-x mx-auto">
            <div className="lg:flex items-center relative">
              <div className="lg:w-[572px] w-full h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
                <form className="w-full">
                  <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                    <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                      Log In
                    </h1>
                    <div className="shape -mt-6">
                      <svg
                        width={172}
                        height={29}
                        viewBox="0 0 172 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727"
                          stroke="#FFBB38"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="input-area">
                    <div className="input-item mb-5">
                      <div className="input-com w-full h-full">
                        <label
                          className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                          htmlFor="email"
                        >
                          Email Address*
                        </label>
                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                          <input
                            className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                          />
                        </div>
                      </div>
                      <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div className="input-item mb-5">
                      <div className="input-com w-full h-full">
                        <label
                          className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                          htmlFor="password"
                        >
                          Password*
                        </label>
                        <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                          <input
                            placeholder="● ● ● ● ● ●"
                            className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                            type="password"
                            id="password"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="forgot-password-area flex justify-between items-center mb-7">
                      <div className="remember-checkbox flex items-center space-x-2.5">
                        <button
                          type="button"
                          className="w-5 h-5 text-qblack flex justify-center items-center border border-light-gray"
                        />
                        <span className="text-base text-black">
                          Remember Me
                        </span>
                      </div>
                      <a
                        href="/forgot-password"
                        className="text-base text-qyellow"
                      >
                        Forgot Password
                      </a>
                    </div>
                    <div className="signin-area">
                      <div className="flex justify-center">
                        <button
                          type="button"
                          className="mb-6 text-sm text-black border-black w-full h-[50px] font-semibold flex justify-center items-center"
                        >
                          <span>Log In</span>
                        </button>
                      </div>
                    </div>
                    <div className="signup-area flex justify-center">
                      <p className="text-base text-qgraytwo font-normal">
                        Dont’t have an account ?
                        <Link href="/register" className="ml-2 text-qblack">
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center ">
                <div
                  className="absolute xl:-right-20 -right-[138px]"
                  style={{ top: "calc(50% - 258px)" }}
                >
                  <LoginImage></LoginImage>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
}
