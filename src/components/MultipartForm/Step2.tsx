interface Step2Props {
  prevStep: () => void;
  nextStep: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: {
    street: string;
    town: string;
    zip: string;
  };
}

export function Step2({
  prevStep,
  nextStep,
  onInputChange,
  values,
}: Step2Props) {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Stree"
          name="street"
          defaultValue={values.street}
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Town"
          name="town"
          defaultValue={values.town}
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="Zip"
          name="zip"
          defaultValue={values.zip}
          onChange={onInputChange}
        />
      </form>
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
    </>
  );
}
