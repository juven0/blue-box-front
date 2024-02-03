import { useEffect, useRef, useState } from 'react'
import './homeComponent.scss'
import axios from 'axios'
import LoadAnimation from '../loadAnimation/loadAnimation'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


function HomeComponent (): JSX.Element {
    const [homeDate, sethomeDate]: any = useState(null)

    useEffect(() => {
        axios({
            method: 'get',
            url:'http://localhost:4554/system'
        }).then((res:any)=> {
            sethomeDate(res.data)
        })
    }, [])
    
ChartJS.register(ArcElement, Tooltip, Legend);
const loadChartData = ( free: number, used: number): any => {
    const data = {
        labels: ['Free', 'Used'],
        datasets: [
          {
            label: 'size',
            data: [ free, used],
            backgroundColor: [
                
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderColor:  [
                
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    return data;
}

    
    return (
        <div className="homeComponent">
            <div className="infoSystem">
                <div className="os">
                    <h2>System Information</h2>
                    <h3>{ homeDate!= null ? homeDate.cpu:''}</h3>
                </div>
                <div className="user">
                { homeDate!= null ? <>
                    <h3>system : <label>{homeDate.platform}</label></h3>
                    <h3>user name : <label>{homeDate.userName}</label></h3>
                    <h3>home directory : <label>{homeDate.homedir}</label></h3>
                </>:''}
                </div>
            </div>
            <div className="storage">
                <h4><label className='dote'>.</label> Storage</h4>
                {
                    homeDate!= null ? homeDate.storage.map((iteme: any) => {
                        return  <div className="storage-chart">
                                    <h2>path: <span>{iteme.path}</span></h2>
                                    <p>total: <label>{(iteme.totalSpace/1000000).toFixed(2)}</label> Go</p>
                                    <Doughnut data={loadChartData( iteme.freeSpace, iteme.usedSpace)} />
                                </div>
                    }): null   
                }
            </div>
        </div>
    )
}

export default HomeComponent;