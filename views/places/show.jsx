// RENDERS WHAT HTML TO SHOW FOR EACH PLACE SELECTED:

// IMPORTS
const React = require("react");
const Def = require("../default");

// STUB FUNCTION
function show (data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
          Edit
        </a>
        <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
          <button type='submit' className='btn btn-danger'>
            Delete
          </button>
        </form>
        <div>
            <h2>Rating</h2>
            Currently Unrated
        </div>
        <div>
            <img src={data.place.pic}></img>
            <h3>Located in {data.place.city}, {data.place.state}</h3>
        </div>
        <div>
            <h3>{data.place.showEstablished()}</h3>
        </div>
        <div>
            <h2>Comments</h2>
            No Comments Yet!
        </div>
      </main>
    </Def>
  );
}


// EXPORTS
module.exports = show;