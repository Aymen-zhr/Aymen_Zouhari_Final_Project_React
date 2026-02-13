import React from 'react';
import { images } from '../../../constants';

const AboutText = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16">
        
        <div className="w-full md:w-5/12">
          <img 
            src={images.products.product1}
            alt="Our Story" 
            className="w-full h-auto object-cover shadow-sm"
          />
        </div>

        <div className="w-full md:w-7/12 pt-4">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
            Our story
          </h2>
          
          <p className="text-gray-500 leading-relaxed mb-12 text-[15px]">
            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut
            pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
            porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida
            lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam
            imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
            Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
            pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed
            rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.
            Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
          </p>

          {/* Blockquote with left border */}
          <blockquote className="border-l border-gray-200 pl-10">
            <p className="text-gray-500 text-[15px] italic mb-4 leading-relaxed">
              Creativity is just connecting things. When you ask creative people how they did something, they
              feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to
              them after a while.
            </p>
            <footer className="text-gray-400 text-sm">
              — Steve Job's
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
    );
};

export default AboutText;