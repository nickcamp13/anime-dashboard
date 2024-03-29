const StatisticCard = ({ statistic, method }) => {

  return(
    <div>
      <h3>{method()}</h3>
      <h2>{statistic}</h2>
    </div>
  )
}

export default StatisticCard;