import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'

export async function PageFooter() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
    console.log('index footer', footer)
  } catch (error) {
    console.log(error, 'index FOOTER ERROR')
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  )
}
