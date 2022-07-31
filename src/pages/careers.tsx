import { PageProps } from 'gatsby';
import React from 'react';
import CVForm from '../components/CVForm/CVForm';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import styles from '../styles/index.module.scss';

interface Props {}
const careers: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout path={path}>
      <div className={styles.careers}>
        <SEO title={'Join Us'} description={null} />
        <div className={styles.text}>
          <h1 className={styles.heading}>
            <span>Join Us</span>
          </h1>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ margin: '8px 0' }}>PROJECT MANAGER</h3>
            <div style={{ margin: '12px 0' }}>
              <span style={{ fontWeight: 'bold', display: 'inline' }}>
                Education
              </span>
              : Having degree in Civil, Mechanical & Realated Civil Construction
              Work.
            </div>

            <div style={{ margin: '12px 0' }}>
              <span style={{ fontWeight: 'bold', display: 'inline' }}>
                Experience
              </span>
              : 10 to 12 year in Handling Project of Civil Construction Work.
            </div>

            <div style={{ margin: '12px 0' }}>
              <span style={{ fontWeight: 'bold', display: 'inline' }}>
                Qualities
              </span>
              : Arrangement of Manpower and Good Communication Skill with Team
              ,problem solving capacity and good leadership, Negociation with
              sub contractor and cost manegement , Risk Management Skill and
              Critical Thinking.
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ margin: '8px 0' }}>SITE SUPERVISIOR</h3>
            <div style={{ margin: '12px 0' }}>
              <span style={{ fontWeight: 'bold', display: 'inline' }}>
                Education
              </span>
              : Having Degree/Diploma in Civil , Mechanical & Equivalant
              Qualification.
            </div>

            <div style={{ margin: '12px 0' }}>
              <span style={{ fontWeight: 'bold', display: 'inline' }}>
                Experience
              </span>
              : 5 to 7 Year in handling Project of Civil Construction Work.
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ margin: '8px 0' }}>ELECTRICIAN & WIREMAN</h3>
            <div style={{ margin: '12px 0' }}>
              <span style={{ fontWeight: 'bold', display: 'inline' }}>
                Education
              </span>
              : : ITI 2 years course completed with NCTVT with Wireman License
              Compulsary.
            </div>

            <div style={{ margin: '12px 0' }}>
              <span style={{ fontWeight: 'bold', display: 'inline' }}>
                Experience
              </span>
              : : 2 to 5 Years in industrial Project and Maintainance.
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ margin: '8px 0' }}>FITTER/WELDER</h3>
            <div style={{ margin: '12px 0' }}>
              <span style={{ fontWeight: 'bold', display: 'inline' }}>
                Education
              </span>
              : : ITI 2 years course completed with NCTVT
            </div>

            <div style={{ margin: '12px 0' }}>
              <span style={{ fontWeight: 'bold', display: 'inline' }}>
                Experience
              </span>
              : : 2 to 5 Years exprience in pipeline and structure work.
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <CVForm />
        </div>
      </div>
    </Layout>
  );
};
export default careers;
