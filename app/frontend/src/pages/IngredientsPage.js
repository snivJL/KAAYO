import React from "react";

const IngredientsPage = () => {
  return (
    <div className="mx-auto w-11/12">
      <h1 className="text-xl py-4">Our Ingredients</h1>
      <div className="grid grid-cols-2 gap-6 mb-12">
        <div>
          <img
            className="rounded-xl"
            src="https://phelaion.com/wp-content/uploads/2020/02/cooking-oil-being-poured-into-a-bowl.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Oils</h2>
          <ul>
            <li className="text-lg mb-2">
              Coconut: cleansing, moisturizing, anti-inflammatory
            </li>
            <li className="text-lg mb-2">Olive: moisturizing, antibacterial</li>
            <li className="text-lg mb-2">
              Rice bran: moisturizing, rich in Vit. E and antioxidants
            </li>
            <li className="text-lg mb-2">
              Canola: antibacterial, anti-inflammatory, good for dry, irritated
              skin
            </li>
            <li className="text-lg mb-2">
              Grapeseed: high in linoleic acid and antioxidants{" "}
            </li>
            <li className="text-lg mb-2">
              Almond: rich in Vit. E, A, and zinc- essential for healing acne or
              other facial scars
            </li>
            <li className="text-lg mb-2">
              Castor: draws moisture to the skin, antioxidants, soothes dry skin{" "}
            </li>
            <li className="text-lg mb-2">
              Avocado: rich in Vit. A,B,D,E. The oleic acid promotes collagen
              production
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Clays</h2>
          <ul>
            <li className="text-lg mb-2">Kaolin: gentle cleansing </li>
            <li className="text-lg mb-2">Rose: mild exfoliating properties</li>
            <li className="text-lg mb-2">
              French green: brilliant for oily skin
            </li>
            <li className="text-lg mb-2">
              French red: good at purifying complexion, giving it a healthier
              glow
            </li>
            <li className="text-lg mb-2">
              Activate charcoal: cleanses, unclog pores, removes impurities and
              dead skin cells.
            </li>
          </ul>
        </div>
        <div>
          <img
            className="rounded-xl"
            src="https://elementomineral.files.wordpress.com/2010/12/aguila_cores.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-12">
        <div>
          <img
            className="rounded-xl"
            src="https://post.healthline.com/wp-content/uploads/2020/08/shea_butter-732x549-thumbanail.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Butters</h2>
          <ul>
            <li className="text-lg mb-2">
              Shea: high concentration of fatty acids and vitamins that soften
              dry skin
            </li>
            <li className="text-lg mb-2">
              Mango: works as an emollient to soften skin, protects it from UV
              rays
            </li>
            <li className="text-lg mb-2">
              Cocoa: rich in phytochemicals which may improve blood flow and
              slow skin aging
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IngredientsPage;
