import Comp from "./Comp";
import "./comp.css";

const competitionType = [
  {
    name: "Sony 70-200mm f2.8",
    timer: "5 days 4 hours 10 mins",
    numberOfTickets: "5000 tickets",
    price: "£1.99",
    image:
      "https://www.dpreview.com/files/p/E~products/sony_fe_70-200_2p8_gm_oss/shots/f36f915d9635489e81ed938508b2e793.png",
    topComp: true,
  },
  {
    name: "Canon r5",
    timer: "7 days 2 hours 32 mins",
    numberOfTickets: "10,000 tickets",
    price: "£1.99",
    image:
      "https://www.hdewcameras.co.uk/ekmps/shops/hdewcameras/images/canon-eos-r5-kit-rf-24-105-f-4l-with-adapter-13249-p.jpg",
    topComp: false,
  },
  {
    name: "Canon 4000d",
    timer: "8 days 5 hours 23 mins",
    numberOfTickets: "4000 tickets",
    price: "£1.99",
    image:
      "https://fatllama.com/_next/image?url=https%3A%2F%2Fassets.fatllama.com%2Fimages%2Fmedium%2Fcanon-eos-4000d-dslr-camera-with-1855mm-lens-68204309.png&w=1024&q=75",
    topComp: false,
  },
  {
    name: "Nikon Z6 II",
    timer: "3 days 5 hours 23 mins",
    numberOfTickets: "10000 tickets",
    price: "£1.99",
    image:
      "https://www.imaging-resource.com/PRODS/nikon-z6-ii/ZPR-nikon-z6ii-beauty.jpg",
    topComp: false,
  },
  {
    name: "Nikon Z6 II",
    timer: "3 days 5 hours 23 mins",
    numberOfTickets: "10000 tickets",
    price: "£1.99",
    image:
      "https://www.imaging-resource.com/PRODS/nikon-z6-ii/ZPR-nikon-z6ii-beauty.jpg",
    topComp: false,
  },
  {
    name: "Nikon Z6 II",
    timer: "3 days 5 hours 23 mins",
    numberOfTickets: "10000 tickets",
    price: "£1.99",
    image:
      "https://www.imaging-resource.com/PRODS/nikon-z6-ii/ZPR-nikon-z6ii-beauty.jpg",
    topComp: false,
  },
  {
    name: "Nikon Z6 II",
    timer: "3 days 5 hours 23 mins",
    numberOfTickets: "10000 tickets",
    price: "£1.99",
    image:
      "https://www.imaging-resource.com/PRODS/nikon-z6-ii/ZPR-nikon-z6ii-beauty.jpg",
    topComp: false,
  },
  {
    name: "Nikon Z6 II",
    timer: "3 days 5 hours 23 mins",
    numberOfTickets: "10000 tickets",
    price: "£1.99",
    image:
      "https://www.imaging-resource.com/PRODS/nikon-z6-ii/ZPR-nikon-z6ii-beauty.jpg",
    topComp: false,
  },
  {
    name: "Nikon Z6 II",
    timer: "3 days 5 hours 23 mins",
    numberOfTickets: "10000 tickets",
    price: "£1.99",
    image:
      "https://www.imaging-resource.com/PRODS/nikon-z6-ii/ZPR-nikon-z6ii-beauty.jpg",
    topComp: false,
  },
];

const Competitions = () => {
  return (
    <div>
      <h1>Welcome to the Competitions Page</h1>
      <div className="competitions">
        {competitionType.map((comp) => (
          <Comp
            name={comp.name}
            timer={comp.timer}
            numberOfTickets={comp.numberOfTickets}
            price={comp.price}
            image={comp.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Competitions;

{
  /* price={comp.price} image={comp.image} */
}
