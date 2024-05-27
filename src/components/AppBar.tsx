import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="flex flex-row justify-between mt-3 mr-2 ml-2">
        <div className="flex gap-3">
            <img className="h-8 w-8" src="menu.png"/>
            <img className="h-8 w-8" src="youtube.png"/>
        </div>
        <div>
            <SearchBar />
        </div>
        <div className="flex gap-2">
            <div className="mt-1">Sign In</div>
            <img className="h-8 w-8" src="signin.png"/>
        </div>
    </div>
}