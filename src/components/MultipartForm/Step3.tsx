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
      <h2 className="text-2xl italic font-medium mb-2 uppercase">
        Confirm date
      </h2>
      <ul className="list-disc">
        <li>
          First name:{' '}
          <span className="font-semibold">
            {values.firstname ? values.firstname : '-'}
          </span>
        </li>
        <li>
          Last name:{' '}
          <span className="font-semibold">
            {values.lastname ? values.lastname : '-'}
          </span>
        </li>
        <li>
          E-mail:{' '}
          <span className="font-semibold">
            {values.email ? values.email : '-'}
          </span>
        </li>
        <li>
          Street:{' '}
          <span className="font-semibold">
            {values.street ? values.street : '-'}
          </span>
        </li>
        <li>
          Town:{' '}
          <span className="font-semibold">
            {values.town ? values.town : '-'}
          </span>
        </li>
        <li>
          Zip:{' '}
          <span className="font-semibold">{values.zip ? values.zip : '-'}</span>
        </li>
      </ul>
      <div className="flex justify-between items-center gap-4 mt-4">
        <button
          onClick={prevStep}
          className="btn btn-outline btn-neutral"
          aria-label="Go to the previous step"
        >
          Prev
        </button>
        <form onSubmit={onSubmitHandler}>
          <button type="submit" className="btn btn-success text-white">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
