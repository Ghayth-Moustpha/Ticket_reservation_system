import Cards from "../HomeParts/Cards";

import Hero from "../HomeParts/Hero";
import Companies from "../Sections/Companies";

const Home = ()  => {
    return (
        <>
         
         <div className="hero-container">
        <Hero />
      </div>
      <Companies/>
   
      <Cards />
      
        </>
    )
};

export default Home ; 