import { Bank } from "../../API";

function Footer() {
  return (
    <div className="flex flex-col p-5 md:flex-row md:justify-evenly">
      <div className="bank flex flex-col md:items-center md:justify-center">
        <div className=" bg-green-700  rounded-full w-fit afterBank">
          <h2 className="text-white px-2 ">Bank</h2>
        </div>
        <div className="bg-green-700 my-2 rounded-md text-white py-2">
          {Bank.map((data , index)=>{
            return(
              <div key={index} className="card flex flex-col items-center justify-center">
                <p>{data.bank}</p>
                <div className="flex md:text-center md:px-6 md:flex-col">
                  <h4 className="mr-2 md:mr-0">{data.stk}</h4>
                  <h4 className="ml-2 md:ml-0">{data.holder}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.61802115465605!2d106.33708!3d20.994875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ee4a72ba236076a!2zUXXDoW4g4buQYyBNeSBHw7k!5e0!3m2!1svi!2sus!4v1663506808831!5m2!1svi!2sus"
        className="h-[300px] w-full border border-green-700 md:w-[300px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Footer;
