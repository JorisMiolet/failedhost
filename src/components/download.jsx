import { CV, cijferlijst } from "../assets";

const download = () => {
    return (
      <div>
        <h1 className="pl-10">Download hier mijn <span className="text-[#EAEC13]">CV</span> en <span className="text-[#EAEC13]">cijferlijst</span></h1>
        <div className="flex justify-around my-40">
          <a href={CV} download="CV_Joris_Mioulet.pdf">
            <button className="bg-[#EAEC13] text-black w-[500px] text-[4rem] font-bold rounded-xl">
              CV
            </button>
          </a>
          <a href={cijferlijst} download="Cijferlijst_Joris_Mioulet.pdf">
            <button className="bg-[#EAEC13] text-black w-[500px] text-[4rem] font-bold rounded-xl">
              Cijferlijst
            </button>
          </a>
        </div>
      </div>
    )
  }
  
  export default download;