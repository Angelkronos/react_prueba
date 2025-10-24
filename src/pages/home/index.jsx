import React from 'react'
import { useLoaderData } from 'react-router'
import Hero from '../../components/home/Hero'

export default function Home(){
  const data = useLoaderData()

  return (
    <div>
      <Hero />
      <section style={{padding:'1rem'}}>
        <h2>{data?.welcome}</h2>
        <p>{data?.highlight}</p>
      </section>
    </div>
  )
}
