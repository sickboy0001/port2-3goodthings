import React from 'react';
import { NotionText } from "/src/components/NotionText.jsx";
import { GetYmdString } from "/src/lib/datetime";
GetYmdString

export function CalendarDay(props)  {
  // console.log(props)
  // const datestring = ""
  const datestring = GetYmdString(props.date);
  const dateforecolor = 
    props.date.getDay() === 0 ? "text-red-600" : 
    (props.date.getDay() === 6 ? "text-blue-600" : "text-gray-500");
  // console.log(props.event);
  return (
  <div key={datestring}>
      <div>
      
        <p className={`border border-gray-400 rounded-lg shadow-md m-0.5 dark:text-gray-400 font-semibold ${dateforecolor}`}>
          {datestring}
        </p>
      </div>
      <div>
        {
          props.event.map((thisevent,index)=>{
            //todo:components化推奨１
            return(
              <p key={index} className="border border-gray-400 rounded-lg shadow-md p-1 m-0.5 text-gray-600 dark:text-gray-400 text-left">
                <NotionText text={thisevent.properties.Thing.title} />
              </p>
              )
            }
          )
        }
      </div>
    </div>
  )
}



