import { StepProps } from '@/lib/props'

const Step7: React.FC<StepProps> = ({
    setStep,
    preferences,
    setPreferences,
}) => {
    const handleClick = (isHomeowner: boolean) => {
        let updatedValue = {}
        if (isHomeowner) {
            updatedValue = { homeowner: 'Yes' }

            setPreferences((preferences: any) => ({
                ...preferences,
                ...updatedValue,
            }))
            setStep(9)
        } else {
            updatedValue = { homeowner: 'No' }

            setPreferences((preferences: any) => ({
                ...preferences,
                ...updatedValue,
            }))
            setStep(8)
        }
    }

    return (
        <>
            <h2 className="multistep">Are you the home owner?</h2>
            <div className="multistep buttons">
                <button
                    className="multistep button"
                    onClick={() => handleClick(true)}
                >
                    Yes
                </button>
                <button
                    className="multistep button"
                    onClick={() => handleClick(false)}
                >
                    No
                </button>
            </div>
        </>
    )
}

export default Step7