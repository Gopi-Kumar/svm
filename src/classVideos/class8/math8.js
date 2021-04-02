const videoData = [
    {
        chapter:1,
        name : "परिमेय संख्याएँ",
        link:["T8PO6l0lqbs","Fkq2UPkvDwo","mKbqiW9co3M","FUKhXF4nx6Y","QTHqD2HkGxU","6snpHoIXr5U","aPAbFsevLGg","5AZ2SD1Os6M","8rlyw8HEs0g"],
    },
]
const math8 = () => {

    return (
        <div className="classes">
          {videoData.map(data => {
            return (
                <div key={data.chapter} className="chapter">
                    <p className="chapter_name">{data.chapter}.{data.name}</p>
                    <div className="class_list">
                        {data.link.map(link => {
                            return (
                                <iframe key = { Math.random()}  src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"    allowFullScreen></iframe>
                            )
                        })}
                    </div>

                </div>
            )
         })}
        </div>
    )
}
export default math8;