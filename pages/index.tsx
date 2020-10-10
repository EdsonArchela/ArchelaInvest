import Head from 'next/head'
import { PostData, loadBlogPosts } from '../loader'
import { PostCard } from '../components/PostCard'
import { generateRSS } from '../rssUtil'
import style from './index.module.scss'
import { useMemo } from 'react'

const sectionStyle = {
  width: '100%',
  padding: '100px 3vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
} as const

const Home = (props: { posts: PostData[] }) => {
  const introduction_path = useMemo(()=>{
    const dummy = props.posts.find(
      (post) =>
        post.path.includes('introduction')
    )
    return dummy? dummy.path : ''
  },[])
  return (
    <div style={{ width: '100%', maxWidth: 1200 }}>
      <Head>
        <title>ArchelaInvest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className={style.MainPost}
        style={{ backgroundImage: "url('/assets/main-post-background.jpg')" }}
      >
        <div className={style.content}>
          <h1>O que faz um Assessor de Investimentos?</h1>
          <p>
            Conversar com alguém que acompanha o mercado diariamente pode fazer toda a diferença na
            hora de investir seu dinheiro. Leia mais e descubra as vantagens de ter um Assessor de
            Investimentos!
          </p>
          <a
            href={`/${introduction_path}`}
          >
            LEIA MAIS
          </a>
        </div>
        <div className={style.empty} />
      </section>
      <div style={sectionStyle}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(300px,1fr))`,
            gridRowGap: '8px',
            gridColumnGap: '8px',
            width: '100%',
            padding: '0px 7vw',
          }}
        >
          {props.posts.map((post, j) => {
            return <PostCard post={post} key={j} />
          })}
        </div>
      </div>
    </div>
  )
}
export default Home

export const getStaticProps = async () => {
  const posts = await loadBlogPosts()

  // comment out to turn off RSS generation
  // during build step.
  await generateRSS(posts)

  const props = { posts }
  return { props }
}
