import { adatLeiras } from "../AdatLeiras.js";

export default function FoUrlap(props) {
  const adat = {};
  function adatKuld(event) {
    event.preventDefault();
    console.log(adat);
    props.adatKap(adat);
  }

  function adatValt(event) {
    console.log(event.target.id);
    console.log(event.target.value);
    adat[event.target.id] = event.target.value;
  }

  return (
    <form onSubmit={adatKuld}>
      <div class="mb-3 mt-3">

        {Object.keys(adatLeiras).map((element, key) => {
            return(
          <div class="mb-3 mt-3" key={key}>
            <label htmlFor={element} className="form-label">
              {adatLeiras[element].megjelenes}
            </label>
            <input
              type={adatLeiras[element].tipus}
              className="form-control"
              id={adatLeiras[element]}
              name={adatLeiras[element]}
              value={adatLeiras[element].value}
              onChange={adatValt}
            />
          </div>)
        })}
      </div>
      <input type="submit" className="btn btn-primary" value="Submit" />
    </form>
  );
}
