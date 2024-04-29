"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";

export type SlideFromEdges = "left" | "top" | "right" | "bottom";

export type SlideoverProps = {
  open: boolean;
  setOpen: (state: boolean) => void;
  children: React.ReactNode;
  slideFrom?: SlideFromEdges;
  dialogClass?: string;
  title?: React.ReactNode;
  onlyChild?: boolean;
  backdropBlur?: boolean;
  closeOnBackdropClick?: boolean;
  onCloseClick?: () => void;
};

export default function Slideover({
  open,
  setOpen,
  children,
  slideFrom = "right",
  dialogClass,
  title,
  onlyChild = false,
  backdropBlur = true,
  closeOnBackdropClick = true,
  onCloseClick,
}: SlideoverProps) {
  const directionClasses = {
    left: {
      stick: "left-0 top-0 h-full",
      animateStart: "-translate-x-20",
      animateEnd: "translate-x-0",
      proportions: " cui-slideover-x",
    },
    right: {
      stick: "right-0 top-0 h-full",
      animateStart: "translate-x-20",
      animateEnd: "-translate-x-0",
      proportions: "cui-slideover-x",
    },
    top: {
      stick: "top-0 left-0 w-full",
      animateStart: "-translate-y-20",
      animateEnd: "translate-y-0",
      proportions: "cui-slideover-y",
    },
    bottom: {
      stick: "bottom-0 left-0 w-full",
      animateStart: "translate-y-20",
      animateEnd: "-translate-y-0",
      proportions: "cui-slideover-y",
    },
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        onClose={closeOnBackdropClick ? setOpen : () => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`fixed transition-all ${
              backdropBlur ? "inset-0 bg-black/75 backdrop-blur-sm" : ""
            }`}
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition-all"
          enterFrom={directionClasses[slideFrom].animateStart + " opacity-0"}
          enterTo={directionClasses[slideFrom].animateEnd + " opacity-100"}
          leave="transition-all"
          leaveFrom={directionClasses[slideFrom].animateEnd + " opacity-100"}
          leaveTo={directionClasses[slideFrom].animateStart + " opacity-0"}
        >
          <Dialog.Panel
            className={`pointer-events-auto fixed ${
              directionClasses[slideFrom].stick
            } ${!onlyChild ? "md:p-2" : ""}`}
          >
            {onlyChild ? (
              children
            ) : (
              <div
                className={`flex flex-col bg-zinc-900 md:rounded-xl ${directionClasses[slideFrom].proportions} ${dialogClass}`}
              >
                <div className="flex items-center gap-2 p-2 pt-4">
                  <button
                    id="close-slide-over"
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-2xl hover:bg-black/20"
                    onClick={() => {
                      setOpen(false);
                      onCloseClick && onCloseClick();
                    }}
                  >
                    <BsArrowLeftSquareFill className="text-xl text-white" />
                  </button>
                  <div className="flex w-full">
                    <h1 className="w-full text-xl font-black">{title}</h1>
                  </div>
                </div>
                <div className="flex-1 overflow-auto p-4">{children}</div>
              </div>
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
