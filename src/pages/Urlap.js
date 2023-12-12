import FoUrlap from "../components/FoUrlap";

function Urlap() {
    function adatKap(obj) {
        console.log(obj);
    }


  return (
    <div className="Urlap container">
        <FoUrlap adatKap={adatKap}/>
    </div>
  );
}

export default Urlap;
