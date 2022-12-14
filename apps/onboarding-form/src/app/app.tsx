import { Form } from './components/Form';
import logo from '../assets/omnipresent.png';

// #ff4389

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <img className="mx-auto my-2 w-2/3 max-w-[500px]" src={logo} alt="Logo" />
      <h1 className="font-bold font-mono text-center text-2xl mb-5">
        Employee Onboarding
      </h1>
      <div className="bg-white shadow w-full max-w-[1000px] rounded-lg p-8 md:mx-8 md:w-auto lg:mx-auto">
        <Form />
      </div>
    </div>
  );
};
