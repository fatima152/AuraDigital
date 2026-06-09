import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CodeIcon, SocialIcon, AdsIcon, DesignIcon, BriefcaseIcon } from '../components/Icons';

const iconMap = { code: CodeIcon, social: SocialIcon, ads: AdsIcon, design: DesignIcon, career: BriefcaseIcon };

const posts = {
  'web-dev-tips': {
    title: '5 Essential Web Development Tips for Startups',
    date: 'Jun 5, 2026', readTime: '4 min', category: 'Web Dev',
    image: 'code',
    content: `In today's digital-first world, your website is often the first impression customers have of your business. Here are five essential tips every startup should follow when building their online presence.

1. Prioritize Mobile-First Design

More than 60% of web traffic comes from mobile devices. Your website must look and perform perfectly on smartphones and tablets before desktop. Use responsive design principles and test on real devices.

2. Optimize for Speed

A one-second delay in page load time can reduce conversions by 7%. Compress images, use lazy loading, minimize CSS/JS, and leverage browser caching. Tools like Google PageSpeed Insights can help identify bottlenecks.

3. Invest in SEO from Day One

Don't wait to think about SEO. Structure your content with proper heading tags, meta descriptions, alt text for images, and semantic HTML. This gives search engines the context they need to rank your site.

4. Choose the Right Tech Stack

For most startups, a modern stack like React + Node.js + MongoDB provides the flexibility, performance, and scalability needed. Avoid over-engineering — pick tools that match your actual needs.

5. Focus on User Experience

Clear navigation, strong CTAs, readable typography, and intuitive forms make the difference between a bounce and a conversion. Test your flows with real users and iterate based on feedback.`,
  },
  'instagram-monetization': {
    title: 'How to Monetize Instagram in 2026',
    date: 'May 28, 2026', readTime: '6 min', category: 'Social Media',
    image: 'social',
    content: `Instagram remains one of the most powerful platforms for creators and businesses to generate income. Here's how to monetize effectively in 2026.

1. Build a Niche Audience

Start with a specific niche. Whether it's fashion, tech, food, or education, a focused audience is more valuable than a broad one. Consistency in content is key.

2. Enable Professional Features

Switch to a Creator or Business account to access analytics, branded content tools, shopping features, and subscription options.

3. Leverage Multiple Income Streams

Brand sponsorships, affiliate marketing, digital products, Instagram Shopping, subscriptions, and paid collaborations — diversify your income sources.

4. Create High-Quality Content

Invest in good lighting, clear audio, and professional editing. Reels continue to dominate reach, so prioritize short-form video content.

5. Engage Your Community

Reply to comments, use Stories for polls and Q&As, and build genuine relationships with your followers. Engagement rate matters more than follower count for brand deals.`,
  },
  'meta-ads-roi': {
    title: 'Getting 4x ROI with Meta Ads',
    date: 'May 15, 2026', readTime: '5 min', category: 'Marketing',
    image: 'ads',
    content: `Running Meta Ads that actually generate profit requires strategy, testing, and optimization. Here's how we help clients achieve 4x+ ROAS.

1. Define Your Funnel

Map out the customer journey: awareness → interest → consideration → conversion. Create ad sets targeting each stage with relevant messaging.

2. Master Audience Targeting

Use Meta's detailed targeting, custom audiences (website visitors, email lists), and lookalike audiences to reach people most likely to convert.

3. Test Creatives Systematically

Run A/B tests on images, copy, CTAs, and formats. Let data guide your decisions — what works for one audience may not work for another.

4. Optimize for Conversion Events

Set up the Meta Pixel correctly and optimize campaigns for specific events like purchases, leads, or add-to-cart rather than just clicks or impressions.

5. Monitor and Adjust Daily

Review campaign performance daily. Shift budget toward winning ad sets, pause underperformers, and refresh creatives before ad fatigue sets in.`,
  },
  'branding-guide': {
    title: 'The Complete Guide to Brand Identity',
    date: 'Apr 30, 2026', readTime: '7 min', category: 'Design',
    image: 'design',
    content: `A strong brand identity sets you apart from competitors and builds trust with your audience. Here's how to build one from scratch.

1. Define Your Brand Strategy

Start with your mission, vision, values, and target audience. Your brand should reflect who you are and who you serve. Document this in a brand strategy brief.

2. Create Your Visual Identity

Logo, color palette, typography, imagery style, and design system. Consistency across all touchpoints is crucial — your website, social media, business cards, and packaging should feel like one brand.

3. Develop Your Brand Voice

How does your brand speak? Professional, friendly, bold, or educational? Define tone, language, and messaging guidelines that apply across all communication.

4. Build Brand Guidelines

Create a comprehensive brand guide document that includes logo usage rules, color codes, font specifications, and examples of correct and incorrect applications.

5. Apply Consistently

Every piece of content — from a social media post to a website page to an email signature — should reinforce the same brand identity. Consistency builds recognition and trust over time.`,
  },
  'freelance-tips': {
    title: 'Starting a Freelance Career in Pakistan',
    date: 'Apr 18, 2026', readTime: '5 min', category: 'Career',
    image: 'career',
    content: `Freelancing in Pakistan offers incredible opportunities. Here's a practical guide to getting started in 2026.

1. Pick One Skill and Master It

Don't try to offer everything. Choose one service — web development, graphic design, content writing, or digital marketing — and become excellent at it. Specialists earn more than generalists.

2. Build a Portfolio

Create sample projects if you don't have clients yet. A strong portfolio with 3-5 quality projects is better than a weak one with 20. Show your process and results.

3. Choose the Right Platforms

Upwork, Fiverr, Freelancer, and LinkedIn are popular. Create optimized profiles with clear descriptions, professional photos, and relevant keywords.

4. Set Competitive Rates

Start slightly below market rate to win initial projects and build reviews. Increase rates as you gain experience and positive feedback.

5. Invest in Learning

Keep upgrading your skills. The market evolves fast — stay ahead by taking courses, following industry trends, and practicing regularly.`,
  },
};

const BlogPost = () => {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) {
    return (
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero blog-post-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="back-link">&larr; All Posts</Link>
            <div className="post-image-large">{(() => { const Img = iconMap[post.image]; return Img ? <Img /> : null; })()}</div>
            <div className="post-meta">
              <span className="bc-category">{post.category}</span>
              <span>{post.date} · {post.readTime}</span>
            </div>
            <h1>{post.title}</h1>
          </motion.div>
        </div>
      </section>

      <article className="blog-post-content">
        <div className="container">
          <motion.div
            className="post-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('#')) {
                const text = paragraph.replace(/^#+\s*/, '');
                return <h3 key={i}>{text}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').map(l => l.replace(/^- /, ''));
                return <ul key={i}>{items.map((item, j) => <li key={j}>{item}</li>)}</ul>;
              }
              if (/^\d+\.\s/.test(paragraph)) {
                const lines = paragraph.split('\n');
                const items = lines.filter(l => /^\d+\.\s/.test(l)).map(l => l.replace(/^\d+\.\s/, ''));
                return <ol key={i}>{items.map((item, j) => <li key={j}>{item}</li>)}</ol>;
              }
              return <p key={i}>{paragraph}</p>;
            })}
          </motion.div>
        </div>
      </article>

      <section className="blog-nav">
        <div className="container">
          <Link to="/blog" className="btn-outline">← Back to Blog</Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
