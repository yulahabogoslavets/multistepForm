type StepsProps = {
    step: number
}

export function Steps({ step }: StepsProps) {
    return (
        <ul className='steps steps-horizontal p-4'>
            <li className={`step ${step >= 1 ? 'step-success' : ''}`}>
                Personal data
            </li>
            <li className={`step ${step >= 2 ? 'step-success ' : ''}`}>
                Address
            </li>
            <li className={`step ${step >= 3 ? 'step-success' : ''}`}>
                Confirm date
            </li>
        </ul>
    )
}
