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
  const datebgcolor = 
    props.date.getDay() === 0 ? "bg-red-100" : 
    (props.date.getDay() === 6 ? "bg-blue-100" : "bg-sky-50");
  // console.log(props.event);
  return (
  <div key={datestring}>
      <div>
      
        <div className={`border border-gray-100 shadow-lg m-0.5 dark:text-gray-400 font-semibold bg-sky-50 ${dateforecolor} ${datebgcolor}`}>
          {datestring}
          <div>
        {props.event.map((thisevent,index)=>{
            // var test = [thisevent.properties.Thing.title...thisevent.properties.Text.rich_text]
            // var test = [thisevent.properties.Thing.title]
            // console.log(test)
            // var test = [...thisevent.properties.Thing.title , ...thisevent.properties.Text.rich_text]
            // console.log(test)

            return(
              <p key={index} className="border border-gray-400 rounded-lg shadow-md p-1 m-0.5 bg-white text-gray-600 dark:text-gray-400 text-left">
                <NotionText text={[...thisevent.properties.Thing.title , ...thisevent.properties.Text.rich_text] } />
              </p>
              )
            }
          )
        }
      </div>
        </div>
      </div>
    </div>
  )
}



