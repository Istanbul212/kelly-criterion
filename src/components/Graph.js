import React from 'react'
import Box from './graphComponents/Box'
import { Chart } from 'react-charts'

function Graph(props) {
  const data = React.useMemo(
    () => [
      {
        label: "Player",
        data: props.history,
      },
      {
        label: "Kelly Criterion",
        data: props.kellyHistory,
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <Box
        style={{
          background: 'rgba(0, 27, 45, 0.9)',
          padding: '0',
          borderRadius: '5px',
        }}
      >
      <Chart data={data} axes={axes} tooltip dark />
    </Box>
  );

  return lineChart;
}

export default Graph;
