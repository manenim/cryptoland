import { Card, Col, Row } from 'antd'
import { Title } from 'chart.js'
import React from 'react'
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const News = ({simplified}) => {

  // const {data: cryptoNews } = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12})

  // if(!cryptoNews?.value) return 'Loading...'
  // console.log("hello", cryptoNews.value)
  return (
    <div>lol</div>
    // <Row gutter={[24, 24]}>
    //   {cryptoNews && cryptoNews.value.map((news, i) => (
    //     <Col xs = {24} sm = {12} lg = {8} key = {i}>
    //       <Card hoverable className = "news-card">
    //         {/* <a href =  target = "_blank" rel = "noreferrer"> */}
    //           <div className = "news-image-container">
    //             <Title className = "news-title" level = {4}>hello</Title>
    //           </div>
    //         {/* </a> */}
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
  )
}

export default News