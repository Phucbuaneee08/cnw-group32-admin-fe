import { Fragment, useState } from "react";
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import InformationForm from "../UpdateDiscount/InformationForm";

function ModalCreate(props) {

    const { token, userId} = useSelector((state) => state.authReducer);
    console.log(userId);
    const [reload, setReload] = props.reload;
    const [isOpen, setIsOpen] = props.openCreate;
    const closeModal = () => setIsOpen(false);
    const [infor, setInfor] = useState(
        {
            name: "",
            code: "",
            value: "",
            startDate: "",
            expiredDate: "",
            quantity: 1
            // name: "" ,
            // address: "",
            // role:"admin",
            // email : "",
            // password : "",
            // phone: "",
            // status: 1,
            // gender: "",
            // identification: "",
            // avatarUrl: "",
            // dateAtWork:"",
            // dateAtBirth:"",
            // homestays: [""]
        }
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        if (infor.name === "") {
            toast.error("Chưa điền Tên Discount");
        } else if (infor.code === "") {
            toast.error("Chưa điền Code Discount");
        } else if (infor.value === "") {
            toast.error("Chưa điền giá trị của Discount")
        }
        else
            axios({
                method: "POST",
                url: "http://localhost:8000/admins/discounts/create",
                data: {
                    adminId: userId,
                    name: infor.name,
                    code: infor.code,
                    value: infor.value,
                    startDate: infor.startDate,
                    expiredDate: infor.expiredDate,
                    quantity: infor.quantity,
                },
                headers: {
                    Authorization: "Bearer " + token
                }

            }).then((res) => {
                console.log(res)
                toast.success("Thêm mới Discount thành công!")
                setIsOpen(false)
                setReload(true)
                setInfor({
                    name: "",
                    code: "",
                    value: "",
                    startDate: "",
                    expiredDate: "",
                    quantity: 1
                })

            }).catch((err) => {
                console.log(infor)
                toast(err.message)
            })
    }

    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto backdrop-filter backdrop-brightness-50"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="
                            inline-block w-3/5 p-6 my-8 overflow-hidden text-left 
                            align-middle transition-all transform bg-white shadow-xl rounded-2xl"
                            >
                                <div className="relative">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-bold leading-6 text-gray-900 text-center"
                                    >
                                        Tạo Discount
                                    </Dialog.Title>
                                    <button
                                        className="absolute top-0 right-0 rounded-full transition ease-in-out duration-400 hover:bg-gray-200"
                                        onClick={closeModal}
                                    >
                                        <XIcon className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="my-4 border-t border-b max-h-xl overflow-x-hidden">
                                    <div class="h-4 mt-3 text-gray-500 text-xs leading-8 text-right">
                                        <span class="text-red-400 mr-1">*</span>
                                        Các trường bắt buộc phải điền
                                    </div>
                                    <InformationForm inforProps={[infor, setInfor]} showPassword={true}></InformationForm>
                                </div>

                                <div className="text-center">
                                    <button
                                        className="
                                        inline-flex justify-center px-4 py-2 text-md font-medium shadow-md 
                                        text-white bg-green-600 border border-transparent rounded-md 
                                        focus:cursor-pointer hover:bg-green-700 text-lg text-center"
                                        onClick={(e) => {
                                            handleSubmit(e);
                                        }}
                                    >
                                        Xác nhận
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default ModalCreate