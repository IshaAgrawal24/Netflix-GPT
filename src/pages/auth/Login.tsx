import { useRef, useState } from 'react';
import Header from '../../components/Header';
import { validate } from '../../utils/validate';

type ErrorMessage = {
  [key: string]: string;
};

const Login = () => {
  const [isSignInForm, setSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({});

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm)
  }

  const handleFormSubmit = () => {
    const errorMessage = validate(email.current!.value, password.current!.value)
    setErrorMessage(errorMessage)
  }

  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
        alt="Banner"
        className="w-full"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_0%)]"></div>

      <div className="absolute inset-0 z-10  px-20">
        <Header />
        <div className='flex justify-center align-middle pt-6'>
          <div className='w-[40%] text-white px-20 py-10 bg-black/55'>
            <h2 className='text-3xl font-bold mb-8'>{isSignInForm ? "Sign In" : "Sign Up"}</h2>

            <form onSubmit={(e) => e.preventDefault()}>

              {!isSignInForm && <input type="text" placeholder='Full Name' className='py-2 px-5 w-full border-1 rounded-sm border-white mb-8' />}

              <div className='mb-8'>
                <input ref={email} type="text" placeholder='Email or Mobile number' className='py-2 px-5 w-full border-1 rounded-sm border-white' />
                {errorMessage?.email && <span className='text-red-500'>{errorMessage?.email}</span>}
              </div>

              <div className='mb-8'>
                <input ref={password} type="password" placeholder='Password' className='py-2 px-5 w-full border-1 rounded-sm border-white' />
                {errorMessage?.password && <span className='text-red-500'>{errorMessage?.password}</span>}
              </div>

              <button onClick={handleFormSubmit} className='mb-8 bg-red-600 w-full py-2 px-5 font-bold rounded-sm cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
              {isSignInForm ?
                <p className='mb-8'>New to Netflix?&nbsp;<span onClick={toggleSignInForm} className='font-bold cursor-pointer hover:underline'> Sign up now</span></p>
                : <p className='mb-8'>Already registered?&nbsp;<span onClick={toggleSignInForm} className='font-bold cursor-pointer hover:underline'>Sign in now</span></p>
              }
            </form>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Login