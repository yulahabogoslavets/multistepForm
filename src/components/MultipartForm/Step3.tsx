interface Step3Props {
    prevStep: () => void
    values: {
        firstname: string
        lastname: string
        email: string
        street: string
        town: string
        zip: string
    }
    onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void
}

export function Step3({ prevStep, values, onSubmitHandler }: Step3Props) {
    return (
        <>
            <h2 className='text-2xl  font-medium mb-2 uppercase text-center'>
                Confirm date
            </h2>

            <dl className='grid grid-cols-2 gap-x-4 gap-y-2 text-lg'>
                <dt className='font-semibold'>First name:</dt>
                <dd>{values.firstname || '-'}</dd>
                <dt className='font-semibold'>Last name:</dt>
                <dd>{values.lastname || '-'}</dd>
                <dt className='font-semibold'>E-mail:</dt>
                <dd>{values.email || '-'}</dd>
                <dt className='font-semibold'>Street:</dt>
                <dd>{values.street || '-'}</dd>
                <dt className='font-semibold'>Town:</dt>
                <dd>{values.town || '-'}</dd>
                <dt className='font-semibold'>Zip:</dt>
                <dd>{values.zip || '-'}</dd>
            </dl>

            <p className='text-lg mt-4'>
                Please review your data before submitting the form.
            </p>

            <div className='flex justify-between items-center gap-4 mt-4'>
                <button
                    onClick={prevStep}
                    className='btn btn-outline btn-neutral'
                    aria-label='Go to the previous step'
                >
                    Prev
                </button>
                <form onSubmit={onSubmitHandler}>
                    <button
                        type='submit'
                        className='btn btn-success text-white'
                    >
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}
