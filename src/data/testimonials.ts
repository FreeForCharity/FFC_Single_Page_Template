// Testimonials data
// This file imports testimonial data from JSON files in ./testimonials/ directory
// To edit testimonials, edit the JSON files directly in src/data/testimonials/

import testimonial1 from './testimonials/testimonial-1.json'
import testimonial2 from './testimonials/testimonial-2.json'
import testimonial3 from './testimonials/testimonial-3.json'

export const testimonials = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial1, // Duplicate for display
  testimonial2, // Duplicate for display
]
