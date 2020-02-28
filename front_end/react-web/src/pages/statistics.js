import React, { Component } from "react";
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import axios from 'axios';

const API = "http://localhost:8001/server/library/raw_reporte";

charts(FusionCharts);

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reporte: [],
    };
  }

  componentDidMount() {
    axios.get(API)
    .then(response => {
      this.setState({ reporte: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const datos = {
      chart: {
        caption: "Porcentaje de Reservaciones Realizadas",
        showpercentvalues: "1",
        defaultcenterlabel: "Android Distribution",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext: "<h1>Número de reservaciones realizadas:$value</h1>Título:$label",
        theme: "candy",
        baseFont: "Times New Roman",
        baseFontSize: "20",
        baseFontColor: "#000",
      },
      data: this.state.reporte
    };

    const chartConfigs = {
      type: 'pie2d',
      dataSource: datos,
      width: "800",
      height: "500",
    };
    // return (<ReactFusioncharts {...chartConfigs} />);
    return(
      <div>
          <Sidebar />,
          <Header />,
          <div className="ml-64">
            <hr />
            <main className="my-8 ml-32">
              <ReactFusioncharts {...chartConfigs} />
            </main>
          </div>
      </div>
    )
  }
}