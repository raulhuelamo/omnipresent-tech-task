import { Form } from './components/Form';

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <h1 className="font-bold font-mono text-center text-2xl mb-5">
        Omnipresent Employee Onboarding
      </h1>
      <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200 p-10">
        <Form />
      </div>
    </div>
  );
};
