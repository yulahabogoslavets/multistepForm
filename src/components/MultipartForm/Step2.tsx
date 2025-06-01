import { isValidStringField, isValidZip } from '../../utils/validation'
import type { Step2Props } from '../types/Interface.types'

export function Step2({
    prevStep,
    nextStep,
    onInputChange,
    values,
    streetRef,
    townRef,
    zipRef,
}: Step2Props) {
    const isStreetValid = isValidStringField(values.street, 3)
    const isTownValid = isValidStringField(values.town, 2)
    const isZipValid = isValidZip(values.zip)

    const isDisabled = !isStreetValid || !isTownValid || !isZipValid
    return (
        <>
            <form className="p-4">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-xs border p-4">
                    <legend className="fieldset-legend">Address</legend>

                    <label className="floating-label" id="street-label">
                        <span>Street</span>
                        <input
                            ref={streetRef}
                            type="text"
                            className="input validator mb-4"
                            placeholder="Street"
                            name="street"
                            defaultValue={values.street}
                            onChange={onInputChange}
                            aria-labelledby="street-label"
                            pattern="[A-Za-zÄäÖöÜüß0-9\- ]{3,}"
                            minLength={3}
                            title="Only letters, numbers or dash"
                            required
                        />
                        <div className="validator-hint mb-2">
                            {values.street && !isStreetValid
                                ? 'Street must be at least 3 letters'
                                : ''}
                        </div>
                    </label>

                    <label className="floating-label" id="town-label">
                        <span>Town</span>
                        <input
                            ref={townRef}
                            type="text"
                            className="input validator mb-4"
                            placeholder="Town"
                            name="town"
                            defaultValue={values.town}
                            onChange={onInputChange}
                            aria-labelledby="town-label"
                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                            minLength={2}
                            title="Only letters, numbers or dash"
                            required
                        />
                        <div className="validator-hint mb-2">
                            {values.town && !isTownValid
                                ? 'Town must be at least 2 letters'
                                : ''}
                        </div>
                    </label>

                    <label className="floating-label" id="zip-label">
                        <span>Zip</span>
                        <input
                            ref={zipRef}
                            type="text"
                            className="input validator"
                            placeholder="Zip"
                            name="zip"
                            defaultValue={values.zip}
                            onChange={onInputChange}
                            aria-labelledby="zip-label"
                            pattern="[0-9]{5}"
                            minLength={5}
                            maxLength={5}
                            title="Only numbers"
                            required
                        />
                        <div className="validator-hint">
                            {values.zip && !isZipValid
                                ? 'Zip must be exactly 5 digits'
                                : ''}
                        </div>
                    </label>
                </fieldset>
            </form>
            <div className="m-4 flex flex-col items-center justify-between gap-4 lg:flex-row">
                <button
                    onClick={prevStep}
                    className="btn btn-outline btn-neutral w-full lg:w-auto"
                    aria-label="Go to the previous step"
                >
                    Prev
                </button>
                <button
                    onClick={nextStep}
                    className="btn btn-neutral w-full text-white lg:w-auto"
                    aria-label="Go to the next step"
                    disabled={isDisabled}
                >
                    Next
                </button>
            </div>
        </>
    )
}
