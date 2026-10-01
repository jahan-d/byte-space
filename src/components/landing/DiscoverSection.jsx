import React, { useState, useMemo } from 'react';
import { FiSliders, FiBarChart2, FiGrid, FiChevronDown, FiCheck } from 'react-icons/fi';
import CategoryPill from '../common/CategoryPill';
import CourseCard from '../common/CourseCard';
import { categories, courses } from '../../data/courses';
import styles from './DiscoverSection.module.css';

export default function DiscoverSection({ searchFilter = '' }) {
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('Most relevant');

  // Dropdown open states
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Filter & Sort logic
  const filteredAndSortedCourses = useMemo(() => {
    let result = courses.filter((course) => {
      const matchesCategory =
        activeCategory === 'Featured' ? true : course.category === activeCategory;
      const matchesSearch = searchFilter
        ? course.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
          course.author.toLowerCase().includes(searchFilter.toLowerCase()) ||
          course.category.toLowerCase().includes(searchFilter.toLowerCase())
        : true;
      const matchesLevel =
        selectedLevel === 'All Levels' ? true : course.level === selectedLevel;

      return matchesCategory && matchesSearch && matchesLevel;
    });

    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'Highest Rated') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, searchFilter, selectedLevel, sortBy]);

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

        {/* Top Control Bar matching Figma with Working Interactive Dropdowns */}
        <div className={styles.filterControlBar}>
          <div className={styles.leftFilters}>
            <button 
              className={`${styles.filterBtn} ${activeCategory !== 'Featured' || selectedLevel !== 'All Levels' ? styles.filterActive : ''}`}
              onClick={() => {
                setActiveCategory('Featured');
                setSelectedLevel('All Levels');
                setSortBy('Most relevant');
              }}
            >
              <FiSliders /> Reset Filters
            </button>

            {/* Level Dropdown */}
            <div className={styles.dropdownWrapper}>
              <button 
                type="button" 
                className={styles.dropdownBtn}
                onClick={() => {
                  setLevelDropdownOpen(!levelDropdownOpen);
                  setSortDropdownOpen(false);
                }}
              >
                <FiBarChart2 /> {selectedLevel} <FiChevronDown />
              </button>
              {levelDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      className={`${styles.dropdownItem} ${selectedLevel === lvl ? styles.selectedItem : ''}`}
                      onClick={() => {
                        setSelectedLevel(lvl);
                        setLevelDropdownOpen(false);
                      }}
                    >
                      {lvl} {selectedLevel === lvl && <FiCheck className={styles.checkIcon} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category Quick Pill */}
            <div className={styles.categoryLabel}>
              <FiGrid /> Category: <strong>{activeCategory}</strong>
            </div>
          </div>

          {/* Sort By Dropdown */}
          <div className={styles.rightSort}>
            <div className={styles.dropdownWrapper}>
              <button 
                type="button" 
                className={styles.sortDropdown}
                onClick={() => {
                  setSortDropdownOpen(!sortDropdownOpen);
                  setLevelDropdownOpen(false);
                }}
              >
                <span>{sortBy}</span> <FiChevronDown />
              </button>
              {sortDropdownOpen && (
                <div className={`${styles.dropdownMenu} ${styles.sortMenu}`}>
                  {['Most relevant', 'Price: Low to High', 'Price: High to Low', 'Highest Rated'].map((sortOption) => (
                    <button
                      key={sortOption}
                      type="button"
                      className={`${styles.dropdownItem} ${sortBy === sortOption ? styles.selectedItem : ''}`}
                      onClick={() => {
                        setSortBy(sortOption);
                        setSortDropdownOpen(false);
                      }}
                    >
                      {sortOption} {sortBy === sortOption && <FiCheck className={styles.checkIcon} />}
                    </button>
                  ))}
                </div>
              )}
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
          {filteredAndSortedCourses.length > 0 ? (
            filteredAndSortedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className={styles.noCoursesFound}>
              <p>No courses found matching your criteria.</p>
              <button
                className={styles.resetBtn}
                onClick={() => {
                  setActiveCategory('Featured');
                  setSelectedLevel('All Levels');
                  setSortBy('Most relevant');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
