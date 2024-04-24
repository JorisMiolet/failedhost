import { linkedIn } from "../assets";


const bedrijf = () => {

    return (
        <div className="w-full flex flex-col items-center mb-40">
            <h1 className="pl-10" >Ik heb hiernaast ook een eigen bedrijf als <span className="text-[#EAEC13]">webdeveloper</span>, dat ik begin 2024 heb gestart.</h1>
            <a
            className="flex justify-center w-full" 
            target="_blank" 
            href="https://www.linkedin.com/in/joris-mioulet-524a7724a/"
            >
                <img className="w-[60%] transition duration-300 transform hover:scale-110" src={linkedIn} alt="LinkedIn" />
            </a>
        </div>
    )
}
export default bedrijf;