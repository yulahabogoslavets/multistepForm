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
        <fieldset
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
          aria-labelledby="step1-legend"
        >
          <legend id="step1-legend" className="fieldset-legend">
            Step 1
          </legend>

          <label className="floating-label" id="firstname-label">
            <span>First name</span>
            <input
              type="text"
              className="input mb-4"
              placeholder="First name"
              name="firstname"
              defaultValue={values.firstname}
              onChange={onInputChange}
              aria-required="true"
              aria-labelledby="firstname-label"
            />
          </label>

          <label className="floating-label" id="lastname-label">
            <span>Last name</span>
            <input
              type="text"
              className="input mb-4"
              placeholder="Last name"
              name="lastname"
              defaultValue={values.lastname}
              onChange={onInputChange}
              aria-required="true"
              aria-labelledby="lastname-label"
            />
          </label>

          <label className="floating-label" id="email-label">
            <span>E-Mail</span>
            <input
              type="email"
              className="input"
              placeholder="E-mail"
              name="email"
              defaultValue={values.email}
              onChange={onInputChange}
              aria-required="true"
              aria-labelledby="email-label"
            />
          </label>
        </fieldset>
      </form>
      <div className="flex justify-end mt-4">
        <button onClick={nextStep} className="btn btn-neutral text-white"  aria-label="Go to the next step">
          Next
        </button>
      </div>
    </>
  );
}
