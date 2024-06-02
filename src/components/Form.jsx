import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    profession: "",
    goal: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send data to an API)
  };
  return (
    <div className=" bg-black">
      <div className=" bg-black  mobile:p-3 tablet:p-10 min-w-96 tablet:min-w-[60%] mobile:min-w-[100%] tablet:max-w-[60%] m-auto mobile:max-w-[99%] ">
        <div className="bg-[#E84D84] text-white-A700 p-3 text-center rounded-t-2xl mobile:text-sm  tablet:text-xl font-bold">
          FILL THE FORM BELOW TO ENQUIRE
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white-A700 mobile:p-2 tablet:p-10 rounded-b-2xl"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-black  font-semibold mobile:text-sm tablet:text-xl  "
            >
              *Enter your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Eg. Aneesha Mehra"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md mt-1"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="whatsapp"
              className="block text-black font-semibold mobile:text-sm tablet:text-xl"
            >
              *Enter your WhatsApp number
            </label>
            <div className="flex gap-4 mt-1">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className=" border rounded-md mt-1"
              >
                <option value="india">+91</option>
                <option value="usa">+1</option>
                <option value="russia">+7</option>
                <option value="china">+86</option>
                <option value="other">Other</option>
              </select>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Eg. 0000000000"
                className="w-full px-3 py-2 border rounded-md  mt-1"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="profession"
              className="block text-black font-semibold mobile:text-sm tablet:text-xl"
            >
              *Select your profession
            </label>
            <select
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md mt-1 text-gray-400"
            >
              <option>Choose the most relevant option</option>
              <option value="new-york">New York</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="goal"
              className="block text-black font-semibold mobile:text-sm tablet:text-xl"
            >
              *Select your goal
            </label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md mt-1 text-gray-400"
            >
              <option value="" disabled>
                Choose the most relevant option
              </option>
              <option value="new-york">New York</option>
              <option value="learn">Learn</option>
              <option value="network">Network</option>
              <option value="career">Career Growth</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-black font-semibold mobile:text-sm tablet:text-xl"
            >
              *Select your city
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-2 py-2 border rounded-md mt-1 text-gray-400"
            >
              <option>Choose the most relevant option</option>
              <option value="new-york">New York</option>
              <option value="san-francisco">San Francisco</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-[#F56563] to-[#E54988] text-white-A700 w-[100%] py-2 rounded-md font-proxima  font-bold mobile:text-lg tablet:text-2xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
