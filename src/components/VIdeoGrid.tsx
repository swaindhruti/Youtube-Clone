import { VideoCard } from "./VideoCard";

const VideoCardData = [{
    title: "100 Days Of Code | Day 1",
    thumbnail: "thumbnail_1.jpg",
    channelImage: "thumbnail_1.jpg",
    channel: "Dhrutinandan Swain",
    views: "1.3M views | 10 days ago",
    }, {
    title: "100 Days Of Code | Day 2",
    thumbnail: "thumbnail_1.jpg",
    channelImage: "thumbnail_1.jpg",
    channel: "Dhrutinandan Swain",
    views: "1.3M views | 9 days ago",
    }, {
    title: "100 Days Of Code | Day 3",
    thumbnail: "thumbnail_1.jpg",
    channelImage: "thumbnail_1.jpg",
    channel: "Dhrutinandan Swain",
    views: "1.3M views | 8 days ago",
    }, {
    title: "100 Days Of Code | Day 4",
    thumbnail: "thumbnail_1.jpg",
    channelImage: "thumbnail_1.jpg",
    channel: "Dhrutinandan Swain",
    views: "1.3M views | 7 days ago",
    }, {
    title: "100 Days Of Code | Day 5",
    thumbnail: "thumbnail_1.jpg",
    channelImage: "thumbnail_1.jpg",
    channel: "Dhrutinandan Swain",
    views: "1.3M views | 6 days ago",
    },{
    title: "100 Days Of Code | Day 6",
    thumbnail: "thumbnail_1.jpg",
    channelImage: "thumbnail_1.jpg",
    channel: "Dhrutinandan Swain",
    views: "1.3M views | 5 days ago",
    },{
    title: "100 Days Of Code | Day 7",
    thumbnail: "thumbnail_1.jpg",
    channelImage: "thumbnail_1.jpg",
    channel: "Dhrutinandan Swain",
    views: "1.3M views | 4 days ago",
    },{
    title: "100 Days Of Code | Day 8",
    thumbnail: "thumbnail_1.jpg",
    channelImage: "thumbnail_1.jpg",
    channel: "Dhrutinandan Swain",
    views: "1.3M views | 3 days ago",
    },{
    title: "100 Days Of Code | Day 9",
    thumbnail: "thumbnail_1.jpg",
    channelImage: "thumbnail_1.jpg",
    channel: "Dhrutinandan Swain",
    views: "1.3M views | 2 days ago",
    },{
    title: "100 Days Of Code | Day 10",
    thumbnail: "thumbnail_1.jpg",
    channelImage: "thumbnail_1.jpg",
    channel: "Dhrutinandan Swain",
    views: "1.3M views | 1 day ago"
}].reverse();

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 m-2 mt-3">
        {VideoCardData.map((video) => <div>
            <VideoCard
            title={video.title}
            thumbnail={video.thumbnail}
            channelImage={video.channelImage}
            channel={video.channel}
            views={video.views}
            ></VideoCard>
        </div>)}
    </div>
};