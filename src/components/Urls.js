import React from "react";

// core components
const data = [
  {
    url: "https://www.uuidgenerator.net/",
    name: "uuid generator",
    cat: "dev",
  },

  {
    url: "https://lifeatregions.rgbk.com/Home.rf",
    name: "Life at Regions",
    cat: "corp",
    sort: 1,
  },
  {
    url: "https://alm.rgbk.com/spaces/display/REACH/Regions+Enterprise+Architecture",
    name: "Reach wiki",
    cat: "EA",
    sort: 1,
  },
];

function Urls() {
  return (
    <>
      <div className="section"> 
          <h3 className="title">Urls</h3>
          <div id="urls">
             
                <a href={data[0].url} target="_blank" rel="noreferrer">
                  {data[0].name}
                </a>
             
          </div> 
      </div>
    </>
  );
}

export default Urls;
