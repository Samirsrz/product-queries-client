import React from 'react';
import FaqItems from './FaqItems';

const Faq = () => {
    return (
        <div className="max-w-md lg:pl-20 pl-5 mt-8">

            <FaqItems
          question="How do I schedule a Query"
          answer="You can schedule a Query by filling out the form on our website or by giving us a call at [phone number]."
        />
        <FaqItems
          question="What type of products you recommend?"
          answer="We accept various payment methods, including credit/debit cards, PayPal, and bank transfincluding credit/debit cards, PayPal, and bank transfers. Payment is typically due upon completion of the service."
          />
          <FaqItems
            question="Do you offer discounts for regular customers?"
            answer="Yes, we offer discounts and special offers for our loyal customers. Be sure to sign up for our newsletter to stay updated on the latest promotions."
          />
          {/* Add more FAQ items here */}
        </div>
    );
};

export default Faq;