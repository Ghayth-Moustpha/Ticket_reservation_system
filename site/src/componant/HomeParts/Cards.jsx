import HomeCard from "./HomeCard";


const Cards = () =>{
return ( 
    <section className="bg-white py-16">
        
    <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-center mb-4">Enjoy  Out-Standing services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
      {/* please edite the cards */ } 
     
      <HomeCard
       title={"Easy Booking Process" } 
       imagelink={"/images/easybooking.jpg"}
       details={"With TotalTicket, you can book tickets in just a few simple steps. Say goodbye to long queues and complicated booking systems."}/> 
          
          <HomeCard 
       title={"modren Payment Mrethod " } 
       imagelink={"/images/iStock-1370737372.jpg"}
       details={"With TotalTicket, you can pay in the most modren method and with any e-card like mastercard, visacard .. etc "}/> 
        
        <HomeCard
       title={"Booking from Any Device  " } 
       imagelink={"/images/img_6273ec6d5c169.jpg"}
       details={"With TotalTicket,  you can use any device you have, phone ,laptop , even your smart watch "}/> 
        
    
      </div>
    </div>
  </section>
)
}

export default Cards ; 