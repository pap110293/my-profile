import React from 'react'
import { FULL_NAME } from '../../constants/personalInfo'

interface HomeProps {
  onLearnMoreClick: () => void
}

const Home: React.FC<HomeProps> = ({ onLearnMoreClick }) => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
  >
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
        Hi I'm {FULL_NAME}
      </h1>
      <h2 className="text-2xl md:text-3xl text-blue-800 mb-8">
        A .NET Developer
      </h2>
      <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-600">
        Experienced .NET developer with over 7 years of expertise building
        high-performance backend solutions, with additional frontend skills in
        React. As a dedicated gamer, I enjoy game development as a creative
        outlet, exploring design in Unity and Godot to bring interactive ideas
        to life.
      </p>
      <button
        onClick={onLearnMoreClick}
        className="bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition duration-300"
      >
        Let you know more about me
      </button>
    </div>
  </section>
)

export default Home
