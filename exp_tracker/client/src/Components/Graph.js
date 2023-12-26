import React from "react"
import {Doughnut} from 'react-chartjs-2'
import {Chart,ArcElement} from 'chart.js'

Chart.register(ArcElement)

const config={
  data:{
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
        borderRadius:30,
        spacing:10
      }]
  },
  options:{
    cutout:220
  }
}



export default function Graph(){
    
    
    return(
        <div className="item">
            <div className="chart relative "></div>
            <Doughnut {...config}/>
            <div className=" absolute title" >
                <h3 className=" mb-4 font-bold text-4xl title">Total <span className=" block text-3xl text-emerald-400">$0</span></h3>
            </div>
            
        </div>
        )
    
}

// left-56 top-1/2 