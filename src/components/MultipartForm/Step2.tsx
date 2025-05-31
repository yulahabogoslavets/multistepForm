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
    // Allow letters, numbers, dashes, spaces
    const allowedChars = /^[A-Za-zÄäÖöÜüß0-9\- ]+$/
    const countLetters = (str: string) =>
        (str.match(/[A-Za-zÄäÖöÜüß]/g) || []).length

    const isStreetValid =
        allowedChars.test(values.street.trim()) &&
        countLetters(values.street.trim()) >= 3
    const isTownValid =
        allowedChars.test(values.town.trim()) &&
        countLetters(values.town.trim()) >= 2
    const isZipValid = /^[0-9]{5}$/.test(values.zip.trim())

    const isDisabled = !isStreetValid || !isTownValid || !isZipValid
    return (
        <>
            <form>
                <fieldset className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'>
                    <legend className='fieldset-legend'>Address</legend>

                    <label className='floating-label' id='street-label'>
                        <span>Street</span>
                        <input
                            type='text'
                            className='input mb-4 validator'
                            placeholder='Street'
                            name='street'
                            defaultValue={values.street}
                            onChange={onInputChange}
                            aria-labelledby='street-label'
                            pattern='[A-Za-zÄäÖöÜüß0-9\- ]{3,}'
                            minLength={3}
                            title='Only letters, numbers or dash'
                            required
                        />
                        <div className='validator-hint mb-2'>
                            {values.street && !isStreetValid
                                ? 'Street must be at least 3 letters'
                                : ''}
                        </div>
                    </label>

                    <label className='floating-label' id='town-label'>
                        <span>Town</span>
                        <input
                            type='text'
                            className='input mb-4 validator'
                            placeholder='Town'
                            name='town'
                            defaultValue={values.town}
                            onChange={onInputChange}
                            aria-labelledby='town-label'
                            pattern='[A-Za-z][A-Za-z0-9\-]*'
                            minLength={2}
                            title='Only letters, numbers or dash'
                            required
                        />
                        <div className='validator-hint mb-2'>
                            {values.town && !isTownValid
                                ? 'Town must be at least 2 letters'
                                : ''}
                        </div>
                    </label>

                    <label className='floating-label' id='zip-label'>
                        <span>Zip</span>
                        <input
                            type='text'
                            className='input validator'
                            placeholder='Zip'
                            name='zip'
                            defaultValue={values.zip}
                            onChange={onInputChange}
                            aria-labelledby='zip-label'
                            pattern='[0-9]{5}'
                            minLength={5}
                            maxLength={5}
                            title='Only numbers'
                            required
                        />
                        <div className='validator-hint'>
                            {values.zip && !isZipValid
                                ? 'Zip must be exactly 5 digits'
                                : ''}
                        </div>
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
                    disabled={isDisabled}
                >
                    Next
                </button>
            </div>
        </>
    )
}
