import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CodeIcon, SocialIcon, AdsIcon, DesignIcon, BriefcaseIcon } from '../components/Icons';

const posts = [
  { id: 'web-dev-tips', title: '5 Essential Web Development Tips for Startups', excerpt: 'Learn how to build a website that actually grows your business — from performance to SEO.', date: 'Jun 5, 2026', readTime: '4 min', image: CodeIcon, category: 'Web Dev' },
  { id: 'instagram-monetization', title: 'How to Monetize Instagram in 2026', excerpt: 'Complete guide to turning your Instagram presence into a real income stream.', date: 'May 28, 2026', readTime: '6 min', image: SocialIcon, category: 'Social Media' },
  { id: 'meta-ads-roi', title: 'Getting 4x ROI with Meta Ads', excerpt: 'Proven strategies for Facebook and Instagram ad campaigns that deliver real results.', date: 'May 15, 2026', readTime: '5 min', image: AdsIcon, category: 'Marketing' },
  { id: 'branding-guide', title: 'The Complete Guide to Brand Identity', excerpt: 'Everything you need to know about creating a brand that people remember and trust.', date: 'Apr 30, 2026', readTime: '7 min', image: DesignIcon, category: 'Design' },
  { id: 'freelance-tips', title: 'Starting a Freelance Career in Pakistan', excerpt: 'Practical tips for beginners looking to start freelancing in web development or design.', date: 'Apr 18, 2026', readTime: '5 min', image: BriefcaseIcon, category: 'Career' },
];

const Blog = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">Our Blog</div>
            <h1>Insights & <span className="highlight">Guides</span></h1>
            <p>Tips, strategies, and knowledge to help your brand grow online.</p>
          </motion.div>
        </div>
      </section>

      <section className="blog-page">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, i) => {
              const Image = post.image;
              return (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="bc-image"><Image /></div>
                <div className="bc-body">
                  <div className="bc-meta">
                    <span className="bc-category">{post.category}</span>
                    <span className="bc-date">{post.date} · {post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="bc-link">Read More →</Link>
                </div>
              </motion.article>
            ); })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
