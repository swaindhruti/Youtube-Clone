export function VideoCard(props: any) {
  return (
    <div>
      <img className="h-64 w-96 rounded-xl" src={props.thumbnail}></img>
      <div className="grid grid-cols-12 pt-2 pl-2">
        <div className="col-span-1">
          <img className="rounded-full h-16 w-16" src={props.channelImage}></img>
        </div>
        <div className="col-span-11 pl-2">
          <div className="text-base">{props.title}</div>
          <div className="text-gray-400 text-sm">{props.channel}</div>
          <div className="text-gray-400 text-sm">{props.views}</div>
        </div>
      </div>
    </div>
  );
}
