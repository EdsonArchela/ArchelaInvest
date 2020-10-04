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
        url={`archelainvest.com.br/${post.path}`}
        quote={post.title}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={size} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={`archelainvest.com.br/${post.path}`}
        title={post.title}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={size} round />
      </TwitterShareButton>
      <PinterestShareButton
        url={`archelainvest.com.br/${post.path}`}
        media={`archelainvest.com.br/${`archelainvest.com.br/${post.thumbnailPhoto}`}`}
        className="Demo__some-network__share-button"
      >
        <PinterestIcon size={size} round />
      </PinterestShareButton>
      <WhatsappShareButton url={`archelainvest.com.br/${post.path}`} title={post.title}>
        <WhatsappIcon size={size} round />
      </WhatsappShareButton>
    </div>
  )
}
