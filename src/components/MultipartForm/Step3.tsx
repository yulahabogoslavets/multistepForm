interface Step3Props {
  prevStep: () => void;
  values: {
    firstname: string;
    lastname: string;
    email: string;
    street: string;
    town: string;
    zip: string;
  };
  onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function Step3({ prevStep, values, onSubmitHandler }: Step3Props) {
  return (
    <>
      <h2>Confirm date</h2>
      <ul>
        <li>First name: {values.firstname}</li>
        <li>Last name: {values.lastname}</li>
        <li>E-mail: {values.email}</li>
        <li>Street: {values.street}</li>
        <li>Town: {values.town}</li>
        <li>Zip: {values.zip}</li>
      </ul>
      <button onClick={prevStep}>Prev</button>
      <form onSubmit={onSubmitHandler}>
        <button type="submit">Send</button>
      </form>
    </>
  );
}
