export function GetYmdString(PropsDate) {
  return(PropsDate.toLocaleString(
    "ja",
    {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }))
  
}
