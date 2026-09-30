import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { 
  FiPlay, 
  FiCheck, 
  FiClock, 
  FiBookOpen, 
  FiAward, 
  FiUsers, 
  FiStar,
  FiArrowLeft 
} from 'react-icons/fi';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { courses } from '../data/courses';
import styles from './CourseDetails.module.css';

export default function CourseDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('About');

  // Find course or fallback to first course
  const course = courses.find((c) => c.id === parseInt(id || '1', 10)) || courses[0];

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={`container ${styles.courseContainer}`}>
        {/* Back Link */}
        <Link to="/" className={styles.backLink}>
          <FiArrowLeft /> Back to Courses
        </Link>

        {/* Video Hero Banner */}
        <div className={styles.videoBanner}>
          <img
            src={course.thumbnail}
            alt={course.title}
            className={styles.videoPoster}
          />
          <div className={styles.videoOverlay}>
            <button className={styles.playButton} aria-label="Play course preview">
              <FiPlay className={styles.playIcon} />
            </button>
            <span className={styles.previewTag}>Preview this course</span>
          </div>
        </div>

        {/* Main Content & Sidebar Grid */}
        <div className={styles.detailsGrid}>
          {/* Left Details Content */}
          <div className={styles.mainInfo}>
            {/* Navigation Tabs */}
            <div className={styles.tabsRow}>
              {['About', 'Lessons', 'Reviews'].map((tab) => (
                <button
                  key={tab}
                  className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Title & Author Info */}
            <h1 className={styles.title}>{course.title}</h1>
            <div className={styles.metaHeader}>
              <span className={styles.authorBadge}>by {course.author}</span>
              <div className={styles.ratingScore}>
                <FiStar className={styles.starIcon} />
                <span>{course.rating}</span>
                <span className={styles.reviewsCount}>({course.reviewCount || 420} reviews)</span>
              </div>
              <span className={styles.levelBadge}>{course.level}</span>
            </div>

            {/* Tab: About Content */}
            {activeTab === 'About' && (
              <div className={styles.tabContent}>
                <section className={styles.sectionBlock}>
                  <h3 className={styles.blockTitle}>Description</h3>
                  <p className={styles.paragraph}>
                    Embark on an enlightening exploration into the world of digital creation with our comprehensive course. This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                  </p>
                  <p className={styles.paragraph}>
                    In the initial modules, you'll establish a solid foundation by immersing yourself in the core principles that form the backbone of modern digital creation. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your creative projects to new heights.
                  </p>
                </section>

                {/* Sneak Peak Screenshots matching Figma */}
                <section className={styles.sectionBlock}>
                  <h3 className={styles.blockTitle}>Sneak Peak</h3>
                  <div className={styles.sneakGrid}>
                    <img
                      src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=300&q=80"
                      alt="Wireframing"
                      className={styles.sneakImg}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=300&q=80"
                      alt="UI Components"
                      className={styles.sneakImg}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80"
                      alt="Analytics & Insights"
                      className={styles.sneakImg}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80"
                      alt="Mobile App Prototypes"
                      className={styles.sneakImg}
                    />
                  </div>
                </section>

                {/* Key Points */}
                <section className={styles.sectionBlock}>
                  <h3 className={styles.blockTitle}>Key Learning Points</h3>
                  <ul className={styles.keyPointsList}>
                    <li>
                      <FiCheck className={styles.checkIcon} />
                      Master modern workflow, auto-layout, and tokenized design systems from scratch.
                    </li>
                    <li>
                      <FiCheck className={styles.checkIcon} />
                      Build responsive real-world web and mobile interactive prototypes.
                    </li>
                    <li>
                      <FiCheck className={styles.checkIcon} />
                      Learn client handoff, developer documentation, and production design specs.
                    </li>
                    <li>
                      <FiCheck className={styles.checkIcon} />
                      Receive direct instructor feedback and community critique sessions.
                    </li>
                  </ul>
                </section>
              </div>
            )}

            {/* Tab: Lessons */}
            {activeTab === 'Lessons' && (
              <div className={styles.tabContent}>
                <h3 className={styles.blockTitle}>Course Curriculum ({course.lessons} Lessons)</h3>
                <div className={styles.curriculumList}>
                  {[
                    { num: '01', title: 'Introduction to Modern Digital Assets', time: '14 mins' },
                    { num: '02', title: 'Designing for Maximum Visual Impact', time: '22 mins' },
                    { num: '03', title: 'Typography and Color Harmony', time: '18 mins' },
                    { num: '04', title: 'Structuring Reusable Component Systems', time: '35 mins' },
                    { num: '05', title: 'Prototyping Micro-Interactions & Animations', time: '28 mins' },
                    { num: '06', title: 'Real-world Capstone Project Handoff', time: '40 mins' },
                  ].map((lesson) => (
                    <div key={lesson.num} className={styles.curriculumItem}>
                      <span className={styles.lessonNum}>{lesson.num}</span>
                      <span className={styles.lessonTitle}>{lesson.title}</span>
                      <span className={styles.lessonTime}>
                        <FiClock size={14} /> {lesson.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Reviews */}
            {activeTab === 'Reviews' && (
              <div className={styles.tabContent}>
                <h3 className={styles.blockTitle}>Student Reviews</h3>
                <div className={styles.reviewsList}>
                  {[
                    { user: 'Jessica M.', rating: 5, comment: 'One of the best structured courses I have ever taken. Clear, concise, and highly practical!' },
                    { user: 'David K.', rating: 5, comment: 'The instructor explains advanced concepts in a way that anyone can understand.' }
                  ].map((r, i) => (
                    <div key={i} className={styles.reviewItem}>
                      <div className={styles.reviewHeader}>
                        <strong>{r.user}</strong>
                        <div className={styles.stars}>
                          {[...Array(r.rating)].map((_, idx) => (
                            <FiStar key={idx} className={styles.starIcon} />
                          ))}
                        </div>
                      </div>
                      <p className={styles.reviewText}>{r.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Buy Box Card */}
          <aside className={styles.sidebar}>
            <div className={styles.buyBox}>
              <div className={styles.priceRow}>
                <span className={styles.priceSymbol}>$</span>
                <span className={styles.priceNumber}>{course.price}</span>
                <span className={styles.priceLifetime}>/{course.priceLabel}</span>
              </div>

              <button className={styles.enrollNowBtn}>
                Enroll Now
              </button>

              <div className={styles.guaranteeText}>
                30-Day Money-Back Guarantee
              </div>

              <div className={styles.perksDivider}></div>

              <h4 className={styles.perksTitle}>This course includes:</h4>
              <ul className={styles.perksList}>
                <li><FiClock /> {course.duration} on-demand video</li>
                <li><FiBookOpen /> {course.lessons} downloadable resources</li>
                <li><FiAward /> Certificate of completion</li>
                <li><FiUsers /> Lifetime access to creator community</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
