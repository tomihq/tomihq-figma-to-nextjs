export const Dot = ({opacity = '0.3', fillColor = '#93C1F9'}) =>{
  return(
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" opacity={opacity}>
    <circle cx="5" cy="5" r="5" fill={fillColor} />
   </svg>


  )
}


export const DotsSection = ({classes = '', padding =  'py-2', margin = 'ml-4'}) => {
  return (
    <div className={`w-32 flex gap-8 flex-wrap ${classes} ${padding} ${margin}`}> 
      {
        Array(15).fill(Math.random()).map((data, i) => <Dot key={i} />)
      }
    </div>
  )
}
