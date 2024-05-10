import CompanyCard from "./CompanyCard";
const  companies =[
        {
            "id": 1,
            "created_at": "2024-04-17T11:32:03.000000Z",
            "updated_at": "2024-04-17T11:32:03.000000Z",
            "name": "Al-Kadmouse",
            "description": "Al-Qadmus (Arabic: القدموس, also spelled al-Qadmous or Cadmus) is a town in northwestern Syria, administratively part of the Tartus Governorate,",
            "type": "Busestors",
            "logo": "logos/f6tv6G8uBF5aceoEUWob2LQvT5I9ybFsSrzTnsCV.png",
            "address": "Tartouse, Syria",
            "email": "info@alkadmous.com",
            "phone": "094879879879",
            "website": "https://www.alkadmous.com/"
        },
        {
            "id": 2,
            "created_at": "2024-04-17T11:36:10.000000Z",
            "updated_at": "2024-04-17T11:36:10.000000Z",
            "name": "Terwada",
            "description": "Al-Ter(Arabic: القدموس, also spelled al-Qadmous or Cadmus) is a town in northwestern Syria, administratively part of the Tartus Governorate, located northeast of Tartus and 14 kilometres (8.7 miles) southeast of Baniyas. Nearby localities include Kaff al-Jaa and Masyaf to the east, Wadi al-'Uyun and al-Shaykh Badr to the south, Hammam Wasel, al-Qamsiyah and Maten al-Sahel to the southwest, Taanita to the west, al-Annazeh to the northwest and Deir Mama to the northeast. It is situated just east of the Mediterranean coast and its ruined castle stands on a plateau roughly 850 metres (2,790 feet) above sea level and just above the town.[2]",
            "type": "Busestors",
            "logo": "logos/h7BOWWntx7k5bMsAqS6ptrdhy4J6WT1Dp3oifYJB.jpg",
            "address": "Alepo,Syria",
            "email": "ghayth@admin.com",
            "phone": "6688668",
            "website": "https://www.facebook.com/tarwada.Bus/"
        }
    ] ; 

const Companies = () =>{
return ( 
    <section className="bg-white py-16">
        
    <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-center mb-4">Enjoy  Out-Standing services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
      {/* please edite the cards */ } 
        {
            // how to for loop in a javascript items 
            companies.map((company)=>
                    (<CompanyCard title={company.name} imagelink= { 'http://127.0.0.1:8000/' + company.logo} details={company.description} />)
            )
        }
    
      </div>
    </div>
  </section>
)
}

export default Companies ; 