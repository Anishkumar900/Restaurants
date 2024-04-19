import React, { useEffect, useState } from 'react'

export default function BhimUpiFrom(props) {

    const [error, seterror] = useState(false)
    const [formData, setFormData] = useState({
        UpiId: "",
        UpiNumber: ""
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    
    function handleError() {
        let count = 0;
        if (formData.UpiId === "") {
            const elements = document.getElementsByClassName("UpiId");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
            count++;
        }
        else{
            const elements = document.getElementsByClassName("UpiId");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }

        }
        if (formData.UpiNumber === "") {
            const elements = document.getElementsByClassName("UpiNumber");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
            count++;
        }
        else{
            const elements = document.getElementsByClassName("UpiNumber");
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
                UpiId: "",
                UpiNumber: ""
            });
            const upiIdElements = document.getElementsByClassName("UpiId");
            const upiNumberElements = document.getElementsByClassName("UpiNumber");
            for (let i = 0; i < upiIdElements.length; i++) {
                upiIdElements[i].style.display = "none";
            }
            for (let i = 0; i < upiNumberElements.length; i++) {
                upiNumberElements[i].style.display = "none";
            }
            seterror(false);
        }
    };


    useEffect(()=>{
        const upiIdElements = document.getElementsByClassName("UpiId");
        const upiNumberElements = document.getElementsByClassName("UpiNumber");
        for (let i = 0; i < upiIdElements.length; i++) {
            upiIdElements[i].style.display = "none";
        }
        for (let i = 0; i < upiNumberElements.length; i++) {
            upiNumberElements[i].style.display = "none";
        }
        seterror(false);

    },[props.option])

    return (
        <div className="max-w-screen-xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap" noValidate>










                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
                        UPI Id
                    </label>

                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="UpiId"
                        type="text"
                        placeholder="Enter Upi Id"
                        name="UpiId"
                        onChange={handleChange}
                        required
                        value={formData.UpiId}
                    />
                    <p className='UpiId hidden text-xs text-red-600'>field is required</p>
                </div>
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
                        UPI Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="UpiNumber"
                        type="text"
                        placeholder="Enter Upi Number"
                        name="UpiNumber"
                        onChange={handleChange}
                        required
                        value={formData.UpiNumber}
                    />
                    <p className='UpiNumber hidden text-xs text-red-600'>field is required</p>
                </div>

                {
                    props.option === "Bhim UPI" && <div className="w-full mt-4 md:px-3">
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
