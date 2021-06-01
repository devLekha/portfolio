 import React from 'react';
import ReactEcharts from 'echarts-for-react';

export const Career = () => {
  
    return (
        <>
        <div className="container">
            <h3>Professional Summary:</h3>
            <p> Worked as Associate Software Engineer for 10 months and have around 1 year of experience as a Jr.  Developer with 4 months of internship as Blockchain Developer.</p>
                        <h5>Career Contour:</h5>
                   <table >
                    <tr>
                        <th> Organization</th>
                        <th> Designation</th>
                        <th> Tenure</th>
                    </tr>
                    <tr>
                        <td>Nexivo Consulting Pvt. Ltd., Hyderabad</td>
                        <td>Blockchain Intern</td>
                        <td>Mar’18 - July’18</td>
                    </tr>
                    <tr>
                        <td>Nexivo Consulting Pvt. Ltd., Hyderabad</td>
                        <td>Jr. Developer</td>
                        <td>Aug’18 - Oct'19</td>
                    </tr>
                     <tr>
                        <td>VoltusWave Technologies India Pvt. Ltd., Hyderabad</td>
                        <td>Associate Software Engineer</td>
                        <td>Jan'20 - Nov'20</td>
                    </tr>
                    </table>
        </div>
        <br />
     <div className="container">  
     <ReactEcharts
        option={ {
    title: {
        text: 'Designations',
        subtext: 'In months',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'horizontal',
        top: 'bottom',
    },
    series: [
        {
            name: 'Worked As',
            type: 'pie',
            radius: '50%',
           data: [
                {value: 4, name: 'blockchain intern', itemStyle:{color: 'yellow'}},
               {value: 13, name: 'Jr.Developer', itemStyle:{color: 'red'}},
                {value: 11, name: 'Associate software Engineer', itemStyle:{color: 'blue'}},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}}
      />
     </div>   
     </>
    )
}
