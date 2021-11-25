import React from "react";
import "./Searchform.css";

export default function Searchform() {
  return (
    <form>
      <div className="row">
        <div className="col-8">
          <input
            type="input"
            placeholder="Enter a city..."
            className="form-control forms-customised"
            id="city-input"
          />
        </div>
        <div className="col-4">
          <button
            type="submit"
            className="btn btn-primary forms-customised"
            id="submit-button"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
