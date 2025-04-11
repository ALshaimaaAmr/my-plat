import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">جاري التحميل...</div>;
  if (!course) return <div className="loading">لم يتم العثور على الكورس</div>;

  return (
    <div className="course-details-container">
      <div className="course-details-card">
        <img src={course.image} alt={course.title} className="course-details-image" />
        <div className="course-details-info">
          <h2 className="course-details-title">{course.title}</h2>
          <p className="course-details-description">{course.description}</p>
          <p className="course-details-price">السعر: {course.price} $</p>
          <p className="course-details-category">التصنيف: {course.category}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;