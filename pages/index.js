import Head from 'next/head'
import Link from 'next/link'
// import { Resume } from './resume'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-5xl font-bold tracking-wider m-8">Ben Wozniak</h1>
      <Link href="/resume">
        <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-sm">Resume</button>
      </Link>
    </div>
  )
}
