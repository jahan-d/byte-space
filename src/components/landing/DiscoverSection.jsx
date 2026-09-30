import React, { useState } from 'react';
import CategoryPill from '../common/CategoryPill';
import CourseCard from '../common/CourseCard';
import { categories, courses } from '../../data/courses';
import styles from './DiscoverSection.module.css';

export default function DiscoverSection({ searchFilter = '' }) {
  const [activeCategory, setActiveCategory] = useState('Featured');

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      activeCategory === 'Featured' ? true : course.category === activeCategory;
    const matchesSearch = searchFilter
      ? course.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        course.author.toLowerCase().includes(searchFilter.toLowerCase()) ||
        course.category.toLowerCase().includes(searchFilter.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className={styles.discoverSection}>
      <div className={`container ${styles.discoverContainer}`}>
        {/* Header */}
        <div className={styles.headerArea}>
          <span className={styles.sectionBadge}>Top Rated Courses</span>
          <h2 className="section-title">Discover Your Passion, Build Your Skills</h2>
          <p className="section-subtitle">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Pills Bar */}
        <div className={styles.pillsScrollWrapper}>
          <div className={styles.pillsContainer}>
            {categories.map((category) => (
              <CategoryPill
                key={category}
                label={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </div>

        {/* 3x3 Courses Grid */}
        <div className={styles.coursesGrid}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className={styles.noCoursesFound}>
              <p>No courses found matching "{searchFilter || activeCategory}".</p>
              <button
                className={styles.resetBtn}
                onClick={() => setActiveCategory('Featured')}
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className={styles.footerCta}>
          <button className={styles.exploreAllBtn}>
            Explore All 1,200+ Courses
          </button>
        </div>
      </div>
    </section>
  );
}
