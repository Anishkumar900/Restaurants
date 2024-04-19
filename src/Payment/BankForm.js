import React, { useEffect, useState } from 'react'

export default function BankForm(props) {
    const [error, seterror] = useState(false)
    const [formData, setFormData] = useState({
        bankAccount: "",
        ifscCode: "",
        BenificeiryName: "",
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleError() {
        let count = 0;
        if (formData.bankAccount === "") {
            const elements = document.getElementsByClassName("bankAccount");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
            count++;
        }
        else {
            const elements = document.getElementsByClassName("bankAccount");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }

        }
        if (formData.ifscCode === "") {
            const elements = document.getElementsByClassName("ifscCode");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
            count++;
        }
        else {
            const elements = document.getElementsByClassName("ifscCode");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        }

        if (formData.BenificeiryName === "") {
            const elements = document.getElementsByClassName("BenificeiryName");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
            count++;
        }
        else {
            const elements = document.getElementsByClassName("BenificeiryName");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        }

        return count;
    }




    const handleSubmit = (e) => {
        e.preventDefault();

        const errorCount = handleError();
        if (errorCount > 0) {
            seterror(true);
        } else {
            // Handle successful form submission
            console.log(formData);
            setFormData({
                bankAccount: "",
                ifscCode: "",
                BenificeiryName: "",
            });
            const bankAccountElements = document.getElementsByClassName("bankAccount");
            const ifscCodeElements = document.getElementsByClassName("ifscCode");
            const BenificeiryNameElements = document.getElementsByClassName("BenificeiryName");
            for (let i = 0; i < bankAccountElements.length; i++) {
                bankAccountElements[i].style.display = "none";
            }
            for (let i = 0; i < ifscCodeElements.length; i++) {
                ifscCodeElements[i].style.display = "none";
            }
            for (let i = 0; i < BenificeiryNameElements.length; i++) {
                BenificeiryNameElements[i].style.display = "none";
            }
            seterror(false);
        }

    }
    useEffect(()=>{
        
        const bankAccountElements = document.getElementsByClassName("bankAccount");
            const ifscCodeElements = document.getElementsByClassName("ifscCode");
            const BenificeiryNameElements = document.getElementsByClassName("BenificeiryName");
            for (let i = 0; i < bankAccountElements.length; i++) {
                bankAccountElements[i].style.display = "none";
            }
            for (let i = 0; i < ifscCodeElements.length; i++) {
                ifscCodeElements[i].style.display = "none";
            }
            for (let i = 0; i < BenificeiryNameElements.length; i++) {
                BenificeiryNameElements[i].style.display = "none";
            }
            seterror(false);
    },[props.option])
    return (
        <div className="max-w-screen-xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap" noValidate>
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
                        Bank Account
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="bankAccount"
                        value={formData.bankAccount}
                        type="text"
                        placeholder="Enter Bank Account"
                        name="bankAccount"
                        onChange={handleChange}
                        required
                    />
                    <p className='md:text-md bankAccount hidden text-xs text-red-600'>field is required</p>
                </div>
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
                        IFSC Code
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="ifscCode"
                        type="text"
                        placeholder="Enter IFSC Code"
                        name="ifscCode"
                        onChange={handleChange}
                        required
                        value={formData.ifscCode}
                    />
                    <p className='ifscCode hidden md:text-md text-xs text-red-600'>field is required</p>
                </div>
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3 md:mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
                        Benificeiry Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="BenificeiryName"
                        type="text"
                        value={formData.BenificeiryName}
                        placeholder="Benificeiry Name"
                        name="BenificeiryName"
                        onChange={handleChange}
                        required
                    />
                    <p className='BenificeiryName hidden md:text-md text-xs text-red-600'>field is required</p>
                </div>
                {
                    props.option === "Bank Transfer" && <div className="w-full mt-4 md:px-3">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                }
            </form>
        </div>

    )
}
