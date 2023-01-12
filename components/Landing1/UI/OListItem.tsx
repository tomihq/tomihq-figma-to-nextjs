export const OListItem = ({item, textStyles = ''}:any) => {
  return (
    <li className={`${item.linkable?'cursor-pointer':''} text-lg text-[#1F1534] ${item.selected?'font-bold':'opacity-50 font-normal'} ${textStyles}`}>{item.text}</li>
  )
}
