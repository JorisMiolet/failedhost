import { portfolioHeroBG } from "../assets"

const hero = () => {
  const heroStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${portfolioHeroBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
  };

  return (
    <div style={heroStyle} className="flex justify-center py-40 flex-col text-center">
      <h1 className="text-[12rem] font-extrabold">Hallo, ik ben</h1>
      <h1 className="text-[12rem] mt-20 pt-40 font-extrabold text-transparent" style={{ WebkitTextStroke: '8px white' }}>Joris Mioulet</h1>
    </div>
  )
}

export default hero
