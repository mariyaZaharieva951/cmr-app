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
    input21: ''
  });

  const handleChange =  (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      console.log('start')
      const response = await fetch('https://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
        mode: 'cors',
        credentials: 'include',
      });
      if (!response.ok) {
        console.log('ERROR')
        throw new Error('Network response was not ok');
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'cmr.pdf'); 
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (err) {
      console.error('Error generating PDF:', err);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[793.7px] h-[1122.5px] border-2 bg-white p-8">
        {/* <h1 className="text-2xl font-bold mb-6 text-center">CMR Form</h1> */}

        <form onSubmit={handleSubmit}>
          <div className="flex h-[120px]">

            <div className="relative flex-1 border-2 p-1">
              <textarea
                id="input1"
                type="text"
                name="input1"
                value={formData.input1}
                rows={4}
                onChange={handleChange}
                className="mt-10 w-full focus:outline-none text-[9px]"
                required
              />
              <label
                htmlFor="input1"
                className="flex flex-col absolute left-1 top-1"
              >
                <p>1. Изпращач (име, адрес, държава)</p>
                <p className='pl-4'>Sender (name,address, country)</p>
              </label>
            </div>

            <div className="relative h-full flex flex-col flex-1 border-2 p-1 gap-2 items-strech">
              <label
                className="flex flex-col w-full left-1 top-1"
              >
                <p className="text-transform: uppercase">международна товарителница №</p>
                <p className="text-transform: uppercase">international consignment note</p>
                <p className="text-center pt-2">CMR</p>
              </label>
              <div className="flex gap-1">
                <p className="text-[8px]">Този превоз, независимо от всяка противна клауза, е додчинен на Конвенцията относно договора за международен превоз на стоки по пътищата (CMR)
                </p>
                <p className="text-[8px]">This carriage sunject, notwishstanding any clause to the country to the Convention on the contract for the international Carriage of goods by the road (CMR)
                </p>
              </div>
            </div>

          </div>


          <div className="flex h-[90px]">

            <div className="relative flex-1 border-2 p-1">
              <textarea
                id="input2"
                type="text"
                name="input2"
                value={formData.input2}
                onChange={handleChange}
                rows={3}
                className="h-15 mt-10 w-full focus:outline-none text-[9px]"
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
              <textarea
                id="input16"
                type="text"
                name="input16"
                value={formData.input16}
                onChange={handleChange}
                rows={3}
                className="h-15 mt-10 w-full focus:outline-none text-[9px]"
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


          <div className="flex h-[80px]">

            <div className="relative flex-1 border-2 p-1">

              <label className="block text-xs mb-1">
                <p>3. Разтоварен пункт / Delivery of the goods:</p>
              </label>


              <div className="flex gap-1 ml-3 h-[20px]">
                <label
                  htmlFor="input31"
                  className="text-nowrap"
                >
                  Място / Place
                </label>
                <textarea
                  id="input31"
                  type="text"
                  rows={1}
                  name="input31"
                  value={formData.input31}
                  onChange={handleChange}
                  className="w-full focus:outline-none text-[9px]"
                  required
                />
              </div>


              <div className='flex gap-1 ml-3 h-[20px]'>
                <label
                  htmlFor="input32"
                  className="text-nowrap"
                >
                  Държава / Country
                </label>
                <textarea
                  id="input32"
                  type="text"
                  rows={1}
                  name="input32"
                  value={formData.input32}
                  onChange={handleChange}
                  className="w-full focus:outline-none text-[9px]"
                  required
                />
              </div>
            </div>

            <div className="relative flex-1 border-2 p-1">
              <textarea
                id="input17"
                type="text"
                rows={1}
                name="input17"
                value={formData.input17}
                onChange={handleChange}
                className="mt-10 w-full focus:outline-none text-[9px]"
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


          <div className="flex h-[150px]">

            <div className="relative flex-1 border-2">
              <div className="relative flex-1 p-1 h-[80px]">
                <label className="block mt-2 text-xs">
                  <p>4. Товарен пункт / Taking over the goods:</p>
                </label>


                <div className="flex gap-1 ml-3 h-[20px]">
                  <label
                    htmlFor="input41"
                    className="text-nowrap"
                  >
                    Място / Place
                  </label>
                  <textarea
                    id="input41"
                    type="text"
                    rows={1}
                    name="input41"
                    value={formData.input41}
                    onChange={handleChange}
                    className="w-full focus:outline-none text-[9px]"
                    required
                  />
                </div>


                <div className='flex gap-1 ml-3 h-[20px]'>
                  <label
                    htmlFor="input42"
                    className="text-nowrap"
                  >
                    Държава / Country
                  </label>
                  <textarea
                    id="input42"
                    type="text"
                    rows={1}
                    name="input42"
                    value={formData.input42}
                    onChange={handleChange}
                    className="h-3 w-full focus:outline-none text-[9px]"
                    required
                  />
                </div>
              </div>

              <div className="relative flex-1 border-t-2 h-[60px]">
                <textarea
                  id="input5"
                  type="text"
                  rows={1}
                  name="input5"
                  value={formData.input5}
                  onChange={handleChange}
                  className="w-full mt-10 focus:outline-none text-[9px]"
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

            <div className="relative flex-1 border-2">
              <textarea
                id="input18"
                type="text"
                rows={5}
                name="input18"
                value={formData.input18}
                onChange={handleChange}
                className="mt-10 w-full mt-10 pl-2 focus:outline-none text-[9px]"
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


          <div className="flex h-[230px] border-2">

            <div className='flex flex-col'>
              <div className="relative flex flex-2 gap-1 p-1">

                <div className="flex-1">
                  <label className="block text-xs">
                    <p>6. Знаци и номера</p>
                    <p className='pl-2'>Marks and Numbers</p>
                  </label>
                </div>


                <div className="flex-1">
                  <label className="block text-xs">
                    <p>7. Брой колети</p>
                    <p className='pl-2'>Number of packages</p>
                  </label>
                </div>


                <div className="flex-1">
                  <label className="block text-xs">
                    <p>8. Вид опаковка</p>
                    <p className='pl-2'>Method of packing</p>
                  </label>
                </div>


                <div className="flex-1">
                  <label className="block text-xs">
                    <p>9. Вид на стоката</p>
                    <p className='pl-2'>Nature of the goods</p>
                  </label>
                </div>

              </div>


              <div className="flex-1 p-1">
                <textarea
                  id="input6"
                  type="text"
                  rows={2}
                  name="input6"
                  value={formData.input6}
                  onChange={handleChange}
                  className="mt-[40px] w-full focus:outline-none text-[10px]"
                  required
                />
              </div>
            </div>


            <div className="relative flex-1 border-s-2 p-1">
              <textarea
                id="input10"
                type="text"
                rows={1}
                name="input10"
                value={formData.input10}
                onChange={handleChange}
                className="w-full mt-[100px] focus:outline-none text-[10px]"
              // required
              />
              <label
                htmlFor="input10"
                className="flex flex-col w-full absolute left-1 top-1.5 text-xs"
              >
                <p>10. Статистически №</p>
                <p className='pl-3'>Statistical Numer</p>
              </label>

            </div>

            <div className="relative flex-1 border-s-2 p-1">
              <textarea
                id="input11"
                type="text"
                rows={1}
                name="input11"
                value={formData.input11}
                onChange={handleChange}
                className="w-full mt-[100px] focus:outline-none text-[10px]"
              // required
              />
              <label
                htmlFor="input11"
                className="flex flex-col w-full absolute left-1 top-1.5 text-xs"
              >
                <p>11. Тегло брутно, kg</p>
                <p className='pl-3'>Gross weight, kg</p>
              </label>

            </div>

            <div className="relative flex-1 border-s-2 p-1">
              <textarea
                id="input12"
                type="text"
                rows={1}
                name="input12"
                value={formData.input12}
                onChange={handleChange}
                className="w-full mt-[100px] focus:outline-none text-[10px]"
              //required
              />
              <label
                htmlFor="input12"
                className="flex flex-col w-full absolute left-1 top-1.5 text-xs"
              >
                <p>12. Обем m3</p>
                <p className='pl-3'>Volume m3</p>
              </label>

            </div>

          </div>


          <div className="flex h-[230px] border-2 border-r-0">

            <div className="relative flex flex-col">

              <div className="relative flex-1 p-1">
                <input
                  id="input13"
                  type="text"
                  name="input13"
                  value={formData.input13}
                  onChange={handleChange}
                  className="w-full mt-3 focus:outline-none"
                // required
                />
                <label
                  htmlFor="input13"
                  className="flex flex-col w-full absolute left-1 top-1.5 text-xs">
                  <p>13. Указания на превозвача</p>
                  <p className='ml-3'>Sender`s instructions</p>
                </label>
              </div>

              <div className="relative flex-2 h-[70px] border-t-2">
                <input
                  id="input14"
                  type="text"
                  name="input14"
                  value={formData.input14}
                  // onChange={handleChange}
                  className=" w-full mt-3 focus:outline-none"
                // required
                />
                <label
                  htmlFor="input14"
                  className="flex flex-col w-full absolute left-1 top-1.5 text-xs"
                >
                  <p>14. Предписания за плащане на навло / Instructions as to payments for carrage</p>

                </label>
                <div className="flex flex-col mt-1.5">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="checkbox1"
                      name="checkbox1"
                      className="mr-2"
                    // onChange={handleCheckboxChange} 
                    />
                    <label htmlFor="checkbox1" className="">Чек 1</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="checkbox2"
                      name="checkbox2"
                      className="mr-2"
                    // onChange={handleCheckboxChange} 
                    />
                    <label htmlFor="checkbox2" className="">Чек 2</label>
                  </div>
                </div>
              </div>

            </div>

            <div className="relative flex-1 ">

              <div className="relative flex-1 border-2 border-t-0">
                <textarea
                  id="input19"
                  type="text"
                  rows={1}
                  name="input19"
                  value={formData.input19}
                  // onChange={handleChange}
                  className="w-full mt-9 pl-2 focus:outline-none text-[9px]"
                // required
                />
                <label
                  htmlFor="input19"
                  className="flex flex-col w-full absolute left-1 top-1.5 text-xs"
                >
                  <p>19. Специални споразумения / Special agreements</p>
                </label>
              </div>

              <table className="relative w-full border-2 border-t-0">

                <thead>
                  <tr>
                    <th className="border">20. За плащане</th>
                    <th className="border" colSpan="2">Изпращач</th>
                    <th className="border" colSpan="2">Валута</th>
                    <th className="border" colSpan="2">Получател</th>
                  </tr>
                </thead>


                <tbody className='border-b-2'>
                  <tr className='h-[12px]'>
                    <td className="border">Превозвач</td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                  </tr>
                  <tr className='h-[12px]'>
                    <td className="border">Названия</td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                  </tr>
                  <tr className='h-[12px]'>
                    <td className="border">Салдо</td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                  </tr>
                  <tr className='h-[12px]'>
                    <td className="border">Добавки</td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                  </tr>
                  <tr className='h-[12px]'>
                    <td className="border">Други такси</td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                  </tr>
                  <tr className='h-[70px]'>
                    <td className="border">Всичко</td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                    <td className="border"></td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>


          <div className="flex h-[47px]">

            <div className="relative flex flex-1 flex-nowrap border-2 p-1">
             
              <div className="flex">
                <label
                  htmlFor="input211"
                  className="mb-2">
                  21. Изготвена в / Established in
                </label>
                <textarea
                  id="input211"
                  type="text"
                  rows={1}
                  name="input211"
                  value={formData.input211}
                  className=" pl-1 focus:outline-none text-[9px] font-bold"
                  //required
                />
              </div>
              <div className="flex">
                <label
                  htmlFor="input212"
                  className=""
                >
                  на / on
                </label>
                <textarea
                  id="input212"
                  type="text"
                  rows={1}
                  name="input212"
                  value={formData.input212}
                  className="pl-1 focus:outline-none text-[9px] font-bold"
                  //required
                />
              </div>


             
            </div>

            <div className="relative flex-2 border-2 p-1">
            <input
                  id="input15"
                  type="text"
                  name="input15"
                  value={formData.input15}
                  onChange={handleChange}
                  className="h-3 w-full focus:outline-none"
                //  required
                />
              <label
                htmlFor="input15"
                className="flex flex-col w-full absolute left-1 top-1.5 text-xs"
              >
                <p>15. Наложен платеж / cash on delivery</p>
              </label>

            </div>

          </div>


          <div className="flex h-[100px]">

            <div className="relative flex flex-col justify-between flex-1 border-2 p-1 h-full">
              <p>22.</p>
              <label
                className="flex flex-col left-1 "
              >
                <p>Подпис и печат на изпращач</p>
                <p>Signature or stamp of the sender</p>
              </label>
            </div>

            <div className="relative flex flex-col justify-between flex-1 border-2 p-1 h-full">
              <p>23.</p>
              <label
                className="flex flex-col w-full left-1"
              >
               <p>Подпис и печат на превозвач</p>
               <p>Signature or stamp of the carrier</p>
              </label>

            </div>

            <div className="relative flex flex-col justify-between flex-1 border-2 p-1 h-full">
              <p>24.</p>
              <label
                className="flex flex-col w-full left-1"
              >
                <p>Подпис и печат на получател</p>
                <p>Signature or stamp of the consignee</p>
              </label>

            </div>

          </div>



          <div className="text-end pt-2">
            <button className="border-2" type="submit">Generate CMR</button>
          </div>
        </form>
      </div >
    </div >
  );
}

export default App;
