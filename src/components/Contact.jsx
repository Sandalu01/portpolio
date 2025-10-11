import React, { useRef, useState, memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Memoized form input component for better performance
const FormInput = memo(({ 
  label, 
  type = "text", 
  name, 
  value, 
  onChange, 
  placeholder, 
  rows = null,
  required = false 
}) => {
  const isTextarea = type === "textarea";
  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <motion.label 
      className="flex flex-col group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-gray-200 font-medium mb-4 group-focus-within:text-white transition-all duration-300 tracking-wide">
        {label}
        {required && <span className="text-white ml-1">*</span>}
      </span>
      
      <div className="relative">
        {/* Minimalist black background */}
        <div className="absolute inset-0 bg-black/80 border border-gray-700/50 rounded-lg group-focus-within:border-white/40 group-focus-within:bg-black/90 transition-all duration-300 shadow-lg group-focus-within:shadow-white/10"></div>
        
        <InputComponent
          type={!isTextarea ? type : undefined}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className="relative z-10 w-full bg-transparent py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border-none font-medium resize-none transition-all duration-300 focus:placeholder:text-gray-400"
        />
        
        {/* Focus accent line */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-white group-focus-within:w-full transition-all duration-500 rounded-full"></div>
        
        {/* Corner accents */}
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gray-600/30 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gray-600/30 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.label>
  );
});

FormInput.displayName = 'FormInput';

// Memoized submit button component
const SubmitButton = memo(({ loading, onClick }) => (
  <motion.button
    type="submit"
    onClick={onClick}
    disabled={loading}
    className={`${styles.primaryButton}`}
    whileHover={{ scale: loading ? 1 : 1.02 }}
    whileTap={{ scale: loading ? 1 : 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <span className="relative z-10 block transition-all duration-300 tracking-wide">
      {loading ? (
        <span className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
          Sending...
        </span>
      ) : (
        "Send Message"
      )}
    </span>
    
    {/* Corner highlights */}
    <div className={`absolute top-0 left-0 w-4 h-4 ${styles.cornerAccent} border-t-2 border-l-2 border-black/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    <div className={`absolute bottom-0 right-0 w-4 h-4 ${styles.cornerAccent} border-b-2 border-r-2 border-black/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
  </motion.button>
));

SubmitButton.displayName = 'SubmitButton';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Memoized form validation
  const validateForm = useCallback(() => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Email is invalid";
    if (!form.message.trim()) errors.message = "Message is required";
    return errors;
  }, [form]);

  const handleChange = useCallback((e) => {
    const { target } = e;
    const { name, value } = target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: "",
      }));
    }
  }, [formErrors]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    setFormErrors({});

    try {
      await emailjs.send(
        "service_12213",
        "template_zgdddkb",
        {
          from_name: form.name,
          to_name: "sandalu thushan",
          from_email: form.email,
          to_email: "sandaluthushan20@gmail.com",
          message: form.message,
        },
        "uxdriekI7IRCw5LYM"
      );

      setLoading(false);
      alert("Thank you! I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Oops! Something went wrong. Please try again.");
    }
  }, [form, validateForm]);

  return (
    <div className={`relative ${styles.sectionPadding} ${styles.container}`}>
      {/* Background decorative elements */}
      <div className={styles.backgroundGrid}>
        <div 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          className="w-full h-full"
        />
      </div>
      
      <div className={`absolute top-20 left-10 w-32 h-32 ${styles.backgroundOrb} bg-white/5`} />
      <div className={`absolute bottom-32 right-16 w-24 h-24 ${styles.backgroundOrb} bg-white/5`} />
      
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 sm:gap-12 overflow-hidden relative z-10">
        {/* Contact Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] relative"
        >
          {/* Form container */}
          <div className={`${styles.card}`}>
            {/* Border accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <div className={`${styles.cardContent}`}>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className={`${styles.sectionSubText} text-gray-300`}>
                  Get in touch
                </p>
                <h3 className={`${styles.sectionHeadText} text-white`}>
                  Contact
                  <span className="text-gray-400">.</span>
                </h3>
                <div className="flex justify-start mt-4">
                  <div className="w-20 h-px bg-white rounded-full" />
                </div>
              </motion.div>

              {/* Contact Form */}
              <div
                ref={formRef}
                className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8"
              >
                <FormInput
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  required
                />
                {formErrors.name && (
                  <span className="text-red-400 text-sm -mt-4 font-medium">{formErrors.name}</span>
                )}

                <FormInput
                  label="Your Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  required
                />
                {formErrors.email && (
                  <span className="text-red-400 text-sm -mt-4 font-medium">{formErrors.email}</span>
                )}

                <FormInput
                  label="Your Message"
                  type="textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  rows={7}
                  required
                />
                {formErrors.message && (
                  <span className="text-red-400 text-sm -mt-4 font-medium">{formErrors.message}</span>
                )}

                <SubmitButton loading={loading} onClick={handleSubmit} />
              </div>
            </div>

            {/* Corner decorative elements */}
            <div className={`absolute top-4 right-4 w-6 h-6 ${styles.cornerAccent} border-t border-r`}></div>
            <div className={`absolute bottom-4 left-4 w-6 h-6 ${styles.cornerAccent} border-b border-l`}></div>
          </div>
        </motion.div>

        {/* Earth Canvas */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative"
        >
          {/* Canvas container */}
          <div className={`${styles.card} h-full`}>
            {/* Frame accents */}
            <div className="absolute inset-2 border border-white/20 rounded-xl pointer-events-none"></div>
            
            {/* Earth Canvas */}
            <div className="relative z-10 w-full h-full">
              <EarthCanvas />
            </div>

            {/* Frame corners */}
            <div className={`absolute top-2 left-2 w-8 h-8 ${styles.cornerAccent} border-t-2 border-l-2`}></div>
            <div className={`absolute top-2 right-2 w-8 h-8 ${styles.cornerAccent} border-t-2 border-r-2`}></div>
            <div className={`absolute bottom-2 left-2 w-8 h-8 ${styles.cornerAccent} border-b-2 border-l-2`}></div>
            <div className={`absolute bottom-2 right-2 w-8 h-8 ${styles.cornerAccent} border-b-2 border-r-2`}></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="mt-12 sm:mt-16 w-full relative">
        <div className={styles.accentLine} />
        <div className="mt-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Center accent */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");