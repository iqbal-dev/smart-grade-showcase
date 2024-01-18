import React, { useState } from "react";
import StudentSearchBox from "./StudentSearchBox";
import StudentList from "./StudentList";
export default function StudentTable() {
  const students = [
    {
      studentClassName: "One",
      students: [
        {
          id: 1,
          name: "Tanjin Ashma",
          score: "A",
          percentage: 70,
        },
        {
          id: 2,
          name: "Basari Sabrina",
          score: "A-",
          percentage: 60,
        },
        {
          id: 3,
          name: "Salek Mustafizur",
          score: "A-",
          percentage: 65,
        },
        {
          id: 4,
          name: "Amin Ashbaful",
          score: "A+",
          percentage: 80,
        },
        {
          id: 5,
          name: "Sultana Taslima",
          score: "A+",
          percentage: 90,
        },
        {
          id: 6,
          name: "Kaif Maruf",
          score: "A",
          percentage: 70,
        },
        {
          id: 7,
          name: "Rikta Farzana",
          score: "A-",
          percentage: 95,
        },
        {
          id: 8,
          name: "Khatun Afroza",
          score: "A+",
          percentage: 50,
        },
        {
          id: 9,
          name: "Nahar Happy",
          score: "A",
          percentage: 74,
        },
        {
          id: 10,
          name: "Tasnim Tamanna",
          score: "B+",
          percentage: 63,
        },
      ],
    },
    {
      studentClassName: "Two",
      students: [
        {
          id: 1,
          name: "Naseem Sajib",
          score: "A+",
          percentage: 90,
        },
        {
          id: 2,
          name: "Orin Sanjida",
          score: "A+",
          percentage: 95,
        },
        {
          id: 3,
          name: "Jhilik Tamanna",
          score: "A",
          percentage: 70,
        },
        {
          id: 4,
          name: "Tisha",
          score: "A-",
          percentage: 65,
        },
        {
          id: 5,
          name: "Mahmudul Farhad",
          score: "A",
          percentage: 70,
        },
        {
          id: 6,
          name: "Shanta Taslima",
          score: "A-",
          percentage: 68,
        },
        {
          id: 7,
          name: "Tasnim Zakia",
          score: "A",
          percentage: 70,
        },
        {
          id: 8,
          name: "Ruhul Riad",
          score: "A+",
          percentage: 84,
        },
        {
          id: 9,
          name: "Babu Joynal",
          score: "A",
          percentage: 76,
        },
        {
          id: 10,
          name: "Umme Selina",
          score: "A+",
          percentage: 88,
        },
      ],
    },
  ];
  
  
  
  
  
  
  
  
  
  
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>
          {/* Search Box */}
          <StudentSearchBox />
          {/* Search Box Ends */}
        </div>
        <div className="max-w-[848px] mx-auto overflow-auto">
          <StudentList students={students} />
        </div>
      </div>
    </section>
  );
}
