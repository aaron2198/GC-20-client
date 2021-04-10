import React from 'react';
import axios from 'axios';

import { Line } from "react-chartjs-2";
class Graph extends React.Component {
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
        this.scheduleUpdates = this.scheduleUpdates.bind(this);

        this.state = {
            data: {
                datasets: [
                    {
                        label: "CPM",
                        data: [],
                        fill: false,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.2)'
                    }
                ],
                labels: []
            },
            chartOptions: {
                responsive: true,
                //maintainAspectRatio: false,
                tooltips: {
                    enabled: true
                }
            }
        }
    }

    componentDidMount() {
        this.scheduleUpdates();
    }

    getData() {
        axios.get("http://" + this.props.deviceIP + "/cpm")
        .then(res => {
            if (res.data.CPM !== undefined){
                let dt = new Date;
                let newData = {
                    datasets: [
                        {
                            label: "CPM",
                            data: [...this.state.data.datasets[0].data, res.data.CPM],
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)'
                        }
                    ],
                    labels: [...this.state.data.labels, dt.toLocaleTimeString()]
                }
                this.setState({
                    data: newData
                })
            }

        })
    }

    scheduleUpdates() {
        setInterval(() => {
            this.getData();
        }, 3000)
    }

    render() {
        return (
            <div>
                <Line data={this.state.data} options={this.state.chartOptions}/>
            </div>
        )
    }
}

export default Graph;