"use client"

import { useState } from 'react'
import Image from 'next/image'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [isSubmitting, setIsSubmitting] = useState(false)

  const subjects = [
    {
      category: "Admissions",
      options: [
        { value: "admission_btech", label: "B.Tech Admission" },
        { value: "admission_bca", label: "BCA Admission" },
        { value: "admission_mca", label: "MCA Admission" }
      ]
    },
    {
      category: "Academics",
      options: [
        { value: "fees", label: "Fee Structure" },
        { value: "scholarships", label: "Scholarships" },
        { value: "syllabus", label: "Course Syllabus" },
        { value: "exams", label: "Examination" }
      ]
    },
    {
      category: "Campus Life",
      options: [
        { value: "hostel", label: "Hostel Accommodation" },
        { value: "transport", label: "Transportation" },
        { value: "facilities", label: "Campus Facilities" }
      ]
    },
    {
      category: "Career",
      options: [
        { value: "placements", label: "Training & Placements" },
        { value: "internships", label: "Internship Opportunities" },
        { value: "industry_projects", label: "Industry Projects" }
      ]
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Validate phone number
      const phoneNumber = formData.phone.replace(/\D/g, '')
      if (phoneNumber.length < 10) {
        toast.error('Please enter a valid 10-digit phone number')
        setIsSubmitting(false)
        return
      }

      // Find the selected subject label
      const selectedSubject = subjects
        .flatMap(group => group.options)
        .find(option => option.value === formData.subject)

      if (!selectedSubject) {
        toast.error('Please select a subject')
        setIsSubmitting(false)
        return
      }

      const toastId = toast.loading('Sending your message...')

      // Prepare the message
      const smsMessage = `
        Thank you for contacting Tech University.
        Query: ${selectedSubject.label}
        Name: ${formData.name}
        Message: ${formData.message}
        We will get back to you soon.
      `.trim()

      // Send the SMS
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: phoneNumber,
          message: smsMessage
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        toast.success('Message sent successfully!', { id: toastId })
        
        // Show development mode message
        if (data.details) {
          console.log('Development Mode:', data.details)
        }

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      setSubmitStatus('error')
      toast.error(
        error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 123-456-7890", "+91 098-765-4321"],
      link: "tel:+911234567890"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      details: ["admissions@techuniversity.edu", "info@techuniversity.edu"],
      link: "mailto:admissions@techuniversity.edu"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Address",
      details: ["Tech University Campus,", "Sector 123, Tech City - 201XXX"],
      link: "https://maps.google.com"
    }
  ]

  const socialLinks = [
    {
      icon: <FaFacebook className="w-8 h-8" />,
      url: "https://facebook.com/techuniversity",
      color: "hover:text-[#1877F2]", // Facebook blue
      label: "Follow us on Facebook"
    },
    {
      icon: <FaTwitter className="w-8 h-8" />,
      url: "https://twitter.com/techuniversity",
      color: "hover:text-[#1DA1F2]", // Twitter blue
      label: "Follow us on Twitter"
    },
    {
      icon: <FaLinkedin className="w-8 h-8" />,
      url: "https://linkedin.com/company/techuniversity",
      color: "hover:text-[#0A66C2]", // LinkedIn blue
      label: "Connect on LinkedIn"
    },
    {
      icon: <FaInstagram className="w-8 h-8" />,
      url: "https://instagram.com/techuniversity",
      color: "hover:text-[#E4405F]", // Instagram pink
      label: "Follow us on Instagram"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with University Image */}
      <div className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585"
          alt="University Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Get in touch with us for any queries about admissions, academics, or campus life.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((group) => (
                      <optgroup key={group.category} label={group.category}>
                        {group.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-800 rounded-lg p-4 text-center">
                  Message sent successfully! We will contact you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-800 rounded-lg p-4 text-center">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-blue-600">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603!3d28.4089123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjEiTiA3N8KwMjQnMTguNiJF!5e0!3m2!1sen!2sin!4v1551225224782"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage 