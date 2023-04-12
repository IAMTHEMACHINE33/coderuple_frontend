import TailwindButton from '@/components/UI/Buttons/TailwindButton'
import QuickFilteringInitialize from '@/components/UI/DataTable/QuickFilteringInitialize'

const TestimonialsListAdmin = (props) => {
    return (
        <div className="flex w-full flex-col gap-2">
            <div className="flex w-full justify-between items-center">
                <span>Testimonials</span>
                {
                    true ?
                        <TailwindButton button_type="success" button_target={`${props.identifiers.add.id}`}>
                            + Add Testimonials
                        </TailwindButton>
                        :
                        <TailwindButton button_type="danger" >
                            - Delete Selected
                        </TailwindButton>
                }
            </div>
            <QuickFilteringInitialize identifiers={props.identifiers} />
        </div>
    )
}

export default TestimonialsListAdmin