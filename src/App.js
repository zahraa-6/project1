import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import { Home } from './pages/Home';
import { BlogSinglePage } from './components/common/BlogSinglePage';
import { About } from './pages/About';
import Courses from './pages/Courses'; // تأكد من أن Courses يتم تصديره بشكل صحيح
import { Blog } from './pages/Blog';
import { Instructor } from './pages/Instructor';
import CourseDetails from './pages/CourseDetails';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/about'
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path='/courses'
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />
        <Route
          path='/course/:id'
          element={
            <Layout>
              <CourseDetails />
            </Layout>
          }
        />
        <Route
          path='/instructor'
          element={
            <Layout>
              <Instructor />
            </Layout>
          }
        />
        <Route
          path='/blog'
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path='/single-blog'
          element={
            <Layout>
              <BlogSinglePage />
            </Layout>
          }
        />
        <Route
          path='/login'
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
