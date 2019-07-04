/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import PortfolioItem from '../templates/portfolio-item';
import My from '../components/my';

const PortfolioPage = ({ data }) => {
  const { luvScriptStudioImage } = data;
  return (
    <Layout>
      <SEO title="Portfolio" description="I have been enjoying working on different projects during the past years to polish my skills in different fields. Check out my work!" />
      <section className="section hv-mt-3">
        <div className="container">
          <h1 className="title hv-section-title hv-animate-text-stroke">Portfolio</h1>
          <p className="hv-section-subtitle-hashtags">
            <span>#project</span>
          ,
            {' '}
            <span>
            #creative
              <span role="img" aria-label="Star">⭐</span>
            </span>
          ,
            {' '}
            <span>
            #lit
              <span role="img" aria-label="Fire">🔥</span>
            </span>
          </p>
          <div className="hv-section-portfolio hv-mt-3">
            <PortfolioItem name="LuvScript Studio" color="#ba194d" imageFluid={luvScriptStudioImage.childImageSharp.fluid} link="https://www.facebook.com/luvscript.studio/" linkTitle="Go and love" description="Determined to create helpful tiny bits to tackle the biggest complications. For the community. For ever." />
          </div>
        </div>
      </section>
      <My />
    </Layout>
  );
};

export default PortfolioPage;

export const query = graphql`
  query PortfolioPageQuery {
    luvScriptStudioImage: file(relativePath: { eq: "luvscriptstudio_square.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
