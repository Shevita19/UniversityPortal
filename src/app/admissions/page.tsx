"use client"

import Link from 'next/link'
import { 
  FaGraduationCap, 
  FaCalendar, 
  FaFileAlt, 
  FaCheckCircle, 
  FaClock, 
  FaUniversity, 
  FaUsers, 
  FaMoneyBillWave,
  FaFileSignature,
  FaIdCard,
  FaPassport,
  FaAddressCard
} from 'react-icons/fa'

const AdmissionsPage = () => {
  const admissionSteps = [
    {
      icon: <FaFileSignature className="w-6 h-6 text-blue-600" />,
      title: "Online Application",
      description: "Fill out the online application form and pay the application fee",
      deadline: "March 15, 2025",
      color: "bg-blue-50"
    },
    {
      icon: <FaGraduationCap className="w-6 h-6 text-purple-600" />,
      title: "Entrance Examination",
      description: "Take the university entrance examination",
      deadline: "April 10, 2025",
      color: "bg-purple-50"
    },
    {
      icon: <FaUsers className="w-6 h-6 text-green-600" />,
      title: "Interview",
      description: "Personal interview for shortlisted candidates",
      deadline: "April 25, 2025",
      color: "bg-green-50"
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-orange-600" />,
      title: "Final Selection",
      description: "Merit list declaration and admission confirmation",
      deadline: "May 15, 2025",
      color: "bg-orange-50"
    }
  ]

  const importantDates = [
    {
      icon: <FaCalendar className="w-5 h-5 text-blue-600" />,
      title: "Application Start Date",
      date: "January 15, 2025",
      description: "Start your application process"
    },
    {
      icon: <FaClock className="w-5 h-5 text-red-600" />,
      title: "Application Deadline",
      date: "March 15, 2025",
      description: "Last date to submit applications"
    },
    {
      icon: <FaGraduationCap className="w-5 h-5 text-purple-600" />,
      title: "Entrance Exam Date",
      date: "April 10, 2025",
      description: "University entrance examination"
    },
    {
      icon: <FaCheckCircle className="w-5 h-5 text-green-600" />,
      title: "Result Declaration",
      date: "May 15, 2025",
      description: "Announcement of results"
    }
  ]

  const requiredDocuments = [
    {
      icon: <FaFileAlt className="w-5 h-5" />,
      text: "10th and 12th Mark sheets (Original + 3 photocopies)"
    },
    {
      icon: <FaUniversity className="w-5 h-5" />,
      text: "Transfer Certificate and Migration Certificate"
    },
    {
      icon: <FaIdCard className="w-5 h-5" />,
      text: "Character Certificate from previous institution"
    },
    {
      icon: <FaPassport className="w-5 h-5" />,
      text: "Recent passport size photographs (6 copies)"
    },
    {
      icon: <FaAddressCard className="w-5 h-5" />,
      text: "Domicile Certificate (if applicable)"
    }
  ]

  const programs = [
    {
      name: "B.Tech Programs",
      duration: "4 years",
      seats: 300,
      eligibility: "10+2 with PCM, minimum 60%",
      fee: "₹2.5 lakhs per year"
    },
    {
      name: "BCA",
      duration: "3 years",
      seats: 120,
      eligibility: "10+2 with Mathematics, minimum 50%",
      fee: "₹1.8 lakhs per year"
    },
    {
      name: "MCA",
      duration: "2 years",
      seats: 60,
      eligibility: "Graduation with Mathematics, minimum 55%",
      fee: "₹2.2 lakhs per year"
    }
  ]

  const feeStructure = [
    {
      program: "B.Tech Programs",
      fees: [
        {
          type: "Tuition Fee",
          amount: "₹2,00,000",
          period: "per year"
        },
        {
          type: "Development Fee",
          amount: "₹25,000",
          period: "per year"
        },
        {
          type: "Hostel & Mess",
          amount: "₹1,20,000",
          period: "per year"
        },
        {
          type: "One-time Payments",
          items: [
            { name: "Admission Fee", amount: "₹25,000" },
            { name: "Security Deposit", amount: "₹10,000" },
            { name: "Registration Fee", amount: "₹5,000" }
          ]
        }
      ]
    },
    {
      program: "BCA",
      fees: [
        {
          type: "Tuition Fee",
          amount: "₹1,50,000",
          period: "per year"
        },
        {
          type: "Development Fee",
          amount: "₹15,000",
          period: "per year"
        },
        {
          type: "Hostel & Mess",
          amount: "₹1,20,000",
          period: "per year"
        },
        {
          type: "One-time Payments",
          items: [
            { name: "Admission Fee", amount: "₹15,000" },
            { name: "Security Deposit", amount: "₹10,000" },
            { name: "Registration Fee", amount: "₹5,000" }
          ]
        }
      ]
    },
    {
      program: "MCA",
      fees: [
        {
          type: "Tuition Fee",
          amount: "₹1,80,000",
          period: "per year"
        },
        {
          type: "Development Fee",
          amount: "₹20,000",
          period: "per year"
        },
        {
          type: "Hostel & Mess",
          amount: "₹1,20,000",
          period: "per year"
        },
        {
          type: "One-time Payments",
          items: [
            { name: "Admission Fee", amount: "₹20,000" },
            { name: "Security Deposit", amount: "₹10,000" },
            { name: "Registration Fee", amount: "₹5,000" }
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Admissions 2025-26
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Join one of India's premier technical institutions and build your future with us.
            </p>
            <Link 
              href="/admissions/apply"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <FaFileSignature className="w-5 h-5 mr-2" />
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Admission Process */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Admission Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {admissionSteps.map((step, index) => (
            <div key={index} className={`${step.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <p className="text-blue-600 font-medium flex items-center">
                <FaCalendar className="w-4 h-4 mr-2" />
                Deadline: {step.deadline}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Important Dates */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Important Dates
          </h2>
          <div className="max-w-3xl mx-auto divide-y divide-gray-200 bg-white rounded-xl shadow-lg overflow-hidden">
            {importantDates.map((date, index) => (
              <div key={index} className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    {date.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{date.title}</h3>
                    <p className="text-gray-600">{date.description}</p>
                  </div>
                </div>
                <p className="text-blue-600 font-medium">{date.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Required Documents
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-4">
            {requiredDocuments.map((doc, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600">{doc.icon}</span>
                </div>
                <span className="text-gray-700">{doc.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Available Programs
        </h2>
        <div className="space-y-6">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {program.name}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-600">
                <div>
                  <p className="font-medium text-gray-700">Duration</p>
                  <p>{program.duration}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Available Seats</p>
                  <p>{program.seats}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Eligibility</p>
                  <p>{program.eligibility}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Fee Structure</p>
                  <p>{program.fee}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fee Structure */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fee Structure
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feeStructure.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Program Header */}
                <div className="bg-blue-600 py-4 px-6">
                  <h3 className="text-xl font-bold text-white">
                    {program.program}
                  </h3>
                </div>

                {/* Fee Details */}
                <div className="p-6 space-y-6">
                  {/* Regular Fees */}
                  {program.fees.map((fee, feeIndex) => (
                    <div key={feeIndex}>
                      {!fee.items ? (
                        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                          <div>
                            <p className="font-medium text-gray-900">{fee.type}</p>
                            {fee.period && (
                              <p className="text-sm text-gray-500">{fee.period}</p>
                            )}
                          </div>
                          <p className="text-blue-600 font-semibold">{fee.amount}</p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-medium text-gray-900 mb-3">{fee.type}</p>
                          <div className="space-y-2 pl-4">
                            {fee.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex justify-between items-center text-sm">
                                <p className="text-gray-600">{item.name}</p>
                                <p className="text-blue-600 font-medium">{item.amount}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Total Calculation */}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-900">First Year Total</p>
                      <p className="text-lg font-bold text-blue-600">
                        {program.program === "B.Tech Programs" ? "₹3,85,000" :
                         program.program === "BCA" ? "₹3,15,000" : "₹3,55,000"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="bg-gray-50 px-6 py-4">
                  <p className="text-sm text-gray-600">
                    * All fees are subject to change as per university norms
                  </p>
                  <p className="text-sm text-gray-600">
                    * Hostel accommodation is optional
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdmissionsPage 