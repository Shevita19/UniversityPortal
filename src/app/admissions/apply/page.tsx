"use client"

import { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaCalendar } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    program: '',
    lastQualification: '',
    board: '',
    percentage: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  })

  const programs = [
    { value: 'btech-cse', label: 'B.Tech - Computer Science & Engineering' },
    { value: 'btech-ece', label: 'B.Tech - Electronics & Communication' },
    { value: 'btech-me', label: 'B.Tech - Mechanical Engineering' },
    { value: 'btech-ce', label: 'B.Tech - Civil Engineering' },
    { value: 'bca', label: 'BCA - Bachelor of Computer Applications' },
    { value: 'mca', label: 'MCA - Master of Computer Applications' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    
    // Show success message
    toast.success('Application submitted successfully!', {
      duration: 5000,
      position: 'top-center',
    })

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
      program: '',
      lastQualification: '',
      board: '',
      percentage: '',
      address: '',
      city: '',
      state: '',
      pincode: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto bg-blue-600 text-white rounded-t-xl p-8">
          <h1 className="text-3xl font-bold mb-2">Admission Application 2025-26</h1>
          <p className="text-blue-100">Fill out the form below to apply for admission</p>
        </div>

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white rounded-b-xl shadow-lg p-8"
        >
          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name *</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name *</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="dob">Date of Birth *</label>
                <input
                  id="dob"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="gender">Gender *</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Academic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="program">Program Applying For *</label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                >
                  <option value="">Select program</option>
                  {programs.map(program => (
                    <option key={program.value} value={program.value}>
                      {program.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="lastQualification">Last Qualification *</label>
                <input
                  id="lastQualification"
                  type="text"
                  name="lastQualification"
                  value={formData.lastQualification}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="e.g., 12th Standard, Diploma"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="board">Board/University *</label>
                <input
                  id="board"
                  type="text"
                  name="board"
                  value={formData.board}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Enter board/university name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="percentage">Percentage/CGPA *</label>
                <input
                  id="percentage"
                  type="text"
                  name="percentage"
                  value={formData.percentage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Enter percentage or CGPA"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Address Information</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="address">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Enter your complete address"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="city">City *</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="state">State *</label>
                  <input
                    id="state"
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Enter state"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="pincode">PIN Code *</label>
                  <input
                    id="pincode"
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Enter PIN code"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdmissionForm 