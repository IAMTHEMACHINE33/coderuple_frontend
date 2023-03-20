import GearSpinner from "./GearSpinner"

const GearSpinners = () => {
    return (
        <div className="relative">
            <GearSpinner left={40} right={40} />
            <GearSpinner />
            <GearSpinner />
        </div>
    )
}

export default GearSpinners