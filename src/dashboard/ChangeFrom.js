import React, { useState } from 'react';
import "./ChangeFrom.css";

export default function ChangeFrom() {
  const [error, seterror] = useState(false)

  const [formData, setFormData] = useState({
    brandName: "",
    emailAddress: "",
    contactNumber: "",
    ContactPerson: "",
    outletAddress: "",
    businessType: "",
    cuisinesServed: "",
    Instagram: "",
  })

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  function handleError() {
    let count = 0;
    if (formData.brandName === "") {
      const elements = document.getElementsByClassName("brandName");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
      count++;
    }
    else {
      const elements = document.getElementsByClassName("brandName");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }

    }
    if (formData.emailAddress === "") {
      const elements = document.getElementsByClassName("emailAddress");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
      count++;
    }
    else {
      const elements = document.getElementsByClassName("emailAddress");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    }
    if (formData.contactNumber === "") {
      const elements = document.getElementsByClassName("contactNumber");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
      count++;
    }
    else {
      const elements = document.getElementsByClassName("contactNumber");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }

    }
    if (formData.ContactPerson === "") {
      const elements = document.getElementsByClassName("ContactPerson");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
      count++;
    }
    else {
      const elements = document.getElementsByClassName("ContactPerson");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    }
    if (formData.outletAddress === "") {
      const elements = document.getElementsByClassName("outletAddress");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
      count++;
    }
    else {
      const elements = document.getElementsByClassName("outletAddress");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }

    }
    if (formData.businessType === "") {
      const elements = document.getElementsByClassName("businessType");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
      count++;
    }
    else {
      const elements = document.getElementsByClassName("businessType");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    }
    if (formData.cuisinesServed === "") {
      const elements = document.getElementsByClassName("cuisinesServed");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
      count++;
    }
    else {
      const elements = document.getElementsByClassName("cuisinesServed");
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
        }
        else {
          // Handle successful form submission
          console.log(formData);
          setFormData({
            brandName: "",
            emailAddress: "",
            contactNumber: "",
            ContactPerson: "",
            outletAddress: "",
            businessType: "",
            cuisinesServed: "",
            Instagram: "",
          });
          const brandNameElements = document.getElementsByClassName("brandName");
          const emailAddressElements = document.getElementsByClassName("emailAddress");
          const contactNumberElements = document.getElementsByClassName("contactNumber");
          const ContactPersonElements = document.getElementsByClassName("ContactPerson");
          const outletAddressElements = document.getElementsByClassName("outletAddress");
          const businessTypeElements = document.getElementsByClassName("businessType");
          const cuisinesServedElements = document.getElementsByClassName("cuisinesServed");
          for (let i = 0; i < brandNameElements.length; i++) {
            brandNameElements[i].style.display = "none";
          }
          for (let i = 0; i < emailAddressElements.length; i++) {
            emailAddressElements[i].style.display = "none";
          }
          for (let i = 0; i < contactNumberElements.length; i++) {
            contactNumberElements[i].style.display = "none";
          }
          for (let i = 0; i < ContactPersonElements.length; i++) {
            ContactPersonElements[i].style.display = "none";
          }
          for (let i = 0; i < outletAddressElements.length; i++) {
            outletAddressElements[i].style.display = "none";
          }
          for (let i = 0; i < businessTypeElements.length; i++) {
            businessTypeElements[i].style.display = "none";
          }
          for (let i = 0; i < cuisinesServedElements.length; i++) {
            cuisinesServedElements[i].style.display = "none";
          }
          
          seterror(false);
      }




    // console.log(formData);
    // setFormData({
    //   brandName: "",
    //   emailAddress: "",
    //   contactNumber: "",
    //   ContactPerson: "",
    //   outletAddress: "",
    //   businessType: "",
    //   cuisinesServed: "",
    //   Instagram: "",
    // });
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <form noValidate onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
            Brand Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="brandName"
            name="brandName"
            type="text"
            value={formData.brandName}
            placeholder="Brand Name"
            onChange={handleChange}
            required
          />
          <p className='brandName hidden text-xs text-red-600'>field is required</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailAddress">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="emailAddress"
            name="emailAddress"
            type="email"
            value={formData.emailAddress}
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
          <p className='emailAddress hidden text-xs text-red-600'>field is required</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contactNumber"
            name="contactNumber"
            type="number"
            value={formData.contactNumber}
            placeholder="Contact Number"
            onChange={handleChange}
            required

          />
          <p className='contactNumber hidden text-xs text-red-600'>field is required</p>
        </div>
        {/* second line */}

        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3 md:mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
            Contact Person
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ContactPerson"
            name="ContactPerson"
            type="text"
            value={formData.ContactPerson}

            placeholder="Name"
            onChange={handleChange}
            required
          />
          <p className='ContactPerson hidden text-xs text-red-600'>field is required</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3 md:mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailAddress">
            Outlet Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="outletAddress"
            name="outletAddress"
            type="text"
            placeholder="Address"
            value={formData.outletAddress}
            onChange={handleChange}
            required
          />
          <p className='outletAddress hidden text-xs text-red-600'>field is required</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3 md:mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
            Business Type
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required

          >
            <option disabled value=''>Select Business Type</option>
            <option value="Retail">Restaurant</option>
            <option value="Services">Services</option>
            <option value="Manufacturing">Manufacturing</option>
          </select>
          <p className='businessType hidden text-xs text-red-600'>field is required</p>
        </div>




        {/* third line */}


        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3 lg:mt-4 md:mt-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
            cuisines Served
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cuisinesServed"
            name="cuisinesServed"
            value={formData.cuisinesServed}
            onChange={handleChange}
            required

          >
            <option disabled value=''>Option</option>
            <option value="Indian">Indian</option>
            <option value="China">China</option>
            <option value="Pakishtan">Pakishtan</option>
          </select>
          <p className='cuisinesServed hidden text-xs text-red-600'>field is required</p>
        </div>


        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3 lg:mt-4 md:mt-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
            Instagram link (option)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Instagram"
            name="Instagram"
            type="text"
            value={formData.Instagram}
            placeholder="Instagram.com/chamchun12"
            onChange={handleChange}
          />
        </div>




        {/* Continue adding input fields for address, business type, server, and Instagram link */}
        {/* Ensure to handle state changes for these fields */}
        <div className="w-full mt-4 md:px-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
