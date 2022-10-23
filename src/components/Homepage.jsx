import { Col, Row, Statistic, Typography } from 'antd'
import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import Loader from './Loader'
import News from './News'

const { Title } = Typography



const Homepage = () => {
  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(data)

  if (isFetching) return <Loader/>

  return (
    <>
        <Title level={2} className="heading">Global Crypto Statistics</Title>
        
        <Row>
            <Col span={12}><Statistic title = "Total Cryptocurrency" value = {globalStats.total} /></Col>
            <Col span={12}><Statistic title = "Total Exchanges" value = {millify(globalStats.totalExchanges)} /></Col>
            <Col span={12}><Statistic title = "Total MarketCap" value = {millify(globalStats.totalMarketCap)} /></Col>
            <Col span={12}><Statistic title = "Total 24h volume" value = {millify(globalStats.total24hVolume)} /></Col>
            <Col span={12}><Statistic title = "Total Markets" value = {millify(globalStats.totalMarkets)} /></Col>
        </Row>
        <div className="home-heading-container">
          <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
          <Title level={3} className="show-more"><Link to = "/cryptocurrencies">Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className="home-heading-container">
          <Title level={2} className="home-title">Latest Crypto News</Title>
          <Title level={3} className="show-more"><Link to = "/news">Show More</Link></Title>
        </div>
        <News simplified/>
    </>
  )
}

export default Homepage