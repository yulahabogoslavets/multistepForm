import { useState } from 'react';
import { Step1 } from './components/MultipartForm/Step1';
import { Step2 } from './components/MultipartForm/Step2';
import { Step3 } from './components/MultipartForm/Step3';

import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [formdata, setFormdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    street: '',
    town: '',
    zip: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          onInputChange={onInputChange}
          values={formdata}
        />
      );
    case 2:
      return (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          onInputChange={onInputChange}
          values={formdata}
        />
      );
    case 3:
      return (
        <Step3
          prevStep={prevStep}
          values={formdata}
          onSubmitHandler={onSubmitHandler}
        />
      );
    default:
      return <h1>Form failed, pls contact support!</h1>;
  }

  return <></>;
}

export default App;
