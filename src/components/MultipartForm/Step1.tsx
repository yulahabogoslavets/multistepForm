interface Step1Props {
  nextStep: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: {
    firstname: string;
    lastname: string;
    email: string;
  };
}

export function Step1({ nextStep, onInputChange, values }: Step1Props) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="First name"
          name="firstname"
          defaultValue={values.firstname}
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Last name"
          name="lastname"
          defaultValue={values.lastname}
          onChange={onInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          defaultValue={values.email}
          onChange={onInputChange}
        />
      </form>
      <button onClick={nextStep}>Next</button>
    </>
  );
}
