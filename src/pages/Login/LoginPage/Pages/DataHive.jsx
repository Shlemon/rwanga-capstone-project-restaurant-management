import { useSelector } from "react-redux";

const DataFromSlice = () => useSelector((state) => state.menuPages.pages);

// I need to learn JS classes man, this is a mess
export default class DataHive {
    #pages;
    #itemTitles;
    #contentTitles;
    #pageContent;

    constructor() {
        this.#pages = DataFromSlice();
        
        this.#itemTitles = [];
        this.#contentTitles = [];
        this.#pageContent = [];

        this.#initialize();
    }
    #initialize() 
    {
        const itemTitles = [];
        const contentTitle = [];
        const pageContent = [];

        Object.entries(this.#pages).forEach(
            (kV) => {
                // Populate itemTitles here
                itemTitles.push(kV[0]);
                // Get inside pageContent
                kV[1].pageContent.forEach(
                    (array) => {
                        // Populate contentTitles here
                        // If category has more than one content, add first and then append rest
                        kV[0] in contentTitle ? contentTitle[kV[0]].push(array.name) : contentTitle[kV[0]] = [array.name];
                        // Get inside items of current content
                        array.items.forEach(
                            (dict) => {
                                // If Category exists
                                if(kV[0] in pageContent){
                                    // If content exists in category, append data to list
                                    if(array.name in pageContent[kV[0]]){
                                        pageContent[kV[0]][array.name].push(dict);
                                    } else{
                                        // If Content doesnt exist, create content and append data
                                        pageContent[kV[0]][array.name] = [dict];
                                    }
                                } else{
                                    // If Category doesnt exist, create all
                                    pageContent[kV[0]] = {[array.name]: [dict]};
                                }})
                            })
                        })
        this.#itemTitles = itemTitles;
        this.#contentTitles = contentTitle;
        this.#pageContent = pageContent;
    }
    getHeaderTitle(){
        return this.#itemTitles;
    }
    getContentTitles(){
        return this.#contentTitles;
    }
    getContentBody(){
        return this.#pageContent;
    }
    display()
    {
        console.log('itemTitles: ', this.#itemTitles);
        console.log('contentTitles: ', this.#contentTitles);
        console.log('pageContent: ', this.#pageContent);
    }
}