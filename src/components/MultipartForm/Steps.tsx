type StepsProps = {
    step: number
}

export function Steps({ step }: StepsProps) {
    return (
        <ul className="steps steps-horizontal w-full p-4">
            <li className={`step text-xs ${step >= 1 ? 'step-secondary' : ''}`}>
                <span className={`mt-2 ${step === 1 ? 'font-bold' : ''}`}>
                    Personal data
                </span>
            </li>
            <li className={`step text-xs ${step >= 2 ? 'step-secondary' : ''}`}>
                <span className={`mt-2 ${step === 2 ? 'font-bold' : ''}`}>
                    Address
                </span>
            </li>
            <li className={`step text-xs ${step >= 3 ? 'step-secondary' : ''}`}>
                <span className={`mt-2 ${step === 3 ? 'font-bold' : ''}`}>
                    Confirm date
                </span>
            </li>
        </ul>
    )
}
