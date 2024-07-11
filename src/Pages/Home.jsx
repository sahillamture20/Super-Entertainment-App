import { Form } from "../components";

function Home() {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="w-1/2 relative">
        <p className="absolute bottom-0 left-0 text-white bg-[url('./assets/image13.png')] object-cover w-full h-full text-3xl font-bold pl-9">
          Discover new things on Superapp
        </p>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-black text-white">
        <div className="max-w-md">
          <h1 className="text-3xl text-center text-green-400">Super App</h1>
          <p className="text-center mt-2 mb-5">Create your new account</p>
          <Form />
          <div className="text-xs mt-2 ml-5 px-11 flex flex-col text-left">
            <p className="mb-2">
              By clicking on Sign up, you agree to Superapp{" "}
              <span className="text-green-400">
                Terms and Conditions of Use
              </span>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head to Superapp{" "}
              <span className="text-green-400">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
