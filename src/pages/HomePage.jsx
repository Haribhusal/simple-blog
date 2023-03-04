import ArticleComponent from "../components/ArticleComponent";
import PageTitleComponent from "../components/PageTitleComponent";

const HomePage = () => {
    return (
        <div className="bg-gray-200">
            <PageTitleComponent />
            <div className="articles grid grid-cols-3 gap-10 px-10">
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />

            </div>
        </div>
    )
}

export default HomePage;