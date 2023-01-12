import { OListItem } from "./OListItem"


interface IOList {
    styles?: string;
    data: IListData[]
    textStyles?: string;
}

interface IListData {
    text: string;
    linkable?:boolean;
    url?: string;
}

export const OList = ({styles = "flex flex-row gap-8", data, textStyles=''}: IOList) => {
  return (
    <ol className={styles}>
        {
            Array.isArray(data)?data.map((item: IListData) => <OListItem item={item} textStyles={textStyles} key={item.text} />)
                               :<OListItem item={data} textStyles={textStyles} />

        }
               
    </ol>
  )
}
