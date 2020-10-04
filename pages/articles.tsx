import Head from 'next/head'
import { loadBlogPosts, PostData } from '../loader'
import { PostCard } from '../components/PostCard'
import { generateRSS } from '../rssUtil'

const sectionStyle = {
  width: '100%',
  padding: '100px 3vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
} as const

const Articles = (props: { posts: PostData[] }) => (
  <div style={{ width: '100%', maxWidth: 1200 }}>
    <Head>
      <title>ArchelaInvest</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

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

export default Articles

export const getStaticProps = async () => {
  const posts = await loadBlogPosts()

  // comment out to turn off RSS generation
  // during build step.
  await generateRSS(posts)

  const props = { posts }
  return { props }
}
