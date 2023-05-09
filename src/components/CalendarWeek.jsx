import React from 'react';
import { CalendarDay } from "./CalendarDay";
import { GetYmdString } from "/src/lib/datetime";
import { useState ,useCallback} from "react";
import moment from 'moment'

export function CalendarWeek(props)  {

  const [count,setCount]  =useState(1)//状態？
  const [baseDate,setBaseDate]  =useState(GetYmdString(new Date()))

  
  const cols=7
  const endnumber = 1
  const startnumber = endnumber - cols*2
  const posts = props.posts
  console.log(baseDate)
  const startTime = moment(baseDate, 'yyyy MM DD').add(startnumber,"d").toDate()
  const endTime = moment(baseDate, 'yyyy MM DD').add(endnumber,"d").toDate()
  console.log(startTime.toString() + "-" + endTime.toString() )  

  const handleDayPrev = useCallback(
    (e)=>  {
      setBaseDate((prevBaseDate)=>{
        return moment(prevBaseDate,'YYYY/MM/DD').add(cols, 'd').format('YYYY/MM/DD')
      })
    },[baseDate]//意識する必要ない。レスポンスのために最適化する設定ぽい？
  );
  const handleDayBack = useCallback(
    (e)=>  {
      setBaseDate((prevBaseDate)=>{
        return moment(prevBaseDate,'YYYY/MM/DD').add(-cols, 'd').format('YYYY/MM/DD')
      })
    },[baseDate]//意識する必要ない。レスポンスのために最適化する設定ぽい？
  );

  var thisdate = startTime
  var thisdates = Array.from(
      { length: Math.ceil((endTime - thisdate) / (1000 * 60 * 60 * 24)) }, (_, i) =>
      {
      const d = new Date(thisdate);
      d.setDate(d.getDate() + i + 1);
      return d;
  });


  // イベント配列を作成
  const events = {};
  for (const date of thisdates) {
    events[GetYmdString(date)] = [];
  }

  // 各イベントを対応する日付の配列に追加
  for (const date in events) {
    events[date]= posts.filter(post =>{
        const thisdate = post.properties.Date.date; 
        // console.log(thisdate)
        return (
        //  ""
         date===(thisdate===null?"":thisdate.start.replace(/-/g, "/") )
        )
      }
      );
  }
  return (
  <>
      {/* //ダミー */}
      <div className="grid grid-cols-4 gap-4">
      </div>
      <div className="grid grid-cols-5 gap-4">
      </div>
      <div className="grid grid-cols-6 gap-4">
      </div>
      <div className="grid grid-cols-7 gap-4">
      </div>
      <div className="flex items-center justify-between py-2 px-6">
          <div className="leading-none rounded-lg transition ease-in-out inline-flex  p-1 items-center text-2xl" >
              {GetYmdString(startTime)}- {GetYmdString(endTime)}
						</div>
					<div className="border rounded-lg px-1" >
						<button 
							type="button"
							className="leading-none rounded-lg transition ease-in-out inline-flex items-center cursor-pointer hover:bg-gray-200 p-1 " 
              onClick={handleDayBack}>
 
							<svg className="h-6 w-6 text-gray-500 inline-flex leading-none"  >
								<path  d="M15 19l-7-7 7-7"/>
							</svg>  
						</button>
						<div className="leading-none rounded-lg transition ease-in-out inline-flex  p-1 items-center text-2xl" >
                Now
						</div>
						<button 
							type="button"
							className="leading-none rounded-lg transition ease-in-out inline-flex items-center cursor-pointer hover:bg-gray-200 p-1" 
		          onClick={handleDayPrev}>

							<svg className="h-6 w-6 text-gray-500 inline-flex leading-none"  >
								<path d="M9 5l7 7-7 7"/>
							</svg>									  
						</button>
					</div>
				</div>	
    <div className={`grid grid-cols-${cols.toString()} gap-4`}>
      {thisdates.map((date) =>{
        const thisdatestring = GetYmdString(date)
        const event = (thisdatestring in events?events[thisdatestring]:[])
        return (
          <div key={date}>
            <CalendarDay date={date} event={event} />
          </div>
          )
      })}
    </div>


  </>
)
};

