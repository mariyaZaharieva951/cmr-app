// import logo from './logo.svg';
import React, { useState } from 'react';
// import './App.css';



function App() {

  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    input9: '',
    input10: '',
    input11: '',
    input12: '',
    input13: '',
    input14: '',
    input15: '',
    input16: '',
    input17: '',
    input18: '',
    input19: '',
    input20: '',
    input21: '',
    input22: '',
    input23: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //изпращане към сървъра
    console.log(formData);
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">CMR Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-6 border-2">
            <input
              id="input1"
              type="text"
              name="input1"
              value={formData.input1}
              onChange={handleChange}
              className="h-40 w-full border-b-2 focus:outline-none"
              required
            />
            <label
              htmlFor="input1"
              className="absolute left-1 top-1.5 text-xs"
            >
              Изпращач (име, адрес, държава)
            </label>
          </div>

          
        <button type="submit">Generate CMR</button>
        </form>
      </div>
    </div>
  );
}

export default App;
