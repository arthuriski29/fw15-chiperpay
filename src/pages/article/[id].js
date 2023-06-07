import React from 'react'
import {useParams} from 'next/navigation'
import Header from '@/components/Header'

function ArticleDetail() {
  const {id} = useParams()
  return (
    <>
      <Header/>
      <div>ArticleDetail {id}</div>
    </>
  )
}

export default ArticleDetail