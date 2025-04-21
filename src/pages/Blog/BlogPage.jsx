import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import axios from "axios";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, recentRes] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/blog"),
          axios.get("http://127.0.0.1:8000/api/blog/recent"),
        ]);
        console.log(postsRes);
        console.log(recentRes);
        setBlogs(postsRes.data.data);
        setRecentPosts(recentRes.data);

        // Extract unique categories from all posts
        const allCategories = postsRes.data.data.map((post) => post.category);
        const uniqueCategories = [...new Set(allCategories)];
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-[600px] md:h-[700px] flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <motion.div
            className="flex justify-center mb-6"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full"></div>
          </motion.div>
          <motion.h2
            className="text-2xl font-semibold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading...
          </motion.h2>
          <motion.p
            className="text-gray-500 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Preparing your experience
          </motion.p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        Error loading blog posts: {error}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20"
    >
      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          ENVOCARE Insights & Updates
        </h1>
        <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Expert perspectives on environmental compliance, sustainable
          engineering, and infrastructure development
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:w-2/3"
        >
          {/* Blog Grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            className="grid md:grid-cols-2 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                variants={fadeIn("up", "spring", index * 0.1, 1)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to={`/blog/${blog.slug}`}>
                  <img
                    src={`http://127.0.0.1:8000/storage/${blog.image_url}`}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full mb-2">
                      {blog.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-green-600 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(blog.published_date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                      <span className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          {blogs.length > 0 && (
            <motion.div
              variants={fadeIn("up", "spring", 0.4, 1)}
              className="mt-12 flex justify-center"
            >
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </motion.div>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="lg:w-1/3"
        >
          <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Search
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                />
                <button className="absolute right-3 top-2.5 text-gray-400 hover:text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-start gap-3 group"
                    >
                      <img
                        src={`http://127.0.0.1:8000/storage/${post.image_url}`}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-green-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {new Date(post.published_date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/blog/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-center justify-between text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <span>{category}</span>
                      <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {blogs.filter((b) => b.category === category).length}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Subscribe
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Get the latest articles and news delivered to your inbox
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default BlogPage;
