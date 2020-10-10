import React from 'react'
import {
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'
import { PostData } from '../loader'

export const SocialShare: React.FC<{ post: PostData }> = ({ post }) => {
  const size = 24
  return (
    <div className="container">
      <FacebookShareButton
        url={`http://archelainvest.com.br/${post.path}`}
        quote={post.title}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={size} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={`http://archelainvest.com.br/${post.path}`}
        title={post.title}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={size} round />
      </TwitterShareButton>
      <PinterestShareButton
        url={`http://archelainvest.com.br/${post.path}`}
        media={`archelainvest.com.br/${`http://archelainvest.com.br/${post.thumbnailPhoto}`}`}
        className="Demo__some-network__share-button"
      >
        <PinterestIcon size={size} round />
      </PinterestShareButton>
      <WhatsappShareButton url={`http://archelainvest.com.br/${post.path}`} title={post.title}>
        <WhatsappIcon size={size} round />
      </WhatsappShareButton>
    </div>
  )
}
