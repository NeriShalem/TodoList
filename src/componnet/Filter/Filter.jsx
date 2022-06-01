import React from 'react'
import '../Filter/Filter.css'

function Filter({ setShownFilter }) {
  function handelShownFilterChange(e) {
    setShownFilter(e.target.innerHTML)
  }

  return (
    <div className="filterDiv">
      <button className="filterBtn" onClick={handelShownFilterChange}>
        Not complete
      </button>
      <button className="filterBtn" onClick={handelShownFilterChange}>
        Complete
      </button>
      <button className="filterBtn" onClick={handelShownFilterChange}>
        All
      </button>
    </div>
  )
}

export default Filter
