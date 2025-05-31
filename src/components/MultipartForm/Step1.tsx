interface Step1Props {
    nextStep: () => void
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    values: {
        firstname: string
        lastname: string
        email: string
    }
}

export function Step1({ nextStep, onInputChange, values }: Step1Props) {
    const nameRegex = /^[A-Za-zÄäÖöÜüß\- ]{3,}$/
    const isFirstnameValid = nameRegex.test(values.firstname.trim())
    const isLastnameValid = nameRegex.test(values.lastname.trim())
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())

    const isDisabled = !isFirstnameValid || !isLastnameValid || !isEmailValid
    return (
        <>
            <form className='p-4'>
                <fieldset
                    className='fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4'
                    aria-labelledby='step1-legend'
                >
                    <legend id='step1-legend' className='fieldset-legend'>
                        Personal data
                    </legend>

                    <label className='floating-label' id='firstname-label'>
                        <span>First name</span>
                        <input
                            type='text'
                            className='input mb-4 validator'
                            placeholder='First name'
                            name='firstname'
                            defaultValue={values.firstname}
                            onChange={onInputChange}
                            aria-required='true'
                            aria-labelledby='firstname-label'
                            pattern='[A-Za-z][A-Za-z0-9\-]*'
                            minLength={3}
                            maxLength={30}
                            title='Only letters, numbers or dash'
                            required
                        />
                        <div className='validator-hint mb-2'>
                            {values.firstname && !isFirstnameValid
                                ? 'Last name must be at least 3 letters'
                                : ''}
                        </div>
                    </label>

                    <label className='floating-label' id='lastname-label'>
                        <span>Last name</span>
                        <input
                            type='text'
                            className='input mb-4 validator'
                            placeholder='Last name'
                            name='lastname'
                            defaultValue={values.lastname}
                            onChange={onInputChange}
                            aria-required='true'
                            aria-labelledby='lastname-label'
                            pattern='[A-Za-z][A-Za-z0-9\-]*'
                            minLength={3}
                            maxLength={30}
                            title='Only letters, numbers or dash'
                            required
                        />
                        <div className='validator-hint mb-2'>
                            {values.lastname && !isLastnameValid
                                ? 'Last name must be at least 3 letters'
                                : ''}
                        </div>
                    </label>

                    <label className='floating-label' id='email-label'>
                        <span>E-Mail</span>
                        <input
                            type='email'
                            className='input validator'
                            placeholder='mail@site.com'
                            name='email'
                            defaultValue={values.email}
                            onChange={onInputChange}
                            aria-required='true'
                            aria-labelledby='email-label'
                            required
                        />

                        <div className='validator-hint'>
                            Enter valid email address mail@site.com
                        </div>
                    </label>
                </fieldset>
            </form>
            <div className='flex justify-end mt-4'>
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
