import { PoundCircleTwoTone } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Select, Typography } from 'antd/'
import moment from 'moment/moment';
import React, { useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import Loader from './Loader';

const { Title, Text } = Typography
const { Option } = Select 

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


const News = ({simplified}) => {
  const [newsCategory, setnewsCategory] = useState("Cryptocurrency")
  const {data, isFetching} = useGetCryptosQuery(100);

  function WordCount(str) { 
    return str.split(" ").length;
  }
  const {data: cryptoNews } = useGetCryptoNewsQuery({newsCategory, count: simplified ? 6 : 12})

  if(!cryptoNews?.value) return <Loader />
  // console.log("hello", cryptoNews.value)
  return (
    <>
    

              
    <Row gutter={[24, 24]}>

      {!simplified && (
        <Col span = {24}>
          <Title level={2} className="heading center">Get The latest Crypto News</Title>
          <Select 
          showSearch
          className='select-news'
          placeholder = "select a crypto"
          optionFilterProp='children'
          onChange = {(value) => setnewsCategory(value)}
          filterOption = {(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase())}
          >

          <Option value = "cryptocurrency">Cryptocurrency</Option>
          {data?.data?.coins.map((coin) => <Option value = {coin.name}>{coin.name}</Option>)}

          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs = {{span: 24}} sm = {{span: 12}} lg = {{span: 8}} key = {i}>
          <Card hoverable className = "news-card">
             <a href = {news.url}  target = "_blank" rel = "noreferrer"> 
              <div className = "news-image-container">
                <Title className = "news-title" level = {4}>{WordCount(news.name) > 15 ? `${news.name.substring(0, 100)}...` : news.name}</Title>
                <img style = {{maxWidth: "200px", maxHeight: "100px"}} src = {news?.image?.thumbnail?.contentUrl || demoImage }  alt = "news" />
              </div>
                <p>{WordCount(news.description) > 20 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className="provider-container">
                  <div className="">
                    <Avatar src = {news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt = "news" />
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  </>
  )

  // return (
  //   <div className="">
  //     {cryptoNews.value.map((news, i) => (
  //       <div className="lol" key = {i}>{news.name}</div>
  //     ))}
  //   </div>
  // )
}

export default News