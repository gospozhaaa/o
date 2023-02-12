import './BlogCard.css'
//import 'material-icons/iconfont/material-icona/css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';

export const BlogCard = ({
    title,
    description,
    liked,
    likePost,
    deletePost
}) =>{
    const heartFill = liked? 'crimson' : 'black'
 likePost = (pos) => {
    const temp = [...this.state.blogArr];
    temp[pos].liked = !temp[pos].liked;
    this.setState({
        blogArr: temp
    })
 };
 deletePost = (pos) =>{

    if (window.confirm(`Удалить ${this.state.blogArr[pos].title}`)){
        const temp = [...this.state.blogArr];
        temp.splice(pos, 1);
        this.setState({
            BLOGaRR: temp
        })
    }
 }
    return(
        <div className='post'>
            <div className='posthead'>
            <h2>{title}</h2>
            <span className= 'deleteForeverButton' >
               <DeleteIcon/>
            </span>
            </div>
             <div className='desc'>
                {description}
                </div>
                <div className='button'>
                    <span className='favoriteButton' onClick={likePost}>
                        <ThumbUpIcon style = {{fill:heartFill}}/>
                    </span>
                </div>
             </div>)
}