type StepsProps = {
    step: number
}

export function Steps({ step }: StepsProps) {
    return (
        <ul className='steps steps-horizontal p-4'>
            <li className={`step ${step >= 1 ? 'step-success' : ''}`}>
                <span className={step === 1 ? 'font-bold' : ''}>
                    Personal data
                </span>
            </li>
            <li className={`step ${step >= 2 ? 'step-success ' : ''}`}>
                <span className={step === 2 ? 'font-bold' : ''}>Address</span>
            </li>
            <li className={`step ${step >= 3 ? 'step-success' : ''}`}>
                <span className={step === 3 ? 'font-bold' : ''}>
                    Confirm date
                </span>
            </li>
        </ul>
    )
}
