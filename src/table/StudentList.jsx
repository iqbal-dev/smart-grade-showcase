import React from "react";
import avatar from "../assets/avatar.png";
export default function StudentList({ students }) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#FFFFFF0D]">
          <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
            ID
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold text-left">
            Name
          </th>
          <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
          <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
        </tr>
      </thead>
      <tbody>
        {students?.map((student) => (
          <React.Fragment key={student.studentClassName}>
            <tr className="bg-white/5">
              <td className="p-5 text-sm md:text-xl" colSpan={4}>
                Class {student.studentClassName}
              </td>
            </tr>
            {student.students.map((student) => (
              <tr key={student.id} className="border-b border-[#7ECEB529]">
                <td className="p-5 text-sm md:text-xl">{student.id}</td>
                <td className="p-5 text-sm md:text-xl">
                  <div className="flex space-x-3 items-center">
                    <img
                      className="w-8 h-8"
                      src={avatar}
                      width={32}
                      height={32}
                      alt={student.name}
                    />
                    <span className="whitespace-nowrap">{student.name}</span>
                  </div>
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {student.score}
                </td>
                <td className="p-5 text-sm md:text-xl text-center">
                  {student.percentage}%
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
