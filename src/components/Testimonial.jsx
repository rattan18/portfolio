import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Baljeet Singh"}
          feedback={"Your Coding skills are excellent."}
        />

        <TestimonialCard
          name={"Sidak Singh"}
          feedback={"Wow what a portfolio, You are a great developer."}
        />

        <TestimonialCard
          name={"Jatinder Singh"}
          feedback={"Great time management skill and a good website designer."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
