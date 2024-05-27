export function VideoCard(props: any) {
  return (
    <div>
      <img className="h-80 rounded-xl" src="\thumbnail_1.jpg"></img>
      <div className="grid grid-cols-12 pt-2 pl-2">
        <div className="col-span-1">
          <img className="rounded-full w-20 h-20" src="\thumbnail_1.jpg"></img>
        </div>
        <div className="col-span-11 pl-3">
          <div className="text-lg">100 Days Of Code | Day 1</div>
          <div className="text-gray-400">Dhrutinandan Swain</div>
          <div className="text-gray-400">1.3Mn | 13 days ago</div>
        </div>
      </div>
    </div>
  );
}
