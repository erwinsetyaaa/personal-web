let testimonials = [
  {
    author: "Amir Mahmud",
    rating: 5,
    caption: "Keren Banget",
    image: "my-img.jpg",
  },

  {
    author: "Ajo",
    rating: 4,
    caption: "Keren Banget Bang",
    image: "coding.jpg",
  },
  {
    author: "Hamdan",
    rating: 3,
    caption: "mayan",
    image: "my-img.jpg",
  },
  {
    author: "Amir Hooh Tenan",
    rating: 4,
    caption: "Keren Banget",
    image: "Foto Profil.jpg",
  },
  {
    author: "Amir Han",
    rating: 5,
    caption: "Keren Banget",
    image: "my-img.jpg",
  },
];

const testimonialsContainer = document.getElementById("testimonialsContainer");

const testimonialsHTML = (daftarTestimoni) => {
  return daftarTestimoni
    .map(
      (testimonial) => `
            <article>
          <img src="img/${testimonial.image}" alt="testimonialImage">
          <p class="testimonial-item-caption">
            <i>${testimonial.caption}</i>
          </p>
          <p style="text-align: right;">${testimonial.author}</p>
          <p style="text-align: right;  font-weight: bold;">${testimonial.rating}★</p>
        </article>`
    )
    .join("");
};

function showAllTestimonials() {
  testimonialsContainer.innerHTML = testimonialsHTML(testimonials);
}
showAllTestimonials();

function filterTestimonialByStar(rating) {
  const filteredTestimonials = testimonials.filter(
    (testimonial) => testimonial.rating === rating
  );


  if ( filteredTestimonials.length === 0) {
    return (testimonialsContainer.innerHTML =  `<p>No Testimonials.</p>`);
  }
    
    testimonialsContainer.innerHTML = testimonialsHTML(filteredTestimonials);

}
