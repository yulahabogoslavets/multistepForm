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
            <div className="px-4">
                <h2 className="mb-2 text-center text-2xl font-medium uppercase underline decoration-pink-500 decoration-2 underline-offset-8">
                    Confirm date
                </h2>
                <dl className="m-4 flex max-w-xs flex-col items-center gap-x-4 gap-y-2 text-lg sm:grid sm:grid-cols-2">
                    <dt className="flex items-center font-semibold">
                        First name:
                        <Pencil
                            onClick={() => goToStepAndFocus(1, firstnameRef)}
                        />
                    </dt>
                    <dd>{values.firstname || '-'}</dd>
                    <dt className="flex items-center font-semibold">
                        Last name:
                        <Pencil
                            onClick={() => goToStepAndFocus(1, lastnameRef)}
                        />
                    </dt>
                    <dd>{values.lastname || '-'}</dd>
                    <dt className="flex items-center font-semibold">
                        E-mail:
                        <Pencil onClick={() => goToStepAndFocus(1, emailRef)} />
                    </dt>
                    <dd>{values.email || '-'}</dd>
                    <dt className="font-semibold">
                        Street:
                        <Pencil
                            onClick={() => goToStepAndFocus(2, streetRef)}
                        />
                    </dt>
                    <dd>{values.street || '-'}</dd>
                    <dt className="font-semibold">
                        Town:
                        <Pencil onClick={() => goToStepAndFocus(2, townRef)} />
                    </dt>
                    <dd>{values.town || '-'}</dd>
                    <dt className="font-semibold">
                        Zip:
                        <Pencil onClick={() => goToStepAndFocus(2, zipRef)} />
                    </dt>
                    <dd>{values.zip || '-'}</dd>
                </dl>

                <p className="mt-4 text-lg">
                    Please review your data before submitting the form.
                </p>

                <div className="m-4 flex flex-col items-center justify-between gap-4 lg:flex-row">
                    <button
                        onClick={prevStep}
                        className="btn btn-outline btn-neutral w-full lg:w-auto"
                        aria-label="Go to the previous step"
                    >
                        Prev
                    </button>
                    <form
                        onSubmit={onSubmitHandler}
                        className="w-full lg:w-auto"
                    >
                        <button
                            type="submit"
                            className="btn btn-success w-full text-white lg:w-auto"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
