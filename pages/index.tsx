import React from "react"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from 'next/head'
import { Container } from '../styles/index'

import axios from "axios"

import Map from "../components/Map"

const Maps = ({ maps }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(maps)
  return (
    <>
      <Head>
        <title>Maps | DRL Leaderboards</title>
      </Head>
      <Container>
        {maps.map((drlMap: any) => (
          <Map key={drlMap.name} mapName={drlMap.name} />
        ))}
      </Container>
    </>
  )
}

export default Maps

export const getStaticProps: GetStaticProps = async (ctx) => {
  const maps = await axios.post("https://thedroneracingleague.com/wordpress/wp-admin/admin-ajax.php?action=drl_simulator_load_maps_api")
  return {
    revalidate: 600,
    props: {
      maps: maps.data.data
    }
  }
}