import React from "react";
import KeywordList from "./KeywordList.js";
import HistoryList from "./HistoryList.js";
import SearchForm from "./SearchForm.js";
import SearchResult from "./SearchResult.js";
import Tabs, { TabType } from "./Tabs.js";
import store from "../Store.js";
import { BiSearch } from "react-icons/bi";
import '../style.css';

export default class SearchPage extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: "",
            searchResult: [],
            submitted: false,
            selectedTab: TabType.HISTORY,
        };
    }

    handleChangeInput(searchKeyword) {
        if (searchKeyword.length <= 0) {
            this.handleReset();
        }

        this.setState({ searchKeyword });
    }

    search(searchKeyword) {
        const searchResult = store.search(searchKeyword);
        this.setState({
            searchKeyword,
            searchResult,
            submitted: true,
        });
    }

    handleReset() {
        this.setState({
            searchKeyword: "",
            searchResult: [],
            submitted: false,
        });
    }

    render() {
        const { searchKeyword, searchResult, submitted, selectedTab } = this.state;

        return (
            <div>

                <>
                {/*<Header/>*/}
                <div className="container">
                    <div className="searchTop">
                        <div className="searchMiddle">
                            <div className="searchBottom">
                                {/*<div className="magnifyingGlass" >*/}
                                    <BiSearch size="24" fill="#8b9097" />
                                {/*</div>*/}
                                <SearchForm
                                    value={searchKeyword}
                                    onChange={(value) => this.handleChangeInput(value)}
                                    onSubmit={() => this.search(searchKeyword)}
                                    onReset={() => this.handleReset()}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        {submitted ? (
                            <SearchResult data={searchResult} />
                        ) : (
                            <>
                                <div className='often'>
                                    <p style={{color:'#8D8D8D', fontWeight:600}}>자주 검색되는 건물</p>
                                    <KeywordList onClick={(keyword)=>this.search(keyword)} />
                                </div>
                                <div style={{marginTop:'120px',}}>
                                    <Tabs
                                        selectedTab={selectedTab}
                                        onChange={(selectedTab) => this.setState({ selectedTab })}
                                    />
                                    {/*{selectedTab === TabType.KEYWORD && (*/}
                                    {/*    <KeywordList onClick={(keyword) => this.search(keyword)} />*/}
                                    {/*)}*/}
                                    {selectedTab === TabType.HISTORY && (
                                        <HistoryList onClick={(keyword) => this.search(keyword)} />
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </>                
            </div>
        );
    }
}
