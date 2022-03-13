const React = require("react");
const Def = require("../default");

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
        </div>
        <div>
            <h4>{data.place.city}</h4>
        </div>
        <div>
            <h4>{data.place.state}</h4>
        </div>
        <div>
            <h4>{data.place.cuisines}</h4>
        </div>
        <div>
            <h2>Comments</h2>
            No Comments Yet!
        </div>
      </main>
    </Def>
  );
}

module.exports = show;