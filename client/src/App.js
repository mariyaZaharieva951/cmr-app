// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';



function App() {

  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input31: '',
    input32: '',
    input41: '',
    input42: '',
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
      <div className="w-[793.7px] h-[1122.5px] bg-white p-8">
        {/* <h1 className="text-2xl font-bold mb-6 text-center">CMR Form</h1> */}

        <form onSubmit={handleSubmit}>
          <div className="flex">

            <div className="relative flex-1 border-2 p-1">
              <input
                id="input1"
                type="text"
                name="input1"
                value={formData.input1}
                onChange={handleChange}
                className="h-40 w-full focus:outline-none"
                required
              />
              <label
                htmlFor="input1"
                className="flex flex-col absolute left-1 top-1.5 text-xs"
              >
                <p>1. Изпращач (име, адрес, държава)</p>
                <p className='pl-4'>Sender (name,address, country)</p>
              </label>
            </div>

            <div className="relative flex-1 border-2 p-1">
              <div className="h-20 w-full focus:outline-none"></div>
              <label
                htmlFor="input2"
                className="flex flex-col w-full absolute left-1 top-1.5 text-xs"
              >
                <p className="text-transform: uppercase">международна товарителница №</p>
                <p className="text-transform: uppercase">international consignment note</p>
                <p className="text-center pt-2">CMR</p>
              </label>
              <div className="flex gap-1 ">
                <p className="text-[10px]">Този превоз, независимо от всяка противна клауза, е додчинен на Конвенцията относно договора за международен превоз на стоки по пътищата (CMR)
                </p>
                <p className="text-[10px]">This carriage sunject, notwishstanding any clause to the country to the Convention on the contract for the international Carriage of goods by the road (CMR)
                </p>
              </div>
            </div>

          </div>


          <div className="flex">

            <div className="relative flex-1 border-2 p-1">
              <input
                id="input2"
                type="text"
                name="input2"
                value={formData.input2}
                onChange={handleChange}
                className="h-20 w-full focus:outline-none"
                required
              />
              <label
                htmlFor="input2"
                className="flex flex-col absolute left-1 top-1.5 text-xs"
              >
                <p>2. Получател (име, адрес, държава)</p>
                <p className='pl-5'>Consignee (name,address, country)</p>
              </label>
            </div>

            <div className="relative flex-1 border-2 p-1">
              <input
                id="input16"
                type="text"
                name="input16"
                value={formData.input16}
                onChange={handleChange}
                className="h-20 w-full focus:outline-none"
                required
              />
              <label
                htmlFor="input16"
                className="flex flex-col w-full absolute left-1 top-1.5 text-xs"
              >
                <p>16. Превозвач (име, адрес, държава, други референции)</p>
                <p className='pl-5'>Carner (name,address, country, other refferences)</p>
              </label>

            </div>

          </div>


          <div className="flex">

            <div className="relative flex-1 border-2 p-1">

              <label className="block mb-2 text-xs">
                <p>3. Разтоварен пункт / Delivery of the goods:</p>
              </label>


              <div className="ml-3">
                <label
                  htmlFor="input31"
                  className="block text-[10px]"
                >
                  Място / Place
                </label>
                <input
                  id="input31"
                  type="text"
                  name="input31"
                  value={formData.input31}
                  onChange={handleChange}
                  className="h-3 w-full focus:outline-none"
                  required
                />
              </div>


              <div className='ml-3'>
                <label
                  htmlFor="input32"
                  className="block text-[10px]"
                >
                  Държава / Country
                </label>
                <input
                  id="input32"
                  type="text"
                  name="input32"
                  value={formData.input32}
                  onChange={handleChange}
                  className="h-3 w-full focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="relative flex-1 border-2 p-1">
              <input
                id="input17"
                type="text"
                name="input17"
                value={formData.input17}
                onChange={handleChange}
                className="h-20 w-full focus:outline-none"
              // required
              />
              <label
                htmlFor="input17"
                className="flex flex-col w-full absolute left-1 top-1.5 text-xs"
              >
                <p>17. Следващ превозвач / Successive carners</p>
                <p className='pl-5'> Име / Name Адрес / Address Държава / Country</p>
              </label>

            </div>

          </div>


          <div className="flex">

            <div className="relative flex-1 border-2">
              <div className="relative flex-1 p-1">
                <label className="block mb-2 text-xs">
                  <p>4. Товарен пункт / Taking over the goods:</p>
                </label>


                <div className="ml-3">
                  <label
                    htmlFor="input41"
                    className="block text-[10px]"
                  >
                    Място / Place
                  </label>
                  <input
                    id="input41"
                    type="text"
                    name="input41"
                    value={formData.input41}
                    onChange={handleChange}
                    className="h-3 w-full focus:outline-none"
                    required
                  />
                </div>


                <div className='ml-3'>
                  <label
                    htmlFor="input42"
                    className="block text-[10px]"
                  >
                    Държава / Country
                  </label>
                  <input
                    id="input42"
                    type="text"
                    name="input42"
                    value={formData.input42}
                    onChange={handleChange}
                    className="h-3 w-full focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="relative flex-1 border-t-2">
              <input
                id="input5"
                type="text"
                name="input5"
                value={formData.input5}
                onChange={handleChange}
                className="h-20 w-full focus:outline-none"
              // required
              />
              <label
                htmlFor="input5"
                className="flex flex-col w-full absolute left-1 top-1.5 text-xs"
              >
                <p>5. Приложени документи</p>
                <p className='pl-3'>Documents attached</p>
              </label>

            </div>

            </div>

            <div className="relative flex-1 border-2a">
              <input
                id="input18"
                type="text"
                name="input18"
                value={formData.input18}
                onChange={handleChange}
                className="h-20 w-full focus:outline-none"
              // required
              />
              <label
                htmlFor="input18"
                className="flex flex-col w-full absolute left-1 top-1.5 text-xs"
              >
                <p>18. Резерви и бележки на превозвача пре вземане на колетите</p>
                <p className='pl-5'>Carrier`s reservations and observations on taking over the goods</p>
              </label>

            </div>

          </div>






          <div className="text-end pt-2">
            <button className="border-2" type="submit">Generate CMR</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
