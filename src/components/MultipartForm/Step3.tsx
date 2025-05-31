import type { Step3Props } from '../types/Interface.types'
import { Pencil } from '../Pencil'

export function Step3({
    prevStep,
    values,
    onSubmitHandler,
    firstnameRef,
    lastnameRef,
    emailRef,
    streetRef,
    townRef,
    zipRef,
    goToStepAndFocus,
}: Step3Props) {
    return (
        <>
            <div className='px-4'>
                <h2 className='text-2xl font-medium mb-2 uppercase text-center'>
                    Confirm date
                </h2>
                <dl className='flex flex-col items-center sm:grid sm:grid-cols-2 gap-x-4 gap-y-2 text-lg max-w-xs'>
                    <dt className='font-semibold flex items-center'>
                        First name:
                        <Pencil
                            onClick={() => goToStepAndFocus(1, firstnameRef)}
                        />
                    </dt>
                    <dd>{values.firstname || '-'}</dd>
                    <dt className='font-semibold flex items-center'>
                        Last name:
                        <Pencil
                            onClick={() => goToStepAndFocus(1, lastnameRef)}
                        />
                    </dt>
                    <dd>{values.lastname || '-'}</dd>
                    <dt className='font-semibold flex items-center'>
                        E-mail:
                        <Pencil onClick={() => goToStepAndFocus(1, emailRef)} />
                    </dt>
                    <dd>{values.email || '-'}</dd>
                    <dt className='font-semibold'>
                        Street:
                        <Pencil
                            onClick={() => goToStepAndFocus(2, streetRef)}
                        />
                    </dt>
                    <dd>{values.street || '-'}</dd>
                    <dt className='font-semibold'>
                        Town:
                        <Pencil onClick={() => goToStepAndFocus(2, townRef)} />
                    </dt>
                    <dd>{values.town || '-'}</dd>
                    <dt className='font-semibold'>
                        Zip:
                        <Pencil onClick={() => goToStepAndFocus(2, zipRef)} />
                    </dt>
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
            </div>
        </>
    )
}
