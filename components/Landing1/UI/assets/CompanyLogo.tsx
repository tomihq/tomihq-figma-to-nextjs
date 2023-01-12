export const CompanyLogo = ({fontColor = 'white', circleColor = "#458FF6"}) => {
  return (
         <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
                <circle cx="20.5" cy="20.5" r="20.5" fill={circleColor} />
                <text x="12" y="31"  fontSize="26" fill={fontColor} fontWeight={700}>T</text>
            </g>
        </svg>
       
  )
}
