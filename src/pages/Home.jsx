import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">جاري التحميل...</div>;

  return (
    <div className="home-container">
      <h1 className="home-title">كل المنتجات</h1>
      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-info">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-price">{course.price} $</p>
              <Link to={`/courses/${course.id}`} className="course-link">عرض التفاصيل</Link>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;