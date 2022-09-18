import { Data } from "../../API";

function Main() {
  return (
    <>
      <div className="main grid grid-cols-2 gap-5 p-5 md:grid-cols-3 xl:grid-cols-4">
        {Data.map((trung, index) => (
          <div className=" h-56 flex flex-col bg-green-100 overflow-hidden border border-green-700  relative cursor-pointer rounded" id={index} key={index}>
            <div className="h-40 bg-white overflow-hidden">
                <img src={trung.img} alt="Trung_Img" className="object-cover h-full w-full pointer-events-none" />
            </div>
            <div className="content ">
                <p className="text-center">{trung.name}</p>
                <p className="text-center">{trung.price}/{trung.donvi}</p>
            </div>
          </div>
        ))}
      </div>
    </> 
  );
}

export default Main;
