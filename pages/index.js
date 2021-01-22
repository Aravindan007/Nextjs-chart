import Head from 'next/head'
import React from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';

import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setData]=useState('')
  const [datasets, setDatasets]=useState({}) 
  const getData=async()=>{
    await axios.get('https://covidtracking.com/api/states').then(r=>{
    let labels=[]  
    let data=[]
    r.data.map(e=>{
    labels.push(e.state)
    data.push(e.total)
      })
      setData(r)
      setDatasets({
        labels,
        datasets: [{
          label: 'covid tracking',
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      })
      //console.log(r)
    });
  }
  return (
    <div className={styles.container}>
      <h1>Welcome to simple next js</h1>
      <h3 style={{cursor:'pointer'}} onClick={()=>{getData()}}>{data?"":"Click here"}</h3>
      {
        data? <Bar
        data={datasets}
        width={400}
        height={200}
        options={{
          maintainAspectRatio: false
        }}
      />:""
      }
     
      </div>
  )
}

  
/*import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const chart = () => {
  const [data, setChartData] = useState({});
  

  const chart = () => {
    axios
      .get("https://covidtracking.com/api/states")
      .then(res => {
        
        setData(res)
        
        /*setChartData({
          
          datasets: [
            {
              label: "",
              data: res,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="_App">
      <h1><center>Covid-19</center></h1>
    </div>
  );
};
export default chart;*/



