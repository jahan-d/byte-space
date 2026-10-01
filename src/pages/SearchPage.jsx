import React, { useState } from 'react';
import { 
  FiSearch, 
  FiSliders, 
  FiBarChart2, 
  FiGrid, 
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CourseCard from '../components/common/CourseCard';
import CategoryPill from '../components/common/CategoryPill';
import { categories, courses } from '../data/courses';
import styles from './SearchPage.module.css';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState('All');

  // Filter courses
  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      activeCategory === 'Featured' ? true : course.category === activeCategory;
    const matchesSearch = searchTerm
      ? course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.author.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    const matchesLevel = selectedLevel === 'All' ? true : course.level === selectedLevel;
    return matchesCategory && matchesSearch && matchesLevel;
  });

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Blue Search Hero Banner matching Figma */}
      <section className={styles.searchHero}>
        <div className={styles.gridOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Find Your Next Course</h1>
          <p className={styles.heroSubtitle}>
            Explore our comprehensive library of 1,200+ courses taught by world-class creators and practitioners.
          </p>

          <div className={styles.searchForm}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search course title, skill, or creator..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>Search</button>
          </div>
        </div>
      </section>

      {/* Main Search Results Area */}
      <main className={`container ${styles.resultsContainer}`}>
        {/* Controls Bar */}
        <div className={styles.controlsBar}>
          <div className={styles.leftControls}>
            <button className={styles.filterBtn}>
              <FiSliders /> Filter
            </button>
            <div className={styles.dropdown}>
              <FiBarChart2 /> Level <FiChevronDown />
            </div>
            <div className={styles.dropdown}>
              <FiGrid /> Category <FiChevronDown />
            </div>
          </div>

          <div className={styles.resultsCount}>
            Showing <strong>{filteredCourses.length}</strong> courses
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className={styles.pillsScrollWrapper}>
          <div className={styles.pillsContainer}>
            {categories.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                isActive={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className={styles.coursesGrid}>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className={styles.noResults}>
              <h3>No courses found</h3>
              <p>Try searching for a different keyword or resetting your filter category.</p>
              <button
                className={styles.resetBtn}
                onClick={() => {
                  setActiveCategory('Featured');
                  setSearchTerm('');
                  setSelectedLevel('All');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Pagination Bar matching Figma */}
        <div className={styles.pagination}>
          <button 
            className={styles.pageArrow} 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          >
            <FiChevronLeft />
          </button>
          <button className={`${styles.pageNum} ${currentPage === 1 ? styles.activePage : ''}`} onClick={() => setCurrentPage(1)}>1</button>
          <button className={`${styles.pageNum} ${currentPage === 2 ? styles.activePage : ''}`} onClick={() => setCurrentPage(2)}>2</button>
          <button className={`${styles.pageNum} ${currentPage === 3 ? styles.activePage : ''}`} onClick={() => setCurrentPage(3)}>3</button>
          <span className={styles.dots}>...</span>
          <button className={styles.pageNum} onClick={() => setCurrentPage(8)}>8</button>
          <button 
            className={styles.pageArrow} 
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <FiChevronRight />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
