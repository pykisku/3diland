import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
      You want to know more? <br className='sm:block hidden' />
      continue from here!
      </p>
      <Link to='https://adaozge.co.uk/' className='btn'>
        CV
      </Link>
    </section>
  );
};

export default CTA;
