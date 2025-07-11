import React from "react";

export default function About(){
    return (
        <>
         <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://imgs.search.brave.com/s_UjP_T2xkNBEAXhlYgjFNwfpAFxD5cXOvR0gNOxRN8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM0LmRlcG9zaXRw/aG90b3MuY29tLzEw/MDcyODMvMzQ2L2kv/NDUwL2RlcG9zaXRw/aG90b3NfMzQ2NTcy/Ni1zdG9jay1waG90/by1jb250YWN0LW1l/LmpwZw"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
        </>
    )
}