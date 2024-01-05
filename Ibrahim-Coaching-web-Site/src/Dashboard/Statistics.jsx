import React from 'react'
import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Name", "Job", "Employed", ""];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
];


const Statistics = () => {
  return (

    <>
    <div className="flex flex-col p-10">
  <div className='p-4'>
  <h2 className="text-2xl font-bold mb-4">
    Statistics
  </h2>
  <hr />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-4">
    <div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
      <div className="flex items-center justify-center bg-blue-50 h-12 w-12 rounded-full border border-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">574 Messages</h2>
        <p className="mt-2 text-sm text-gray-500">Last opened 4 days ago</p>
      </div>
    </div>

    <div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
      <div className="flex items-center justify-center bg-orange-50 h-12 w-12 rounded-full border border-orange-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">1823 Users</h2>
        <p className="mt-2 text-sm text-gray-500">Last checked 3 days ago</p>
      </div>
    </div>
    <div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
      <div className="flex items-center justify-center bg-red-50 h-12 w-12 rounded-full border border-red-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">548 Posts</h2>
        <p className="mt-2 text-sm text-gray-500">Last authored 1 day ago</p>
      </div>
    </div>
    <div className="flex items-start p-4 rounded-xl shadow-lg bg-white">
      <div className="flex items-center justify-center bg-indigo-50 h-12 w-12 rounded-full border border-indigo-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round"  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">129 Comments</h2>
        <p className="mt-2 text-sm text-gray-500">Last commented 8 days ago</p>
      </div>
    </div>
  </div>
</div>

    <Card className="h-full w-full p-7">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    
    </>
  )
}

export default Statistics