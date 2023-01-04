import React from 'react'
import Nav from './Nav'
import Countries from './Countries'
import Filter from './Filter'
import Search from './Search'

function Home() {
  return (
    <>
        <Nav></Nav>
        <Search></Search>
        <Filter></Filter>
        <Countries></Countries>
    </>
  )
}

export default Home