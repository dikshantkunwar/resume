import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  return (
    <section>
      <p>Hi, I &apos m Dikshant!</p>
      <p>Software developer based in North Bay, Ontario</p>
      <p>You can find me building things</p><a>on github <FontAwesomeIcon icon={['fab', 'github']}>gh</FontAwesomeIcon></a>
      <p>or posting daily life</p><a>on instagram <FontAwesomeIcon icon={['fab', 'instagram']}>ig</FontAwesomeIcon></a>
      <br />
      <p> Work related</p><a>Linkedin: <FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
    </section>
  )
}