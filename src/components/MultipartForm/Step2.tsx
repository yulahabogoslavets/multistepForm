interface Step2Props {
    prevStep: () => void
    nextStep: () => void
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    values: {
        street: string
        town: string
        zip: string
    }
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
                <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
                    <legend className='fieldset-legend'>Address</legend>

                    <label className='floating-label' id='street-label'>
                        <span>Street</span>
                        <input
                            type='text'
                            className='input mb-4'
                            placeholder='Street'
                            name='street'
                            defaultValue={values.street}
                            onChange={onInputChange}
                            aria-labelledby='street-label'
                        />
                    </label>

                    <label className='floating-label' id='town-label'>
                        <span>Town</span>
                        <input
                            type='text'
                            className='input mb-4'
                            placeholder='Town'
                            name='town'
                            defaultValue={values.town}
                            onChange={onInputChange}
                            aria-labelledby='town-label'
                        />
                    </label>

                    <label className='floating-label' id='zip-label'>
                        <span>Zip</span>
                        <input
                            type='text'
                            className='input'
                            placeholder='Zip'
                            name='zip'
                            defaultValue={values.zip}
                            onChange={onInputChange}
                            aria-labelledby='zip-label'
                        />
                    </label>
                </fieldset>
            </form>
            <div className='flex justify-between items-center gap-4 mt-4'>
                <button
                    onClick={prevStep}
                    className='btn btn-outline btn-neutral'
                    aria-label='Go to the previous step'
                >
                    Prev
                </button>
                <button
                    onClick={nextStep}
                    className='btn btn-neutral text-white'
                    aria-label='Go to the next step'
                >
                    Next
                </button>
            </div>
        </>
    )
}
