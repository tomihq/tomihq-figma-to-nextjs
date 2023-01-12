import { OList } from "./OList"

interface IListData {
    text: string;
    linkable?:boolean;
    url?: string;
}

interface VerticalMenuProps{
    category: string;
    data: IListData[]
}

export const VerticalMenu = ({category, data}:VerticalMenuProps) => {
  return (
    <section className='flex flex-col  gap-7 items-start mt-2'>
                <span className="font-bold text-xl inline-block text-white "> {category} </span>
                {
                    <OList data={data} styles={"flex flex-col gap-3"} textStyles={"text-white opacity-100"} />
                }
           </section>
  )
}
