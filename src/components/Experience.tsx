'use client'
import { experiencesData } from '@/lib/data';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default function Experience() {
    return (
        <div className='text-center'>
         <span className='text-center text-3xl font-bold'>   Experience</span>
            <VerticalTimeline lineColor=''>
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>

                            <VerticalTimelineElement contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid rgba(0,0,0,0.05)",
                                // textAlign: "center",
                                padding: "1.3rem 2rem",
                                color: "black"
                            }}
                                contentArrowStyle={{
                                    borderRight:
                                        //   theme === "light"
                                        "0.4rem solid #9ca3af"
                                    //     : "0.4rem solid rgba(255, 255, 255, 0.5)",
                                }}
                                date={item.date}
                                
                                icon={item.icon}
                                iconStyle={{
                                    background: "white",
                                    fontSize:"1.5rem"
                                }}
                            >    
                                <h3 className='font-semibold capitalize'>{item.title}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className =" !mt-1 !font-normal text-gray-700">{item.description}</p>
                        </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>

        
        </div>
    )
}

// interface Experience {
//     title: string;
//     role: string;
//     date: string;
//     description: string[];
//     skill:string
//   }
  
//   const ExperienceItem: React.FC<Experience> = ({ title, role, date, description ,skill}) => (
//     <motion.div className="my-6" variants={experienceItemVariants}>
//       <h2 className="font-bold text-xl">{title}</h2>
//       <p className="text-sm">{role}</p>
//       <p className="text-sm">{date}</p>
//       <p className="list-disc ">
//         {description.map((desc, index) => (
//           <p key={index}>{desc}</p>
//         ))}
//       </p>
//       <span className="font-semibold">Language and FrameWork: {skill}</span>
//     </motion.div>
//   );
  
//   const experienceItemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };