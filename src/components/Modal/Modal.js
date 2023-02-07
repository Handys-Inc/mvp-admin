import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";

import { GrClose } from "react-icons/gr";

export default function Modal({ isOpen, setIsOpen, title, children }) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur bg-black bg-opacity-10" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center md:pt-4 md:pb-4 md:px-4 pt-20 pb-0 px-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-center align-bottom md:align-middle shadow-2xl transition-all">
                  <div className=" flex flex-row justify-between">
                    <Dialog.Title
                      as="h2"
                      className="md:text-2xl mx-auto text-center text-lg font-bold md:font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    <GrClose
                      className="bg-mute hover:bg-gray  rounded-full w-5 h-5 cursor-pointer p-1"
                      onClick={() => closeModal()}
                    />
                  </div>
                  <div className="md:my-5">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
