import React,{useEffect, useState} from 'react'
import $,{dataString} from "jquery";

const Covid = () => {
    const [covidDatas, setCovidDatas] = useState([]);
  useEffect(() => {
    $.ajax({
      type: "GET",
      url: "https://api.covid19india.org/v4/min/data.min.json",
      cache: false,
      data: dataString,
      success: function (covidDatas) {
      setCovidDatas(covidDatas.UP.districts.Kushinagar.total.confirmed);
      console.log(covidDatas.UP.districts.Kushinagar.total.confirmed);
      console.log(covidDatas);
      },
    });
  }, []);
    return (
        <>
            <div>
            {/* { */}
                {/* covidDatas.map(covidData => ( */}
                    <h3>{covidDatas.UP.districts.Kushinagar.total.confirmed}</h3>
                {/* )) */}
            {/* } */}
        </div>
        </>
    )
}

export default Covid
