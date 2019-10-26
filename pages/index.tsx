import React from 'react'
import Head from 'next/head'
import moment from 'moment';

const Home = () => {
  const date = new Date();

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      </Head>

      <input
        readOnly
        type="text"
        className="form-control"
        value={moment(date).format("YYYY/MM/DD [W]W/[D]E dddd MMMM Do - [D]300/366[R] LTS:")}
      />
    </div>
  )
}

export default Home
