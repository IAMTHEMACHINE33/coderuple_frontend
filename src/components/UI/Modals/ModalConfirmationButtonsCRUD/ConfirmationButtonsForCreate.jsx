import { useRef, useState } from 'react';
import TailwindButton from '../../Buttons/TailwindButton';
import CircleSpinner from "/public/assets/svg/CircleSpinner";

const ConfirmationButtonsForCreate = (props) => {
  const closeButton = useRef()
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    closeButton?.current?.click();
    // setIsLoading(true)
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 4000);
  }
  return (
    <div
      class="flex gap-1 flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
      <button
        type="button"
        class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
        data-te-modal-dismiss
        data-te-ripple-init
        data-te-ripple-color="light"
        id="te-close"
        ref={closeButton}
      >
        Close
      </button>
      <TailwindButton type='submit' button_type="success" button_target={`${props.id}`} handleClick={handleClick} willNotDismissModal={true} disabled={isLoading}>
        {
          isLoading ? <div className="mx-3"><CircleSpinner /></div> : <>Create</>
        }
      </TailwindButton>
    </div>
  )
}

export default ConfirmationButtonsForCreate