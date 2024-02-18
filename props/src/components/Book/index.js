import BookAuthorName from "../BookAuthorName";
import BookImage from "../BookImage";
import BookName from "../BookName";
import BookPrice from "../BookPrice";

function Book(props) {
    return <>
        <div className="book">
            <BookImage url={props.image} />
            <div className="bookItem">
            <BookName name={props.name} />
            <BookAuthorName author={props.author}/>
            <BookPrice price={props.price}/>
            </div>
            
        </div>
    </>
}
export default Book;