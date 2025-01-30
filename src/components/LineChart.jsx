import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const chartConfig = {
  type: "line",
  height: 240,
  series: [
    {
      name: "Ganancias",
      data: [
        50000, 75000, 100000, 125000, 150000, 200000, 250000, 300000, 350000,
      ],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#40251B",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
        formatter: (value) => `$${value.toLocaleString()}`,
      },
    },
    colors: ["#40251B"],
    grid: {
      show: true,
      borderColor: "#6B3F09",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function LineChart() {
  return (
    <Card className="w-full shadow-xl rounded-2xl pt-2">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center p-2"
      >
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <Square3Stack3DIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray" className="font-bold">
            Tendencias de Ventas Mensuales
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w font-normal"
          >
            Este gráfico proporciona una representación clara de las tendencias
            mensuales de ventas, permitiendo identificar patrones y
            visualizar de manera detallada las fluctuaciones en el rendimiento a
            lo largo del año. 
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <div className="h-full lg:h-full">
          <Chart {...chartConfig} />
        </div>
      </CardBody>
    </Card>
  );
}
