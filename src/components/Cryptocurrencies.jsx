import millify from 'millify';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Card, Col, Row, Typography } from 'antd'

const { Title } = Typography


const Cryptocurrencies = ({simplified }) => {
  const counte = simplified ? 10 : 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(counte || 100);


  const [cryptos, setcryptos] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {  
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setcryptos(filteredData);
    
  }, [cryptosList, searchTerm])
  

  if (isFetching) return 'Loading...'

  console.log(cryptos);
  return (
    <>
            

    {!simplified && <div className="search-crypto">
    <Title level={2} className="heading center">Search Your Favourite Crytos</Title>
      <input type="text" className="search-crypto-input"  placeholder="Search Cryptocurrency" onChange={(e) => e.target.value && setcryptos(cryptos.filter((currency) => (currency.name.toLowerCase().includes(e.target.value))))}/>
    </div>}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} md={6} lg={6} className="crypto-card" key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card title = {`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} />} hoverable>
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies