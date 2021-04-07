import React from "react";

const AboutPage = () => {
  return (
    <>
      <section>
        <div className="hero-shop object-cover h-52 mb-12">
          <div className="container-md mx-auto flex items-center h-full">
            <h2 className="text-gray-600 font-light mx-auto">About Us</h2>
          </div>
        </div>
      </section>
      <section className="w-full md:w-10/12 mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            style={{ backgroundColor: "#D8D2CA" }}
            className="bg-opacity-50 flex"
          >
            <div className="flex flex-col justify-around items-center p-4 w-10/12 md-w-3/4 mx-auto">
              <h2 className="text-gray-600 font-extralight text-5xl px-2	 text-center">
                ABOUT OUR HANDMADE SOAP
              </h2>
              <p className="text-center text-lg text-gray-600">
                Handmade soap is exactly that made by hand. They are made with
                vegetable oil and/or animals fats for their skin care
                properties. The soapmaker will often include additives to the
                soap for their healing, exfoliating and esthetic properties.
              </p>
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-full">
              <img
                className="object-cover w-full object-bottom"
                style={{ height: "562px" }}
                src="https://res.cloudinary.com/dilv93gvb/image/upload/v1617282938/kaayo/hecpb4faifpjotbmckqf.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="relative w-full h-full">
              <img
                className="object-cover w-full object-bottom"
                // style={{ height: "562px" }}
                src="https://cleanskin.ancorathemes.com/wp-content/uploads/2018/09/image-22.jpg?id=1500"
                alt=""
              />
            </div>
          </div>

          <div
            style={{ backgroundColor: "#B8A398" }}
            className="bg-opacity-80 flex"
          >
            <div className="flex flex-col justify-around items-center p-4 w-3/4 mx-auto">
              <p className="text-center text-lg text-white">
                "We started out with two pots on our stove, and we remain
                committed to the handmade way"
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative text-white">
          <img
            src="https://cleanskin.ancorathemes.com/wp-content/uploads/2018/09/bg-1.jpg?id=1502"
            alt=""
          />
          <div className="absolute grid  md:w-1/2 px-16 py-12 right-0 top-0">
            <h2 className=" font-extralight  text-5xl px-2	py-4 text-center">
              WE LOVE OUR CLIENTS
            </h2>
            <p className="text-center text-lg pb-8">
              We thank you for visiting our page and hope that you will enjoy
              experiencing our soaps. We are happy to give you a 5% discount on
              your order. Just fill in a form!
            </p>
            <button className="uppercase block py-2 px-4 w-max  border-2 bg-transparent border-gray-400 font-semi-bold text-white mx-auto hover:text-gray-600">
              Register
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
