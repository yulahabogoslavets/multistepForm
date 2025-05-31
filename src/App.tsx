import React, { useRef, useState } from 'react'
import { Step1 } from './components/MultipartForm/Step1'
import { Step2 } from './components/MultipartForm/Step2'
import { Step3 } from './components/MultipartForm/Step3'
import { Steps } from './components/MultipartForm/Steps'

function App() {
    const [step, setStep] = useState(1)
    const [formdata, setFormdata] = useState({
        firstname: '',
        lastname: '',
        email: '',
        street: '',
        town: '',
        zip: '',
    })

    const firstnameRef = useRef<HTMLInputElement>(null)
    const lastnameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const streetRef = useRef<HTMLInputElement>(null)
    const townRef = useRef<HTMLInputElement>(null)
    const zipRef = useRef<HTMLInputElement>(null)

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormdata({ ...formdata, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    const goToStepAndFocus = (
        stepNumber: number,
        ref?: React.RefObject<HTMLInputElement | null>
    ) => {
        setStep(stepNumber)
        setTimeout(() => {
            ref?.current?.focus()
        }, 10)
    }

    switch (step) {
        case 1:
            return (
                <>
                    <Steps step={step} />
                    <Step1
                        nextStep={nextStep}
                        onInputChange={onInputChange}
                        values={formdata}
                        firstnameRef={firstnameRef}
                        lastnameRef={lastnameRef}
                        emailRef={emailRef}
                    />
                </>
            )
        case 2:
            return (
                <>
                    <Steps step={step} />
                    <Step2
                        nextStep={nextStep}
                        prevStep={prevStep}
                        onInputChange={onInputChange}
                        values={formdata}
                        streetRef={streetRef}
                        townRef={townRef}
                        zipRef={zipRef}
                    />
                </>
            )
        case 3:
            return (
                <>
                    <Steps step={step} />
                    <Step3
                        prevStep={prevStep}
                        values={formdata}
                        onSubmitHandler={onSubmitHandler}
                        firstnameRef={firstnameRef}
                        lastnameRef={lastnameRef}
                        emailRef={emailRef}
                        streetRef={streetRef}
                        townRef={townRef}
                        zipRef={zipRef}
                        goToStepAndFocus={goToStepAndFocus}
                    />
                </>
            )
        default:
            return <h1>Form failed, pls contact support!</h1>
    }

    return <></>
}

export default App
