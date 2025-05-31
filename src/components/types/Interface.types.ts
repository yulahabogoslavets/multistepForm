export interface Step1Props {
    nextStep: () => void
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    values: {
        firstname: string
        lastname: string
        email: string
    }
    firstnameRef: React.RefObject<HTMLInputElement | null>
    lastnameRef: React.RefObject<HTMLInputElement | null>
    emailRef: React.RefObject<HTMLInputElement | null>
}

export interface Step2Props {
    prevStep: () => void
    nextStep: () => void
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    values: {
        street: string
        town: string
        zip: string
    }
    streetRef?: React.RefObject<HTMLInputElement | null>
    townRef?: React.RefObject<HTMLInputElement | null>
    zipRef?: React.RefObject<HTMLInputElement | null>
}

export interface Step3Props {
    prevStep: () => void
    values: {
        firstname: string
        lastname: string
        email: string
        street: string
        town: string
        zip: string
    }
    onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void
    firstnameRef?: React.RefObject<HTMLInputElement | null>
    lastnameRef?: React.RefObject<HTMLInputElement | null>
    emailRef?: React.RefObject<HTMLInputElement | null>
    streetRef?: React.RefObject<HTMLInputElement | null>
    townRef?: React.RefObject<HTMLInputElement | null>
    zipRef?: React.RefObject<HTMLInputElement | null>
    goToStepAndFocus: (
        stepNumber: number,
        ref?: React.RefObject<HTMLInputElement | null>
    ) => void
}
