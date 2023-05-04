import { Transition } from '@headlessui/react';
import { CheckCircle, XCircle } from '@phosphor-icons/react';



export type SaibWebModalProps = {
  isOpen: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
  confirm?: string;
  cancel?: string;
}

export function SaibWebModal({
  isOpen,
  title = 'Confirmação',
  message,
  onConfirm,
  onClose,
  confirm = 'Confirmar',
  cancel = 'Cancelar',
}: SaibWebModalProps) {
  return (
    <Transition
      className="w-full h-full fixed top-0 left-0 bg-loading flex items-start justify-center z-[999] pt-4"
      show={isOpen}
      enter="transition-all ease-in-out duration-150 delay-100"
      enterFrom="opacity-0 translate-y-6"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="flex items-center justify-center flex-col gap-1 bg-white rounded-md h-max min-w-[280px] w-max max-w-fit overflow-autos">
        <span className="text-black font-bold text-left w-full border-b border-border-form py-1.5 px-2">
          {title}
        </span>
        <div className="flex flex-col items-center justify-start gap-2 bg-white w-2/3 rounded-md py-1.5 px-2">
          <span className="text-center text-black-600 font-semibold">
            {message}
          </span>
          <div className="flex items-center justify-center gap-4 w-full">
            <button
              onClick={onConfirm}
              className="bg-green text-white"
              // variant="structure"
            >
              <CheckCircle size={22} weight="fill" />
              {confirm}
            </button>
            <button
              onClick={onClose}
              className="bg-red text-white"
              // variant="structure"
            >
              <XCircle size={22} weight="fill" />
              {cancel}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
}
