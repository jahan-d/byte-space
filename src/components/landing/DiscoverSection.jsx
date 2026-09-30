import React, { useState } from 'react';
import { FiSliders, FiBarChart2, FiGrid, FiChevronDown } from 'react-icons/fi';
import CategoryPill from '../common/CategoryPill';
import CourseCard from '../common/CourseCard';
import { categories, courses } from '../../data/courses';
import styles from './DiscoverSection.module.css';

export default function DiscoverSection({ searchFilter = '' }) {
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      activeCategory === 'Featured' ? true : course.category === activeCategory;
    const matchesSearch = searchFilter
      ? course.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        course.author.toLowerCase().includes(searchFilter.toLowerCase()) ||
        course.category.toLowerCase().includes(searchFilter.toLowerCase())
      : true;
    const matchesLevel = selectedLevel === 'All' ? true : course.level === selectedLevel;
    return matchesCategory && matchesSearch && matchesLevel;
  });

  return (
    <section id="courses" className={styles.discoverSection}>
      <div className={`container ${styles.discoverContainer}`}>
        {/* Header */}
        <div className={styles.headerArea}>
          <h2 className={styles.mainTitle}>Discover Your Passion, <br />Build Your Skills</h2>
          <p className={styles.mainSubtitle}>
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Top Control Bar matching Figma */}
        <div className={styles.filterControlBar}>
          <div className={styles.leftFilters}>
            <button className={styles.filterBtn}>
              <FiSliders /> Filter
            </button>
            <div className={styles.dropdownBtn}>
              <FiBarChart2 /> Level <FiChevronDown />
            </div>
            <div className={styles.dropdownBtn}>
              <FiGrid /> Category <FiChevronDown />
            </div>
          </div>

          <div className={styles.rightSort}>
            <div className={styles.sortDropdown}>
              <span>Most relevant</span> <FiChevronDown />
            </div>
          </div>
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
              <p>No courses found matching your criteria.</p>
              <button
                className={styles.resetBtn}
                onClick={() => {
                  setActiveCategory('Featured');
                  setSelectedLevel('All');
                }}
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
