
import { NotionText } from "/src/components/NotionText.jsx";


function StartAndEndOfWeeks(TargetDate , weeknumber){
  // console.log(TargetDate)
  let today = new Date(); //Dateをインスタンス化
  let thisYear = today.getFullYear(); //今年の年を取得
  let thisMonth = today.getMonth(); //今月を取得
  let date = today.getDate(); //今日の日にちを取得
  let dayNum = today.getDay(); //今日の曜日を取得（0～6までの数字でとれる）

  let thisStartSunday = date - dayNum - (weeknumber-1) * 7; //今日の日にちから曜日の数だけ引く
  let thisSunday = date - dayNum ; //今日の日にちから曜日の数だけ引く
  let thisSaturday = thisSunday + 6  //thisSundayに6を足す（はじめの日から6日後）
  let startTime = new Date(thisYear, thisMonth, thisStartSunday); // 日曜の0:00
  let endTime = new Date(thisYear, thisMonth, thisSaturday,23,59,59,999); //土曜の23:59

  return [startTime,endTime] //配列に入れて返す
}


export function WeekCalender(props)  {

  const posts = props.posts
  // console.log(props.targetdate)
  // console.log(props.weeknumber)
  // let thisWeekDate = StartAndEndOfWeeks(props.targetdate,props.weeknumber)
  let thisWeekDate = StartAndEndOfWeeks("2023/04/30",3)
  const startTime = new Date(thisWeekDate[0])
  const endTime = thisWeekDate[1]


  var thisdate = startTime
  // var thisdates = []
  // do {
  //   thisdate.setDate(thisdate.getDate()+1)
  //   thisdates.push(thisdate)
  //   console.log(thisdate)
  // } while (thisdate < endTime);
  var thisdates = Array.from(
      { length: Math.ceil((endTime - thisdate) / (1000 * 60 * 60 * 24)) }, (_, i) =>
      {
      const d = new Date(thisdate);
      d.setDate(d.getDate() + i + 1);
      return d;
  });



const events = {};

// イベント配列を作成
for (const date of thisdates) {
  // const keydate = date.toLocaleString(
  //   "ja",
  //   {
  //     month: "2-digit",
  //     day: "2-digit",
  //     year: "numeric",
  //   }
  // );
  events[date.toLocaleString(
    "ja",
    {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }
  )] = [];
}


// 各イベントを対応する日付の配列に追加
for (const date in events) {
// console.log(date)
// console.log((date,events[date]))
  events[date]= posts.filter(post =>{
    return (
        //"2023-05-05"　-> "2023/05/05"
        (post.properties.Date.date===null?"":post.properties.Date.date.start.replace(/-/g, "/") )
        === date
    )
  }
  );
  // console.log(events[date])
}
// console.log(posts)




  return (
  <>
      <div className="my-10">
        {startTime.toLocaleString(
            "ja",
            {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            }
        )}
        - {endTime.toLocaleString(
          "ja",
          {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          }
        )}
      </div>
      {/* <Calendar /> */}

    <div className="grid grid-cols-7 gap-4">
      {thisdates.map((date) =>{
        const datestring = date.toLocaleString(
          "ja",
          {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          })
        return (
          <div>
            <div>
              <p className="border border-gray-400 rounded-lg shadow-md text-gray-600 dark:text-gray-400 font-semibold">
              {datestring}
               </p>
            </div>
            <div
            >
              {
                datestring in events &&
                events[datestring].map((thisevent)=>{
                  return(
                    <p className="border border-gray-400 rounded-lg shadow-md m-1 p-1 text-gray-600 dark:text-gray-400 text-left">
                      <NotionText text={thisevent.properties.Thing.title} />
                    </p>
                    )
                  }
                )
              }
            </div>
          </div>
          )
      })}
    </div>

  </>
)
};


export  default WeekCalender;

