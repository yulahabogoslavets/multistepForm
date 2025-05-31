import { isValidStringField, isValidEmail } from '../../utils/validation'
import type { Step1Props } from '../types/Interface.types'

export function Step1({
    nextStep,
    onInputChange,
    values,
    firstnameRef,
    lastnameRef,
    emailRef,
}: Step1Props) {
    const isFirstnameValid = isValidStringField(values.firstname, 3)
    const isLastnameValid = isValidStringField(values.lastname, 3)
    const isEmailValid = isValidEmail(values.email)

    const isDisabled = !isFirstnameValid || !isLastnameValid || !isEmailValid
    return (
        <>
            <form className='p-4'>
                <fieldset
                    className='fieldset bg-base-200 border-base-300 rounded-box max-w-xs border p-4'
                    aria-labelledby='step1-legend'
                >
                    <legend id='step1-legend' className='fieldset-legend'>
                        Personal data
                    </legend>

                    <label className='floating-label' id='firstname-label'>
                        <span>First name</span>
                        <input
                            ref={firstnameRef}
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
                            ref={lastnameRef}
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
                            ref={emailRef}
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
            <div className='flex justify-center lg:justify-end mt-4'>
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
