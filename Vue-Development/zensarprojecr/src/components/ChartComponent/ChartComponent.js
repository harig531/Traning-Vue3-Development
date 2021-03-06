export default {
  name: 'ChartComponent',
  data() {
      return {
          chartData: {
              labels: ['A','B','C'],
              datasets: [
                  {
                      data: [300, 50, 100],
                      backgroundColor: ["#42A5F5","#66BB6A","#FFA726"],
                      hoverBackgroundColor: ["#64B5F6","#81C784","#FFB74D"]
                  }
              ]
          }
      }
  }
}
